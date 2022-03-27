import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="flex flex-col p-2 space-y-4 bg-gray-700 w-60">
      <Link to="/lectures" className="font-bold text-white">
        Lectures
      </Link>
      <Link to="/assignments" className="font-bold text-white">
        assignments
      </Link>
      <Link to="/quiz" className="font-bold text-white">
        Quiz
      </Link>
    </div>
  );
}

export default Sidebar;
