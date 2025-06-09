import React from 'react';
import './Inventory.css';

const inventory = [
  { item: 'Smartphone Cases', stock: 126, status: 'Good' },
  { item: 'Wireless Earbuds', stock: 8, status: 'Low' },
  { item: 'Power Banks', stock: 42, status: 'Good' },
  { item: 'USB Cables', stock: 15, status: 'Medium' },
];

const statusColors = {
  'Good': 'good',
  'Low': 'low',
  'Medium': 'medium',
};

const Inventory = () => (
  <div className="ira-inventory">
    <h2>Inventory Integration</h2>
    <table className="ira-inventory-table">
      <thead>
        <tr>
          <th>ITEM</th>
          <th>STOCK</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {inventory.map((i) => (
          <tr key={i.item}>
            <td>{i.item}</td>
            <td>{i.stock}</td>
            <td><span className={`ira-inv-status ira-inv-status-${statusColors[i.status]}`}>{i.status}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="ira-inventory-footer">Stock updates: 12 today &nbsp; | &nbsp; Low stock alerts: 3 items</div>
  </div>
);

export default Inventory; 