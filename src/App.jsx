import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RegisterStep2 from "./pages/RegisterStep2";
import RegisterStep3 from "./pages/RegisterStep3";
import RegisterStep4 from "./pages/RegisterStep4";
import RegisterStep5 from "./pages/RegisterStep5";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
