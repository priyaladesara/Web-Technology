import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  // State for current selected section
  const [currentSection, setCurrentSection] = useState('about');

  return (
    <div className="app">
      <Navbar />
      <div className="content-container">
        <Sidebar setCurrentSection={setCurrentSection} currentSection={currentSection} />
        <MainContent currentSection={currentSection} />
      </div>
    </div>
  );
}

export default App;