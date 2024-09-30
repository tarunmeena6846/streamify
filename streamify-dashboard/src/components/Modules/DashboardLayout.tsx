import React from "react";
import Sidebar from "./Sidebar"; // Import the sidebar component

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 bg-transparent p-6 overflow-auto">
        <div className="max-w-7xl mx-auto">
          {children}{" "}
          {/* This will be the content passed from the routes or pages */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
