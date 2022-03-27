import React from "react";
import { Link } from "react-router-dom";

function QuizPage() {
  return (
    <div className="flex flex-col items-center h-screen  justify-center bg-violet-500">
      <h1 className="text-9xl">QuizPage</h1>
      <Link to="/lectures" className="text-red-500">
        go back
      </Link>
    </div>
  );
}

export default QuizPage;
