import React from 'react';

function About() {
  return (
    <div className="content-section">
      <h2>About</h2>
      <p>
        This experiment is about state management in React. It demonstrates how to use React state to manage 
        UI components and control what content is displayed based on user interaction.
      </p>
      <p>
        In this application, we are using the useState hook to manage which section is currently active. 
        When a user clicks on an item in the sidebar, we update the state, which then causes the main 
        content area to re-render with the appropriate content.
      </p>
      <p>
        This is a simple example of how React's state management can be used to create dynamic user 
        interfaces that respond to user interactions without requiring a page reload.
      </p>
    </div>
  );
}

export default About;