import React from 'react';

function Credits() {
  return (
    <div className="content-section">
      <h2>Credits</h2>
      <p>
        <strong>Course Credits:</strong> 3
      </p>
      <p>
        <strong>Weekly Hours:</strong>
      </p>
      <ul>
        <li>Lectures: 2 hours</li>
        <li>Lab Sessions: 2 hours</li>
        <li>Self-study: 5 hours (recommended)</li>
      </ul>
      <p>
        <strong>Total Semester Hours:</strong> 45 hours of instruction + 30 hours of lab work
      </p>
      <p>
        Successful completion of this course will add 3 credits to your degree program.
        These credits are recognized as part of the core curriculum for Computer Science and
        Information Technology degrees.
      </p>
    </div>
  );
}

export default Credits;