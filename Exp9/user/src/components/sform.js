import React, { useState } from "react";

function SForm({ onAddStudent }) {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    rollNumber: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (student.name && student.email && student.course && student.rollNumber) {
      onAddStudent(student);
      setStudent({ name: "", email: "", course: "", rollNumber: "" }); // Reset form
    }
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        placeholder="Enter Name" 
        value={student.name} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Enter Email" 
        value={student.email} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="text" 
        name="course" 
        placeholder="Enter Course" 
        value={student.course} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="text" 
        name="rollNumber" 
        placeholder="Enter Roll Number" 
        value={student.rollNumber} 
        onChange={handleChange} 
        required 
      />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default SForm;