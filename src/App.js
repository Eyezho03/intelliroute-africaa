import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Deliveries from './pages/Deliveries';
import RoutesPage from './pages/Routes';
import Tracking from './pages/Tracking';
import Inventory from './pages/Inventory';
import Analytics from './pages/Analytics';
import Users from './pages/Users';
import Pricing from './pages/Pricing';

const Settings = () => (
  <section className="ira-content">
    <h1>Settings</h1>
    <p>Profile, language, M-PESA, and notifications.</p>
  </section>
);

function App() {
  return (
    <Router>
      <div className="ira-app">
        <aside className="ira-sidebar">
          <div className="ira-logo">IntelliRoute <span className="ira-africa">Africa</span></div>
          <nav>
            <ul>
              <li><Link to="/">Dashboard</Link></li>
              <li><Link to="/deliveries">Deliveries</Link></li>
              <li><Link to="/routes">Routes</Link></li>
              <li><Link to="/tracking">Tracking</Link></li>
              <li><Link to="/inventory">Inventory</Link></li>
              <li><Link to="/analytics">Analytics</Link></li>
              <li><Link to="/users">Users</Link></li>
              <li><Link to="/settings">Settings</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
            </ul>
          </nav>
          <div className="ira-sidebar-footer">
            <div>Help & Support</div>
            <div>Logout</div>
          </div>
        </aside>
        <main className="ira-main">
          <header className="ira-header">
            <div className="ira-header-title">IntelliRoute Africa</div>
            <div className="ira-header-user">James Mwangi <span className="ira-role">Administrator</span></div>
          </header>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/deliveries" element={<Deliveries />} />
            <Route path="/routes" element={<RoutesPage />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
