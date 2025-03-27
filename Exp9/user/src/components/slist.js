import React, { useState } from "react";
import SForm from "./sform";
import SCards from "./scard";

function SList() {
  const [students, setStudents] = useState([]);

  // Add a student to the list
  const addStudent = (student) => {
    // Check for duplicate roll numbers
    const isDuplicate = students.some(
      (existingStudent) => existingStudent.rollNumber === student.rollNumber
    );

    if (isDuplicate) {
      alert("A student with this roll number already exists!");
      return;
    }

    setStudents([...students, student]);
  };

  // Delete a student from the list
  const deleteStudent = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  return (
    <div className="student-list-container">
      <h2>Student Management System</h2>
      <SForm onAddStudent={addStudent} />
      <div className="student-list">
        {students.map((student, index) => (
          <SCards 
            key={`${student.rollNumber}-${index}`} 
            student={student} 
            onDelete={() => deleteStudent(index)} 
          />
        ))}
      </div>
    </div>
  );
}

export default SList;