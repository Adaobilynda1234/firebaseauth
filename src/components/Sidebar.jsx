import React, { useState } from "react";
import Logo from "../assets/setting 1.png";
import Income from "../assets/wallet-money 2.png";
import Help from "../assets/message-question 1.png";
import Promote from "../assets/discount-shape 1.png";
import Dashboard from "../assets/key-square.png";
import Product from "../assets/3d-square 1.png";
import Customers from "../assets/user-square 1.png";
import Profile from "../assets/Ellipse 8.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 w-64 bg-white h-screen shadow-lg p-4 z-50 flex flex-col justify-between`}
      >
        <div>
          <div className="flex  items-center mb-8">
            <img src={Logo} className="mr-2" />
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-xl"
            >
              <FaTimes />
            </button>
          </div>
          <ul>
            <li className="mb-8 flex items-center">
              <img src={Dashboard} className="mr-4" />
              <a href="">Dashboard</a>
            </li>
            <li className="mb-8 flex items-center">
              <img src={Product} className="mr-2" />
              <a href="">Products</a>
            </li>
            <li className="mb-8 flex items-center bg-[#5932EA] px-4 py-2 rounded-md text-white">
              <img src={Customers} className="mr-8" />
              <a href="">Customers</a>
            </li>
            <li className="mb-8 flex items-center">
              <img src={Income} className="mr-2" />
              <a href="">Income</a>
            </li>
            <li className="mb-8 flex items-center">
              <img src={Promote} className="mr-2" />
              <a href="">Promote</a>
            </li>
            <li className="mb-8 flex items-center">
              <img src={Help} className="mr-2" />
              <a href="">Help</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="bg-gradient-to-r from-purple-400 to-blue-500 text-white p-4 rounded-lg mb-4 text-center mt-8">
            <p>Upgrade to Pro to get access to all features!</p>
            <button className="bg-white text-purple-700 mt-2 px-4 py-2 rounded-lg font-semibold">
              Get Pro Now!
            </button>
          </div>
          <div className="flex items-center">
            <img
              src={Profile}
              alt="Profile"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="font-semibold">Evano</p>
              <p className="text-sm text-gray-500">Project Manager</p>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 md:hidden text-xl z-50"
      >
        <FaBars />
      </button>
    </>
  );
};

export default Sidebar;
