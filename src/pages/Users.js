import React from 'react';
import './Users.css';

const users = [
  { name: 'James Mwangi', role: 'Admin', status: 'Active' },
  { name: 'Faith Wanjiku', role: 'Driver', status: 'Active' },
  { name: 'Peter Kamau', role: 'Driver', status: 'Active' },
  { name: 'Samuel Omondi', role: 'Driver', status: 'Inactive' },
];

const Users = () => (
  <div className="ira-users">
    <h2>Users & Roles</h2>
    <table className="ira-users-table">
      <thead>
        <tr>
          <th>NAME</th>
          <th>ROLE</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.name}>
            <td>{u.name}</td>
            <td>{u.role}</td>
            <td><span className={`ira-user-status ira-user-status-${u.status.toLowerCase()}`}>{u.status}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Users; 