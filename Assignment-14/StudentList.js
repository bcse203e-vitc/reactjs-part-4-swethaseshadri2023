import React, { useState } from "react";
import { Link } from "react-router-dom";

const StudentList = ({ students, deleteStudent, updateStudent }) => {
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editedStudent, setEditedStudent] = useState({ name: "", age: "", grade: "" });

  const handleEdit = (student) => {
    setEditingId(student.id);
    setEditedStudent(student);
  };

  const handleUpdate = () => {
    updateStudent(editingId, editedStudent);
    setEditingId(null);
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Student List</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredStudents.length === 0 ? <p>No students found</p> : null}
        {filteredStudents.map((student) => (
          <li key={student.id}>
            {editingId === student.id ? (
              <>
                <input type="text" value={editedStudent.name} onChange={(e) => setEditedStudent({ ...editedStudent, name: e.target.value })} />
                <input type="number" value={editedStudent.age} onChange={(e) => setEditedStudent({ ...editedStudent, age: e.target.value })} />
                <input type="text" value={editedStudent.grade} onChange={(e) => setEditedStudent({ ...editedStudent, grade: e.target.value })} />
                <button onClick={handleUpdate}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                {student.name} - Age: {student.age}, Grade: {student.grade}
                <Link to={`/students/${student.id}`}><button>View Details</button></Link>
                <button onClick={() => handleEdit(student)}>Edit</button>
                <button onClick={() => deleteStudent(student.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
