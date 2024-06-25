import React from "react";
// import { FaUsers, FaChartBar, FaUser } from "react-icons/fa";
import Totalcustomerimg from "../assets/Group 10.png";
import Members from "../assets/Group 10 (1).png";
import Activemembers from "../assets/Group 10 (2).png";

const metrics = [
  {
    title: "Total Customers",
    value: "5,423",
    icon: Totalcustomerimg,
  },
  {
    title: "Active Customers",
    value: "1,893",
    icon: Members,
  },
  {
    title: "Inactive Customers",
    value: "189",
    icon: Activemembers,
  },
];

const DashboardMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow-md flex items-center"
        >
          <div className="p-4 bg-gray-100 rounded-full mr-4">
            <img src={metric.icon} />
          </div>
          <div>
            <h3 className="text-gray-500">{metric.title}</h3>
            <div className="text-2xl font-bold">{metric.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardMetrics;
