import React from 'react';
import './Dashboard.css';

const kpis = [
  { label: 'Active Deliveries', value: 24, trend: '+12%', trendType: 'up' },
  { label: 'Completed Today', value: 38, trend: '+8%', trendType: 'up' },
  { label: 'Pending Orders', value: 15, trend: '-3%', trendType: 'down' },
  { label: 'Active Drivers', value: 18, trend: '0%', trendType: 'neutral' },
];

const Dashboard = () => (
  <div className="ira-dashboard">
    <div className="ira-kpi-row">
      {kpis.map((kpi) => (
        <div className="ira-kpi-card" key={kpi.label}>
          <div className="ira-kpi-label">{kpi.label}</div>
          <div className="ira-kpi-value">{kpi.value}</div>
          <div className={`ira-kpi-trend ira-kpi-trend-${kpi.trendType}`}>{kpi.trend}</div>
        </div>
      ))}
    </div>
    <div className="ira-analytics-row">
      <div className="ira-analytics-card">
        <h3>AI-Driven Route Optimization</h3>
        <p>Active Routes: 8<br/>Traffic Status: <span style={{color:'#e67e22'}}>Moderate</span><br/>Optimized Points: 42</p>
      </div>
      <div className="ira-analytics-card">
        <h3>Real-Time Tracking</h3>
        <p>Active Deliveries: 24<br/>Notifications Sent: 86<br/>Proof of Delivery: 18 Completed</p>
      </div>
      <div className="ira-analytics-card">
        <h3>Inventory Integration</h3>
        <p>Stock Updates: 12 Today<br/>Low Stock Alerts: 3 Items<br/>Warehouse Status: <span style={{color:'#27ae60'}}>Operational</span></p>
      </div>
    </div>
  </div>
);

export default Dashboard; 