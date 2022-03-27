import React from "react";
import AssignmentList from "./components/AssignmentList";
import QuizPage from "./components/QuizPage";
import LectureList from "./components/LectureList";
import { Navigate, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import NotFound from "./components/NotFound";
import AssignmentDetail from "./components/AssignmentDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/lectures" />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="assignments" element={<AssignmentList />}></Route>
        <Route path="lectures" element={<LectureList />} />
        <Route
          path="assignments/:assignmentNumber/details"
          element={<AssignmentDetail />}
        />
      </Route>
      <Route path="quiz" element={<QuizPage />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
