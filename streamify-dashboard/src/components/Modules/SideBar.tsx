import React from "react";
import {
  BarChart,
  Users,
  Music,
  DollarSign,
  Settings,
  HomeIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-transparent text-white flex flex-col p-4">
      <nav className="flex flex-col gap-4">
        <button
          className="flex items-center gap-3 text-black dark:text-gray-300 hover:bg-[#191919] hover:text-white p-2 rounded-lg transition duration-300"
          onClick={() => navigate("/")}
        >
          <HomeIcon />
          <span className="hidden xl:block">Home</span>
        </button>

        <button
          onClick={() => navigate("/user-analytics")}
          className="flex items-center gap-3 text-black dark:text-gray-300 hover:bg-[#191919] hover:text-white p-2 rounded-lg transition duration-300"
        >
          <Users />
          <span className="hidden xl:block">User Insights</span>
        </button>

        <button
          onClick={() => navigate("/stream-analytics")}
          className="flex items-center gap-3 text-black dark:text-gray-300 hover:bg-[#191919] hover:text-white p-2 rounded-lg transition duration-300"
        >
          <Music />
          <span className="hidden xl:block">Streaming Analytics</span>
        </button>

        <button
          onClick={() => navigate("/revenue-analytics")}
          className="flex items-center gap-3 text-black dark:text-gray-300 hover:bg-[#191919] hover:text-white p-2 rounded-lg transition duration-300"
        >
          <DollarSign />
          <span className="hidden xl:block">Revenue Analytics</span>
        </button>

        <button
          onClick={() => navigate("/settings")}
          disabled
          className="flex items-center gap-3 text-black dark:text-gray-300 hover:bg-[#191919] hover:text-white p-2 rounded-lg transition duration-300"
        >
          <Settings />
          <span className="hidden xl:block">Settings</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
