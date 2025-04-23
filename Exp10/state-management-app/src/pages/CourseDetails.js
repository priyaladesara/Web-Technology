import React from 'react';

function CourseDetails() {
  return (
    <div className="content-section">
      <h2>Course Details</h2>
      <p>
        <strong>Course Name:</strong> Web Development
      </p>
      <p>
        <strong>Course Code:</strong> WD-301
      </p>
      <p>
        <strong>Description:</strong> This course covers the fundamentals of web development 
        including HTML, CSS, JavaScript, and modern frameworks like React. Students will learn 
        how to build responsive, interactive web applications using industry-standard tools and practices.
      </p>
      <p>
        <strong>Duration:</strong> 15 weeks
      </p>
      <p>
        <strong>Prerequisites:</strong> Basic programming knowledge, understanding of HTML and CSS
      </p>
      <p>
        <strong>Learning Outcomes:</strong>
      </p>
      <ul>
        <li>Build responsive web pages using HTML5 and CSS3</li>
        <li>Implement interactive features using JavaScript</li>
        <li>Create single-page applications with React</li>
        <li>Understand state management in frontend applications</li>
        <li>Deploy web applications to production environments</li>
      </ul>
    </div>
  );
}

export default CourseDetails;