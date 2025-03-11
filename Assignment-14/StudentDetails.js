import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const StudentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const savedStudents = JSON.parse(localStorage.getItem("students")) || [];
    const foundStudent = savedStudents.find(s => s.id === parseInt(id));
    setStudent(foundStudent);
  }, [id]);

  if (!student) return <h2>Student Not Found</h2>;

  return (
    <div>
      <h2>{student.name}'s Details</h2>
      <p>Age: {student.age}</p>
      <p>Grade: {student.grade}</p>
      <p>Email: student@example.com</p>
      <p>Phone: 123-456-7890</p>
      <p>Address: 123 Main St, City</p>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default StudentDetails;
