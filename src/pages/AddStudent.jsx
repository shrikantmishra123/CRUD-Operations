import React, { useState } from "react";
import Nav from "../components/Nav";
import axios from "axios";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [course, setCourse] = useState("");
  const navigate = useNavigate();

  const savedata = (e) => {
    e.preventDefault();
    const userData = { name, email, department, course };

    axios
      .post("http://localhost:3000/user", userData)
      .then(() => {
        toast.success("Student added successfully! 🚀", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });

        setName("");
        setEmail("");
        setDepartment("");
        setCourse("");
        navigate("/viewStudent");
      })
      .catch((err) => {
        toast.error("Failed to save data.");
        console.log(err);
      });
  };

  return (
    <>
      <Nav />

      <div className="form-container">
        <center>
          <div className="form-card">
            <h2>Add Student</h2>
            <form className="student-form" onSubmit={savedata}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Department</label>
                <input
                  type="text"
                  placeholder="Enter department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Course</label>
                <input
                  type="text"
                  placeholder="Enter course"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                />
              </div>

              <button type="submit" className="submit-btn">
                Add
              </button>
            </form>
          </div>
        </center>
      </div>
    </>
  );
};

export default AddStudent;
