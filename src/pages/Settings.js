import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [language, setLanguage] = useState('English');
  const [mpesa, setMpesa] = useState(true);
  const [notifications, setNotifications] = useState({ sms: true, whatsapp: true });

  return (
    <div className="ira-settings">
      <h2>Settings</h2>
      <div className="ira-settings-section">
        <h3>Profile</h3>
        <div>Name: James Mwangi</div>
        <div>Role: Administrator</div>
        <div>Email: intellirouteafrica@gmail.com</div>
        <div>Phone: 0758263093</div>
      </div>
      <div className="ira-settings-section">
        <h3>Language</h3>
        <button className={language === 'English' ? 'ira-active' : ''} onClick={() => setLanguage('English')}>English</button>
        <button className={language === 'Swahili' ? 'ira-active' : ''} onClick={() => setLanguage('Swahili')}>Swahili</button>
      </div>
      <div className="ira-settings-section">
        <h3>M-PESA Integration</h3>
        <label>
          <input type="checkbox" checked={mpesa} onChange={() => setMpesa(!mpesa)} /> Connected
        </label>
      </div>
      <div className="ira-settings-section">
        <h3>Notifications</h3>
        <label>
          <input type="checkbox" checked={notifications.sms} onChange={() => setNotifications(n => ({ ...n, sms: !n.sms }))} /> SMS Alerts
        </label>
        <label>
          <input type="checkbox" checked={notifications.whatsapp} onChange={() => setNotifications(n => ({ ...n, whatsapp: !n.whatsapp }))} /> WhatsApp Alerts
        </label>
      </div>
    </div>
  );
};

export default Settings; 