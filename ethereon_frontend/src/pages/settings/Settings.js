import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Settings.css';

const Settings = () => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [privacyMode, setPrivacyMode] = useState(false);
    const [locationAccess, setLocationAccess] = useState(false);
    const [twoFactorAuth, setTwoFactorAuth] = useState(false);

    const toggleNotifications = () => setNotifications(!notifications);
    const toggleDarkMode = () => setDarkMode(!darkMode);
    const togglePrivacyMode = () => setPrivacyMode(!privacyMode);
    const toggleLocationAccess = () => setLocationAccess(!locationAccess);
    const toggleTwoFactorAuth = () => setTwoFactorAuth(!twoFactorAuth);

    return (
        <div className={`settings-container ${darkMode ? 'dark-mode' : ''}`}>
            <Navbar />
            <header className="settings-header">
                <h1>Settings</h1>
                <button className="settings-close">✕</button>
            </header>
            <div className="settings-sections">
                <section className="settings-section">
                    <h2>Account</h2>
                    <ul>
                        <li><button className="settings-button">Change Username</button></li>
                        <li><button className="settings-button">Change Password</button></li>
                        <li><button className="settings-button">Email Settings</button></li>
                        <li><button className="settings-button">Linked Accounts</button></li>
                        <li><button className="settings-button">Logout</button></li>
                    </ul>
                </section>
                <section className="settings-section">
                    <h2>Notifications</h2>
                    <div className="settings-toggle">
                        <span>Enable Notifications</span>
                        <input
                            type="checkbox"
                            checked={notifications}
                            onChange={toggleNotifications}
                        />
                    </div>
                    <ul>
                        <li><button className="settings-button">Push Notifications</button></li>
                        <li><button className="settings-button">Email Notifications</button></li>
                        <li><button className="settings-button">SMS Notifications</button></li>
                    </ul>
                </section>
                <section className="settings-section">
                    <h2>Privacy</h2>
                    <div className="settings-toggle">
                        <span>Private Account</span>
                        <input
                            type="checkbox"
                            checked={privacyMode}
                            onChange={togglePrivacyMode}
                        />
                    </div>
                    <div className="settings-toggle">
                        <span>Location Access</span>
                        <input
                            type="checkbox"
                            checked={locationAccess}
                            onChange={toggleLocationAccess}
                        />
                    </div>
                    <ul>
                        <li><button className="settings-button">Manage Blocked Accounts</button></li>
                        <li><button className="settings-button">Activity Status</button></li>
                        <li><button className="settings-button">Story Controls</button></li>
                    </ul>
                </section>
                <section className="settings-section">
                    <h2>Security</h2>
                    <div className="settings-toggle">
                        <span>Two-Factor Authentication</span>
                        <input
                            type="checkbox"
                            checked={twoFactorAuth}
                            onChange={toggleTwoFactorAuth}
                        />
                    </div>
                    <ul>
                        <li><button className="settings-button">Change Password</button></li>
                        <li><button className="settings-button">Login Activity</button></li>
                        <li><button className="settings-button">Saved Login Info</button></li>
                    </ul>
                </section>
                <section className="settings-section">
                    <h2>Display</h2>
                    <div className="settings-toggle">
                        <span>Dark Mode</span>
                        <input
                            type="checkbox"
                            checked={darkMode}
                            onChange={toggleDarkMode}
                        />
                    </div>
                    <ul>
                        <li><button className="settings-button">Font Size</button></li>
                        <li><button className="settings-button">Theme Colors</button></li>
                    </ul>
                </section>
                <section className="settings-section">
                    <h2>Help</h2>
                    <ul>
                        <li><button className="settings-button">Help Center</button></li>
                        <li><button className="settings-button">Report a Problem</button></li>
                        <li><button className="settings-button">Privacy & Security</button></li>
                        <li><button className="settings-button">About Us</button></li>
                    </ul>
                </section>
                <section className="settings-section">
                    <h2>About</h2>
                    <ul>
                        <li><button className="settings-button">App Version</button></li>
                        <li><button className="settings-button">Terms of Service</button></li>
                        <li><button className="settings-button">Privacy Policy</button></li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Settings;
