import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, updateUser } from "../features/userSlice";
import { toast } from "react-toastify";

export default function DisplayUsers() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [selectedUser, setSelectedUser] = useState(null);
  const [updateFormData, setUpdateFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "user",
  });

  // When selectedUser changes, copy its data into updateFormData
  useEffect(() => {
    if (selectedUser) {
      setUpdateFormData(selectedUser);
    }
  }, [selectedUser]);

  const handleForm = (e) => {
    const { id, value } = e.target;
    setUpdateFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSave = () => {
    dispatch(updateUser(updateFormData));
    toast.success("User Updated Successfully...!!!", { autoClose: 2000 });
    setSelectedUser(null);
  };
  return (
    <div className="w-[66%] bg-slate-800 border border-slate-700 rounded-xl shadow-lg p-3">
      <h1 className="font-semibold text-white mb-6 text-3xl">User Records</h1>

      <table className="w-full text-left border-collapse rounded-2xl">
        <thead>
          <tr className="bg-slate-700 text-slate-200">
            <th className="p-3 border border-slate-600">Sr.No</th>
            <th className="p-3 border border-slate-600">Full Name</th>
            <th className="p-3 border border-slate-600">Email</th>
            <th className="p-3 border border-slate-600">Phone</th>
            <th className="p-3 border border-slate-600">Role</th>
            <th className="p-3 border border-slate-600 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="6" className="p-6">
                <div className="flex flex-col items-center justify-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7486/7486740.png"
                    alt="no-records"
                    className="w-[180px] h-[180px] object-contain mb-4"
                  />
                  <h2 className="text-2xl font-semibold text-white">
                    Records not found ...?
                  </h2>
                </div>
              </td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr key={user.id} className="text-slate-300">
                <td className="p-3 border border-slate-600">{index + 1}</td>
                <td className="p-3 border border-slate-600">{user.name}</td>
                <td className="p-3 border border-slate-600">{user.email}</td>
                <td className="p-3 border border-slate-600">{user.phone}</td>
                <td className="p-3 border border-slate-600">{user.role}</td>
                <td className="p-3 border border-slate-600 text-center">
                  <button
                    onClick={() => setSelectedUser(user)}
                    className="px-3 py-1 mr-2 rounded-md cursor-pointer bg-green-600 text-white text-sm font-medium hover:bg-green-700"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => dispatch(removeUser(user.id))}
                    className="px-3 py-1 rounded-md bg-red-500 text-white cursor-pointer text-sm font-medium hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Update Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-slate-800 text-white rounded-xl shadow-xl w-[400px] p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedUser(null)}
              className="absolute top-3 right-3 text-slate-400 hover:text-white cursor-pointer"
            >
              ✖
            </button>

            <div className="mt-4">
              <table className="w-full border border-slate-700 rounded-lg overflow-hidden">
                <tbody>
                  <tr>
                    <td colSpan={2} className="px-4 py-3">
                      <h2 className="text-2xl font-bold text-white mb-2">
                        Update User
                      </h2>
                    </td>
                  </tr>

                  <tr className="border-t border-slate-700">
                    <td className="px-4 py-3 w-32 font-semibold text-slate-200">
                      Name :
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        id="name"
                        value={updateFormData.name}
                        onChange={handleForm}
                        className="w-full px-3 py-2 bg-slate-800 text-white border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                  </tr>

                  <tr className="border-t border-slate-700">
                    <td className="px-4 py-3 font-semibold text-slate-200">
                      Email :
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        id="email"
                        value={updateFormData.email}
                        onChange={handleForm}
                        className="w-full px-3 py-2 bg-slate-800 text-white border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                  </tr>

                  <tr className="border-t border-slate-700">
                    <td className="px-4 py-3 font-semibold text-slate-200">
                      Phone :
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        id="phone"
                        value={updateFormData.phone}
                        onChange={handleForm}
                        className="w-full px-3 py-2 bg-slate-800 text-white border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                  </tr>

                  <tr className="border-t border-slate-700">
                    <td className="px-4 py-3 font-semibold text-slate-200">
                      Role :
                    </td>
                    <td className="px-4 py-3">
                      <select
                        id="role"
                        value={updateFormData.role}
                        onChange={handleForm}
                        className="w-full px-3 py-2 bg-slate-800 text-white border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="user">User</option>
                        <option value="editor">Editor</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setSelectedUser(null)}
                className="px-4 py-2 rounded-md bg-red-500 hover:bg-red-700 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
