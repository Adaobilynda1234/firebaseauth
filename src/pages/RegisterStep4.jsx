import React, { useState } from "react";

const RegisterStep4 = ({ onNextStep, onRegister }) => {
  const [formData, setFormData] = useState({
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [errors, setErrors] = useState({
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    let formValid = true;
    const newErrors = {
      address: "",
      city: "",
      state: "",
      zipCode: "",
    };

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
      formValid = false;
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
      formValid = false;
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required";
      formValid = false;
    }

    if (!formData.zipCode.trim()) {
      newErrors.zipCode = "Zip Code is required";
      formValid = false;
    }

    setErrors(newErrors);

    if (formValid) {
      // Handle form submission (e.g., save data)
      console.log("Form data:", formData);
      onRegister();
      onNextStep();
      // Reset form
      setFormData({
        address: "",
        apartment: "",
        city: "",
        state: "",
        zipCode: "",
      });
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold ">Add address </h2>
        <p className="ml-2 text-green-500"> 3 of 3</p>
        <button type="button" className="text-gray-500 hover:text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Street Address"
            className={`w-full px-3 py-2 border mt-8 ${
              errors.address && "border-red-500"
            } rounded`}
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">{errors.address}</p>
          )}
        </div>
        <div className="mb-8">
          <input
            type="text"
            name="apartment"
            value={formData.apartment}
            onChange={handleChange}
            placeholder="Apartment optional"
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div className="mb-8">
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className={`w-full px-3 py-2 border ${
              errors.city && "border-red-500"
            } rounded`}
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city}</p>
          )}
        </div>
        <div className="flex mb-8">
          <div className="w-1/2 mr-2">
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              className={`w-full px-3 py-2 border ${
                errors.state && "border-red-500"
              } rounded`}
            />
            {errors.state && (
              <p className="text-red-500 text-sm mt-1">{errors.state}</p>
            )}
          </div>

          <div className="w-1/2 ml-2">
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="Zip Code"
              className={`w-full px-3 py-2 border ${
                errors.zipCode && "border-red-500"
              } rounded`}
            />
            {errors.zipCode && (
              <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>
            )}
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#5932EA] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Save Information
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterStep4;
