import React from 'react';

function Sidebar({ setCurrentSection, currentSection }) {
  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'course-details', label: 'Course Details' },
    { id: 'teachers', label: 'Teachers/Professors' },
    { id: 'credits', label: 'Credits' },
    { id: 'evaluation', label: 'Evaluation Scheme' }
  ];

  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        {menuItems.map(item => (
          <li 
            key={item.id}
            className={currentSection === item.id ? 'active' : ''}
            onClick={() => setCurrentSection(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;