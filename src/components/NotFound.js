import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center h-screen  justify-center bg-black">
      <h1 className="text-9xl">200K not found</h1>
      <Link to="/assignments" className="text-red-500">
        go back
      </Link>
    </div>
  );
}

export default NotFound;
