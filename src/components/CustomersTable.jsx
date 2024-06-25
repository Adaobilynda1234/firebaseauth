import React, { useState } from "react";

const customers = [
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phone: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active",
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive",
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phone: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive",
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phone: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active",
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phone: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Rwanda",
    status: "Active",
  },
  {
    name: "Kathryn Murphy",
    company: "Apple",
    phone: "(406) 555-0120",
    email: "kathryn@apple.com",
    country: "Curaçao",
    status: "Inactive",
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phone: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active",
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phone: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Active",
  },
];

const CustomersTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-4 rounded-lg shadow-md overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">All Customers</h3>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-lg p-2 w-full md:w-auto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select className="border rounded-lg p-2">
            <option value="newest">Sort by: Newest</option>
            <option value="oldest">Sort by: Oldest</option>
          </select>
        </div>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-2">Customer Name</th>
            <th className="py-2 hidden md:table-cell">Company</th>
            <th className="py-2">Phone Number</th>
            <th className="py-2 hidden md:table-cell">Email</th>
            <th className="py-2 hidden md:table-cell">Country</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer, index) => (
            <tr key={index} className="border-t">
              <td className="py-2">{customer.name}</td>
              <td className="py-2 hidden md:table-cell">{customer.company}</td>
              <td className="py-2">{customer.phone}</td>
              <td className="py-2 hidden md:table-cell">{customer.email}</td>
              <td className="py-2 hidden md:table-cell">{customer.country}</td>
              <td className="py-2">
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    customer.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {customer.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <div className="text-gray-600">Showing data 1 to 8 of 256K entries</div>
        <div className="flex space-x-1">
          <button className="px-2 py-1 bg-gray-200 rounded-md">Prev</button>
          <button className="px-2 py-1 bg-blue-500 text-white rounded-md">
            1
          </button>
          <button className="px-2 py-1 bg-gray-200 rounded-md">2</button>
          <button className="px-2 py-1 bg-gray-200 rounded-md">3</button>
          <button className="px-2 py-1 bg-gray-200 rounded-md">4</button>
          <button className="px-2 py-1 bg-gray-200 rounded-md">40</button>
          <button className="px-2 py-1 bg-gray-200 rounded-md">Next</button>
        </div>
      </div>
    </div>
  );
};

export default CustomersTable;
