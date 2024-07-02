import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { CalendarIcon, InformationCircleIcon } from "@heroicons/react/solid";

const countries = [
  { code: "+234" },
  { code: "+44" },
  { code: "+91" },
  // Add more countries as needed
];

const RegisterStep2 = ({ onNextStep }) => {
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [phoneCode, setPhoneCode] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthday, setBirthday] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!fullName) newErrors.fullName = "Full name is required";
    if (!gender) newErrors.gender = "Gender is required";
    if (!phoneNumber) newErrors.phoneNumber = "Phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Handle form submission
      console.log("Form submitted successfully");
      onNextStep();
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg sm:text-xl font-semibold ml-2">
          Personal Information
        </h2>
        <p className="text-green-500">2 of 3</p>
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

      <div className="mb-6">
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="mt-1 mb-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 px-4 py-2"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
        )}
      </div>

      <div className="mb-6">
        <div className="mt-1 flex items-center space-x-6">
          <div className="flex items-center">
            <span className="block text-sm font-medium text-gray-700 mr-4">
              Gender
            </span>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={(e) => setGender(e.target.value)}
              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
            />
            <label
              htmlFor="male"
              className="ml-2 block text-sm font-medium text-gray-700"
            >
              Male
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={(e) => setGender(e.target.value)}
              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
            />
            <label
              htmlFor="female"
              className="ml-2 block text-sm font-medium text-gray-700"
            >
              Female
            </label>
          </div>
        </div>
        {errors.gender && (
          <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
        )}
      </div>

      <div className="mb-6 relative z-10">
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <InformationCircleIcon className="h-5 w-5 mr-1" />
          The phone number and birthday are only visible to you.
        </div>
        <div className="flex">
          <Listbox value={phoneCode} onChange={setPhoneCode}>
            <div className="relative w-28">
              <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                {phoneCode.code}
              </Listbox.Button>
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {countries.map((country) => (
                  <Listbox.Option
                    key={country.code}
                    value={country}
                    className={({ active }) =>
                      `cursor-pointer select-none relative py-2 pl-10 pr-4 ${
                        active ? "text-blue-900 bg-blue-100" : "text-gray-900"
                      }`
                    }
                  >
                    {country.code}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
          <input
            type="number"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="flex-1 ml-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 px-4 py-2"
          />
        </div>
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
        )}
      </div>

      <div className="mb-8 relative">
        <input
          type="date"
          placeholder="Birthday (Optional)"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 mt-4 px-4 py-2"
        />
        <CalendarIcon className="h-5 w-5 text-gray-400 absolute top-2 right-2 pointer-events-none" />
        <p className="text-gray-500 text-sm mt-4">
          Let us know about your birthday so as not to miss a gift.
        </p>
      </div>

      <div className="mt-6">
        <button
          onClick={handleSubmit}
          className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#5932EA] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Save Information
        </button>
      </div>
    </div>
  );
};

export default RegisterStep2;
