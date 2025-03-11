import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";

const App = () => {
  const [students, setStudents] = useState([]);

  // Load students from localStorage on app start
  useEffect(() => {
    const savedStudents = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(savedStudents);
  }, []);

  // Save students to localStorage whenever students change
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const updateStudent = (id, updatedStudent) => {
    setStudents(students.map(student => 
      student.id === id ? { ...student, ...updatedStudent } : student
    ));
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <Router>
      <div>
        <h1>Student Management</h1>
        <StudentForm addStudent={addStudent} />
        <Routes>
          <Route path="/" element={<StudentList students={students} deleteStudent={deleteStudent} updateStudent={updateStudent} />} />
          <Route path="/students/:id" element={<StudentDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
