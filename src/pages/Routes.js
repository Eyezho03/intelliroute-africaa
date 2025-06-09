import React from 'react';
import './Routes.css';

const RoutesPage = () => (
  <div className="ira-routes">
    <h2>AI-Driven Route Optimization</h2>
    <div className="ira-routes-summary">
      <div>Active Routes: <b>8</b></div>
      <div>Traffic Status: <span className="ira-traffic-moderate">Moderate</span></div>
      <div>Optimized Points: <b>42</b></div>
    </div>
    <div className="ira-map-placeholder">[Map View Placeholder]</div>
  </div>
);

export default RoutesPage; 