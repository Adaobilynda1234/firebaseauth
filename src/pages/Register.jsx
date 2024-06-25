import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaCheck } from "react-icons/fa";
import Apple from "../assets/Apple.svg";
import Facebook from "../assets/Facebook.svg";
import Google from "../assets/Google.svg";
import { Link } from "react-router-dom";

const Register = ({ onNextStep }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateEmail = () => {
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();

    if (!emailError && !passwordError) {
      onNextStep({ email, password });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="mb-6">
          <Link to="/" className="hover:border-b-2 hover:border-[#EF498F]">
            Register
          </Link>
          <Link
            to="/login"
            className=" ml-6 hover:border-b-2 hover:border-[#EF498F]"
          >
            Log in
          </Link>
          <button
            type="button"
            className="text-gray-500 ml-48 hover:text-gray-600"
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
        </div>

        <div className="flex justify-start mb-6 space-x-4">
          <img src={Apple} className=" hover:bg-gray-300" />

          <img src={Facebook} className=" hover:bg-gray-300" />

          <img src={Google} className=" hover:bg-gray-300" />
        </div>

        <div className=" mb-6">
          <p className="text-gray-500">or register with email</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <div className="relative">
              <input
                className={`w-full px-3 py-2 border ${
                  emailError ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring ${
                  emailError ? "focus:ring-red-100" : "focus:ring-indigo-100"
                } focus:border-${emailError ? "red-300" : "indigo-300"}`}
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
                required
              />
              {email && !emailError && (
                <FaCheck className="absolute right-3 top-3 text-green-500" />
              )}
            </div>
            {emailError && (
              <p className="text-xs text-red-500 mt-1">{emailError}</p>
            )}
          </div>
          <div>
            <div className="relative">
              <input
                className={`w-full hover:border-[#5932EA] px-3 py-2 border ${
                  passwordError ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring ${
                  passwordError ? "focus:ring-red-100" : "focus:ring-indigo-100"
                } focus:border-${passwordError ? "red-300" : "indigo-300"}`}
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={validatePassword}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {password && !passwordError && (
                <FaCheck className="absolute right-10 top-3 text-green-500" />
              )}
            </div>
            {passwordError && (
              <p className="text-xs text-red-500 mt-1">{passwordError}</p>
            )}
            <p className="text-xs text-gray-500 mt-1">8+ characters</p>
          </div>

          <button
            className="w-full bg-[#5932EA] text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="submit"
          >
            Create Account
          </button>
          <div>
            <input
              type="checkbox"
              id="promotions"
              name="promotions"
              className="mr-2"
            />
            <label htmlFor="promotions" className="text-sm text-gray-700">
              Send me news and promotions
            </label>
          </div>
        </form>

        <div className="text-center mt-6 text-sm text-gray-500">
          <p>
            By continuing, I agree with the{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
