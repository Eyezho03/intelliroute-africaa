import React from 'react';
import './Deliveries.css';

const deliveries = [
  { id: '#ORD-7829', customer: 'Sarah Kimani', location: 'Westlands, Nairobi', driver: 'Daniel Ochieng', status: 'Delivered', eta: '-' },
  { id: '#ORD-7828', customer: 'John Mwangi', location: 'Kilimani, Nairobi', driver: 'Faith Wanjiku', status: 'In Transit', eta: '14:30' },
  { id: '#ORD-7827', customer: 'Elizabeth Otieno', location: 'Lavington, Nairobi', driver: 'Peter Kamau', status: 'Assigned', eta: '15:45' },
  { id: '#ORD-7826', customer: 'Michael Ndungu', location: 'Karen, Nairobi', driver: 'Pending', status: 'Pending', eta: '-' },
  { id: '#ORD-7825', customer: 'Grace Njoroge', location: 'Ngong Road, Nairobi', driver: 'Samuel Omondi', status: 'Failed', eta: '-' },
];

const statusColors = {
  'Delivered': 'delivered',
  'In Transit': 'intransit',
  'Assigned': 'assigned',
  'Pending': 'pending',
  'Failed': 'failed',
};

const Deliveries = () => (
  <div className="ira-deliveries">
    <h2>Recent Deliveries</h2>
    <table className="ira-deliveries-table">
      <thead>
        <tr>
          <th>ORDER ID</th>
          <th>CUSTOMER</th>
          <th>LOCATION</th>
          <th>DRIVER</th>
          <th>STATUS</th>
          <th>ETA</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {deliveries.map((d) => (
          <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.customer}</td>
            <td>{d.location}</td>
            <td>{d.driver}</td>
            <td><span className={`ira-status ira-status-${statusColors[d.status]}`}>{d.status}</span></td>
            <td>{d.eta}</td>
            <td><button className="ira-link">View</button> <button className="ira-link">Details</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="ira-deliveries-footer">Showing 1 to 5 of 42 results</div>
  </div>
);

export default Deliveries; 