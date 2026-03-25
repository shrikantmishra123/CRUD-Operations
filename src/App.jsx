import React from "react";

import Home from "./pages/Home.jsx";
import AddStudent from "./pages/AddStudent.jsx";
import ViewStudent from "./pages/ViewStudent.jsx";
import { Route, Routes } from "react-router-dom";
import UpdateStudent from "./pages/UpdateStudent.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/viewstudent" element={<ViewStudent />} />
        <Route path="/Updatestudent/:id" element={<UpdateStudent />} />{" "}
      </Routes>
    </>
  );
};

export default App;
