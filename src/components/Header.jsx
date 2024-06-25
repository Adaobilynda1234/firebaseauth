import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-4 shadow-sm mb-8">
      <div className="flex flex-col md:flex-row items-center">
        <h1 className="text-xl font-bold mb-4 md:mb-0">Hello Evano 👋</h1>
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="border rounded-lg p-2 w-full md:w-auto"
      />
    </div>
  );
};

export default Header;
