import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="content-wrapper">
          <Sidebar />
          <MainContent />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
