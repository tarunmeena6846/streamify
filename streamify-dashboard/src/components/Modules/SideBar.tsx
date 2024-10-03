import React from "react";
import {
  BarChart,
  Users,
  Music,
  DollarSign,
  Settings,
  HomeIcon,
  //   User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-transparent text-white hidden xl:block w-64 flex flex-col p-4">
      {/* Navigation Links */}
      <nav className="flex flex-col gap-4">
        <button
          className="flex items-center gap-3 text-black dark:text-gray-300 hover:bg-[#191919] hover:text-white p-2 rounded-lg transition duration-300"
          onClick={() => navigate("/")}
        >
          <HomeIcon />
          <span>Home</span>
        </button>

        <button
          onClick={() => navigate("/user-analytics")}
          className="flex items-center gap-3 text-black dark:text-gray-300 hover:bg-[#191919] hover:text-white p-2 rounded-lg transition duration-300"
        >
          <Users />
          <span>User Insights</span>
        </button>

        <button
          onClick={() => navigate("/stream-analytics")}
          className="flex items-center gap-3 text-black dark:text-gray-300 hover:bg-[#191919] hover:text-white p-2 rounded-lg transition duration-300"
        >
          <Music />
          <span>Streaming Analytics</span>
        </button>

        <button
          onClick={() => navigate("/revenue")}
          className="flex items-center gap-3 text-black dark:text-gray-300 hover:bg-[#191919] hover:text-white p-2 rounded-lg transition duration-300"
        >
          <DollarSign />
          <span>Revenue Analytics</span>
        </button>

        <button
          onClick={() => navigate("/settings")}
          className="flex items-center gap-3 text-black dark:text-gray-300 hover:bg-[#191919] hover:text-white p-2 rounded-lg transition duration-300"
        >
          <Settings />
          <span>Settings</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
