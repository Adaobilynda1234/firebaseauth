// src/components/RegisterParent.js
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../utils/firebase";
import Register from "./Register";
import RegisterStep2 from "./RegisterStep2";
import RegisterStep3 from "./RegisterStep3";
import RegisterStep4 from "./RegisterStep4";
import RegisterStep5 from "./RegisterStep5";

const Home = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    fullName: "",
    gender: "",
    phoneCode: "",
    phoneNumber: "",
    birthday: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleNextStep = (data) => {
    setUserData((prevData) => ({ ...prevData, ...data }));
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      toast.success("Account created successfully!");
      setCurrentStep(currentStep + 1);
    } catch (error) {
      toast.error("Error during registration: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ToastContainer />
      {currentStep === 1 && <Register onNextStep={handleNextStep} />}
      {currentStep === 2 && <RegisterStep2 onNextStep={handleNextStep} />}
      {currentStep === 3 && <RegisterStep3 onNextStep={handleNextStep} />}
      {currentStep === 4 && (
        <RegisterStep4
          onNextStep={handleNextStep}
          onRegister={handleRegister}
        />
      )}
      {currentStep === 5 && <RegisterStep5 />}
    </div>
  );
};

export default Home;
