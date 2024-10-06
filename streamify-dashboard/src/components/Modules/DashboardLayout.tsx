import React from "react";
import Sidebar from "./SideBar"; // Import the sidebar component

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="hidden lg:block  xl:w-1/5">
        <Sidebar />
      </div>
      <div className=" bg-transparent p-6 overflow-auto w-full xl:w-4/5">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
