import React from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function MainLayout() {
  return (
    <div className="flex items-stretch h-screen">
      <Sidebar></Sidebar>
      <div className="p-5 bg-yellow-500 grow">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
