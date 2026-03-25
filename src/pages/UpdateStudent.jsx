import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateStudent = () => {
  const { id } = useParams(); // Grabs the 'id' from the URL path
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [course, setCourse] = useState("");

  // Fetch the existing student data using the ID from params
  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/${id}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setDepartment(res.data.department);
        setCourse(res.data.course);
      })
      .catch((err) => console.log("Error fetching student:", err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedData = { name, email, department, course };

    axios
      .put(`http://localhost:3000/user/${id}`, updatedData)
      .then(() => {
        alert("Update Successful!");
        navigate("/viewStudent");
      })
      .catch((err) => console.log(err));
  };

  return (
    <center>
      <h1>Update Student (Name: {name})</h1>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />
        <br />
        <button type="submit">Save Changes</button>
      </form>
    </center>
  );
};

export default UpdateStudent;
