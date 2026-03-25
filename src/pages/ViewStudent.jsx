import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ViewStudent = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const fetchData = () => {
    axios
      .get("http://localhost:3000/user")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (student) => {
    navigate(`/Updatestudent/${student.id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      axios
        .delete(`http://localhost:3000/user/${id}`)
        .then(() => {
          alert("Student deleted successfully");
          fetchData(); // Refresh the list after deleting
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <Nav />
      <div style={{ padding: "20px" }}>
        <center>
          <h2>Student List</h2>
          <table
            border="1"
            cellPadding="10"
            style={{ width: "90%", borderCollapse: "collapse" }}
          >
            <thead>
              <tr style={{ backgroundColor: "#333", color: "white" }}>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Course</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.department}</td>
                  <td>{student.course}</td>
                  <td>
                    {/* These buttons now work for each specific student */}
                    <button
                      onClick={() => handleEdit(student)}
                      style={{ marginRight: "10px" }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(student.id)}
                      style={{ color: "red" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </center>
      </div>
    </>
  );
};

export default ViewStudent;
