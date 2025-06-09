import React from 'react';
import './Analytics.css';

const Analytics = () => (
  <div className="ira-analytics">
    <h2>Predictive Analytics Dashboard</h2>
    <div className="ira-analytics-metrics-row">
      <div className="ira-analytics-metric-card">
        <h3>Delivery Success Rate</h3>
        <div className="ira-analytics-metric-value">94%</div>
        <div className="ira-analytics-metric-desc">Last 30 days</div>
      </div>
      <div className="ira-analytics-metric-card">
        <h3>Top Performing Driver</h3>
        <div className="ira-analytics-metric-value">Daniel Ochieng</div>
        <div className="ira-analytics-metric-desc">38 deliveries</div>
      </div>
      <div className="ira-analytics-metric-card">
        <h3>Restock Suggestions</h3>
        <div className="ira-analytics-metric-value ira-analytics-metric-alert">3 Items</div>
        <div className="ira-analytics-metric-desc">Low stock</div>
      </div>
    </div>
  </div>
);

export default Analytics; 