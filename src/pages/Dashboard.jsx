import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardMetrics from "../components/DashboardMetrics";
import CustomersTable from "../components/CustomersTable";

const App = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <Header />
        <DashboardMetrics />
        <CustomersTable />
      </div>
    </div>
  );
};

export default App;
