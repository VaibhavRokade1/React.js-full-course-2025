import { FaBars, FaBell, FaCog, FaUserCircle } from "react-icons/fa";
function TopHeader() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button className="text-slate-700 text-2xl md:hidden">
            <FaBars />
          </button>
          <h1 className="text-2xl font-bold text-slate-700">Dashboard</h1>
        </div>

        <div className="flex items-center gap-4 text-slate-700 text-xl">
          <button className="hover:text-teal-600 transition">
            <FaBell />
          </button>
          <button className="hover:text-teal-600 transition">
            <FaCog />
          </button>
          <button className="hover:text-teal-600 transition">
            <FaUserCircle />
          </button>
        </div>
      </div>
    </>
  );
}

export default TopHeader;
