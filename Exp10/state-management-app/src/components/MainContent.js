import React from 'react';
import About from '../pages/About';
import CourseDetails from '../pages/CourseDetails';
import Teachers from '../pages/Teachers';
import Credits from '../pages/Credits';
import Evaluation from '../pages/Evaluation';

function MainContent({ currentSection }) {
  // Render different components based on the current section
  const renderContent = () => {
    switch (currentSection) {
      case 'about':
        return <About />;
      case 'course-details':
        return <CourseDetails />;
      case 'teachers':
        return <Teachers />;
      case 'credits':
        return <Credits />;
      case 'evaluation':
        return <Evaluation />;
      default:
        return <About />;
    }
  };

  return (
    <div className="main-content">
      {renderContent()}
    </div>
  );
}

export default MainContent;