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

const Sidebar = () => {
  return (
    <div className="h-screen bg-transparent text-white w-64 flex flex-col p-4">
      {/* Navigation Links */}
      <nav className="flex flex-col gap-4">
        <a
          href="/dashboard"
          className="flex items-center gap-3 text-black dark:text-gray-300 hover:bg-[#191919] hover:text-white p-2 rounded-lg transition duration-300"
        >
          <HomeIcon />
          <span>Home</span>
        </a>
        <a
          href="/dashboard"
          className="flex items-center gap-3 text-black dark:text-gray-300 hover:bg-[#191919] hover:text-white p-2 rounded-lg transition duration-300"
        >
          <BarChart />
          <span>Dashboard Overview</span>
        </a>

        <a
          href="/users"
          className="flex items-center gap-3 text-black dark:text-gray-300 hover:bg-[#191919] hover:text-white p-2 rounded-lg transition duration-300"
        >
          <Users />
          <span>User Insights</span>
        </a>

        <a
          href="/streams"
          className="flex items-center gap-3 text-black dark:text-gray-300 hover:bg-[#191919] hover:text-white p-2 rounded-lg transition duration-300"
        >
          <Music />
          <span>Streaming Analytics</span>
        </a>

        <a
          href="/revenue"
          className="flex items-center gap-3 text-black dark:text-gray-300 hover:bg-[#191919] hover:text-white p-2 rounded-lg transition duration-300"
        >
          <DollarSign />
          <span>Revenue Analytics</span>
        </a>

        <a
          href="/settings"
          className="flex items-center gap-3 text-black dark:text-gray-300 hover:bg-[#191919] hover:text-white p-2 rounded-lg transition duration-300"
        >
          <Settings />
          <span>Settings</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
