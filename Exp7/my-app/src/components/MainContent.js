// src/components/MainContent.js
import React from 'react';
import './MainContent.css';

function MainContent() {
  return (
    <main className="main-content">
      <h1>Welcome to KrushnamPriya Yog</h1>
      <p>Unite the Harmony of Body and Mind</p>
      
      <div className="card-container">
        <div className="card">
          <h3>Healthy Yoga</h3>
          <p> Daily yoga for better health</p>
        </div>
        <div className="card">
          <h3>Weight-Relief Yoga</h3>
          <p>Special Yoga for wieghtloss</p>
        </div>
        <div className="card">
          <h3>Chakra Yoga</h3>
          <p>Yoga with mediation and activating your inner chakras.</p>
        </div>
      </div>
    </main>
  );
}

export default MainContent;