import React from "react";

const DisplayUsers = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        User Records
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-gray-700 font-semibold border-b">
                Sr.ID
              </th>
              <th className="px-6 py-3 text-left text-gray-700 font-semibold border-b">
                Name
              </th>
              <th className="px-6 py-3 text-left text-gray-700 font-semibold border-b">
                Email
              </th>

              <th className="px-6 py-3 text-center text-gray-700 font-semibold border-b">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition">
              <td className="px-6 py-3 border-b">1</td>
              <td className="px-6 py-3 border-b">John Doe</td>
              <td className="px-6 py-3 border-b">john@example.com</td>

              <td className="px-6 py-3 border-b text-center space-x-2">
                <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600">
                  Edit
                </button>
                <button className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition">
              <td className="px-6 py-3 border-b">2</td>
              <td className="px-6 py-3 border-b">Jane Smith</td>
              <td className="px-6 py-3 border-b">jane@example.com</td>

              <td className="px-6 py-3 border-b text-center space-x-2">
                <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600">
                  Edit
                </button>
                <button className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayUsers;
