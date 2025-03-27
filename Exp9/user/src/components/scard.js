import React from "react";

function SCards({ student, onDelete }) {
  return (
    <div className="student-card">
      <button className="delete-btn" onClick={onDelete}>❌</button>
      <h3>{student.name}</h3>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Roll Number:</strong> {student.rollNumber}</p>
    </div>
  );
}

export default SCards;