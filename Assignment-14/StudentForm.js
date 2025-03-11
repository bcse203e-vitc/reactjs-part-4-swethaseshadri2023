import React, { useState } from "react";

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !age.trim() || !grade.trim()) return;
    
    const newStudent = { id: Date.now(), name, age, grade };
    
    const savedStudents = JSON.parse(localStorage.getItem("students")) || [];
    const updatedStudents = [...savedStudents, newStudent];
    localStorage.setItem("students", JSON.stringify(updatedStudents));

    addStudent(newStudent);
    setName("");
    setAge("");
    setGrade("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <input type="text" placeholder="Grade" value={grade} onChange={(e) => setGrade(e.target.value)} />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
