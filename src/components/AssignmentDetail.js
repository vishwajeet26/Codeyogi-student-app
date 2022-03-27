import React from "react";
import { useParams } from "react-router-dom";

function AssignmentDetail() {
  const data = useParams();

  return (
    <div className="flex items-center h-full justify-center bg-green-500">
      <h1 className="text-9xl">Assignment Detail {data.assignmentNumber}</h1>
    </div>
  );
}

export default AssignmentDetail;
