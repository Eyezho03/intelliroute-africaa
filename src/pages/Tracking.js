import React from 'react';
import './Tracking.css';

const trackingData = [
  { id: '#ORD-7828', customer: 'John Mwangi', driver: 'Faith Wanjiku', status: 'In Transit', lastUpdate: '14:20', proof: 'Pending' },
  { id: '#ORD-7827', customer: 'Elizabeth Otieno', driver: 'Peter Kamau', status: 'Assigned', lastUpdate: '15:30', proof: 'Pending' },
  { id: '#ORD-7829', customer: 'Sarah Kimani', driver: 'Daniel Ochieng', status: 'Delivered', lastUpdate: '13:50', proof: 'Photo' },
];

const Tracking = () => (
  <div className="ira-tracking">
    <h2>Real-Time Last-Mile Tracking</h2>
    <table className="ira-tracking-table">
      <thead>
        <tr>
          <th>ORDER ID</th>
          <th>CUSTOMER</th>
          <th>DRIVER</th>
          <th>STATUS</th>
          <th>LAST UPDATE</th>
          <th>PROOF OF DELIVERY</th>
        </tr>
      </thead>
      <tbody>
        {trackingData.map((d) => (
          <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.customer}</td>
            <td>{d.driver}</td>
            <td>{d.status}</td>
            <td>{d.lastUpdate}</td>
            <td>{d.proof}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="ira-tracking-map-placeholder">[Live Map View Placeholder]</div>
  </div>
);

export default Tracking; 