import React from 'react';

function Evaluation() {
  return (
    <div className="content-section">
      <h2>Evaluation Scheme</h2>
      <p>
        Students will be evaluated based on the following criteria:
      </p>
      
      <table className="evaluation-table">
        <thead>
          <tr>
            <th>Component</th>
            <th>Percentage</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Assignments</td>
            <td>25%</td>
            <td>Four assignments throughout the semester, focusing on different aspects of web development</td>
          </tr>
          <tr>
            <td>Mid-term Exam</td>
            <td>20%</td>
            <td>Covering topics from weeks 1-7</td>
          </tr>
          <tr>
            <td>Project</td>
            <td>30%</td>
            <td>Build a complete web application using React, demonstrating state management concepts</td>
          </tr>
          <tr>
            <td>Final Exam</td>
            <td>25%</td>
            <td>Comprehensive exam covering all course material</td>
          </tr>
        </tbody>
      </table>
      
      <p style={{ marginTop: '20px' }}>
        <strong>Grading Scale:</strong>
      </p>
      <ul>
        <li>A: 90-100%</li>
        <li>B: 80-89%</li>
        <li>C: 70-79%</li>
        <li>D: 60-69%</li>
        <li>F: Below 60%</li>
      </ul>
    </div>
  );
}

export default Evaluation;