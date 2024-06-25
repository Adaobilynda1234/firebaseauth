import React from "react";
import Sucessimg from "../assets/sucess.png";
import { Link } from "react-router-dom";

const RegisterStep5 = () => {
  return (
    <div className="relative overflow-hidden bg-white col-start-1 col-end-12 md:col-start-3 md:col-end-10 lg:col-start-5 lg:col-end-8 w-full rounded-[24px] shadow-lg">
      <button
        type="button"
        className="text-gray-500 hover:text-gray-600 absolute top-[32px] end-[32px]"
      >
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
      <div className="bg-[#EF498F24] flex items-center justify-center">
        <img src={Sucessimg} role="presentation" />
      </div>
      <div className="px-[10px] md:px-[44px] pt-[16px] pb-[24px]">
        <h1 className="font-bold leading-[48px] text-[#1A0710D9] text-[44px] my-[44px] text-center md:text-left">
          You are successfully registered!
        </h1>
        <Link
          to="/login"
          className="text-center w-full block my-[48px] text-white bg-[#5932EA] rounded-[12px] py-[16px] cursor-pointer font-bold"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default RegisterStep5;
