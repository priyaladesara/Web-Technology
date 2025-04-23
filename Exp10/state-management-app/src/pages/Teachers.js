import React from 'react';

function Teachers() {
  return (
    <div className="content-section">
      <h2>Teachers/Professors</h2>
      
      <div className="teacher-card">
        <h3>Dr. Kamal Garg</h3>
        <p><strong>Position:</strong> Associate Professor</p>
        <p><strong>Email:</strong> kamal.garg@sot.pdpu.ac.in</p>
        <p><strong>Office Hours:</strong> Monday and Wednesday, 2:00 PM - 4:00 PM</p>
      </div>
      
      <div className="teacher-card">
        <h3>Aayushi Mathur</h3>
        <p><strong>Position:</strong> Assistant Professor</p>
        <p><strong>Email:</strong> aayushi.mathur@sot.pdpu.ac.in</p>
        <p><strong>Office Hours:</strong> Tuesday and Thursday, 10:00 AM - 12:00 PM</p>
      </div>
    </div>
  );
}

export default Teachers;