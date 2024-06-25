import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaCheck } from "react-icons/fa";
import Apple from "../assets/Apple.svg";
import Facebook from "../assets/Facebook.svg";
import Google from "../assets/Google.svg";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");
  const navigate = useNavigate();

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

  const handleLogin = async (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();

    if (emailError || passwordError) return;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      setGeneralError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Signed in with Google!");
      navigate("/dashboard");
    } catch (error) {
      setGeneralError(error.message);
    }
  };

  const handleFacebookSignIn = async () => {
    const provider = new FacebookAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Signed in with Facebook!");
      navigate("/dashboard");
    } catch (error) {
      setGeneralError(error.message);
    }
  };

  const handleAppleSignIn = async () => {
    const provider = new OAuthProvider("apple.com");
    try {
      await signInWithPopup(auth, provider);
      alert("Signed in with Apple!");
      navigate("/dashboard");
    } catch (error) {
      setGeneralError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="flex justify-start items-center mb-6">
          <Link to="/" className="hover:border-b-2 hover:border-[#EF498F] ml-3">
            Register
          </Link>
          <Link
            to="/login"
            className=" hover:border-b-2 hover:border-[#EF498F] ml-3"
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
          <img
            src={Apple}
            className="hover:bg-gray-300"
            onClick={handleAppleSignIn}
          />

          <img
            src={Facebook}
            className=" hover:bg-gray-300"
            onClick={handleFacebookSignIn}
          />

          <img
            src={Google}
            className=" hover:bg-gray-300"
            onClick={handleGoogleSignIn}
          />
        </div>

        <div className="mb-6">
          <p className="text-gray-500">or login with email</p>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <div className="relative">
              <input
                className={`w-full px-3 py-2 hover:border-[#5932EA] border ${
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
                className={`w-full px-3 py-2 hover:border-[#5932EA] border ${
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
          </div>
          <div>
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="mr-2"
            />
            <label htmlFor="remember" className="text-sm text-gray-700">
              Remember Me
            </label>
          </div>
          {generalError && (
            <p className="text-xs text-red-500 mt-1">{generalError}</p>
          )}
          <button
            className="w-full bg-[#5932EA] text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="submit"
          >
            Go to Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
