import React, { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineEnvironment,
  AiOutlineUser,
  AiOutlineClockCircle,
  AiOutlineDollarCircle,
} from "react-icons/ai";

const RegisterStep3 = ({ onNextStep }) => {
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (address.trim() === "") {
      setError("Please enter an address");
      return;
    }
    // Handle form submission logic here
    console.log("Form submitted with address:", address);
    onNextStep();
    // Reset form state
    setAddress("");
    setError("");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
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
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="relative mb-6">
          <input
            type="text"
            className={`w-full px-4 py-2 border ${
              error ? "border-red-500" : "border-gray-300"
            } rounded-lg pr-12 focus:outline-none focus:border-blue-500`}
            placeholder="Search for address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {/* <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <AiOutlineSearch className="w-4 h-4 text-gray-400" />
          </div> */}
          <p className="text-xs text-gray-400 mt-1">
            Your address is not visible to other users
          </p>
          {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-[#5932EA] focus:outline-none"
          >
            <AiOutlineEnvironment className="w-5 h-5 mr-2" />
            Use Current Location
          </button>
          <button
            type="submit"
            className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-[#5932EA] ml-2 focus:outline-none"
          >
            Add Manually
          </button>
        </div>
      </form>
      <div className="mt-10">
        <h3 className="font-bold">Sharing your address shows</h3>
        <div className="flex items-center">
          <AiOutlineUser className="w-6 h-6 mr-2" />
          <p className="text-sm">People near you</p>
        </div>
        <div className="flex items-center mt-4">
          <AiOutlineClockCircle className="w-6 h-6 mr-2" />
          <p className="text-sm">Estimated delivery time</p>
        </div>
        <div className="flex items-center mt-4">
          <AiOutlineDollarCircle className="w-6 h-6 mr-2" />
          <p className="text-sm">Estimated shipping costs</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterStep3;
