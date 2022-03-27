import PreviousMap from "postcss/lib/previous-map";
import React from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function MainLayout(props) {
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
