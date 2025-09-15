import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/userSlice";

export default function UserForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "user",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(formData));

    // console.log("Form Submitted:", formData);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      role: "user",
    });
  };

  return (
    <div className="w-1/3 bg-slate-800 border border-slate-700 rounded-xl shadow-lg p-6">
      <h1 className="text-3xl font-semibold text-white mb-6">Create User</h1>

      <form onSubmit={handleSubmit} className="space-y-4 text-start">
        {/* Full Name */}
        <div>
          <label
            className="block text-sm font-medium text-slate-200 mb-2"
            htmlFor="fullName"
          >
            Full name
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full rounded-lg bg-slate-700 border border-slate-600 text-slate-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        {/* Email */}
        <div>
          <label
            className="block text-sm font-medium text-slate-200 mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg bg-slate-700 border border-slate-600 text-slate-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            className="block text-sm font-medium text-slate-200 mb-2"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg bg-slate-700 border border-slate-600 text-slate-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        {/* Role */}
        <div>
          <label
            className="block text-sm font-medium text-slate-200 mb-2"
            htmlFor="role"
          >
            Role
          </label>
          <select
            id="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full rounded-lg bg-slate-700 border border-slate-600 text-slate-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
          </select>
        </div>

        <div className="w-full">
          <button
            type="submit"
            className="w-full cursor-pointer px-5 py-2 my-2 rounded-md bg-sky-500 text-white font-medium shadow hover:bg-sky-600"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
