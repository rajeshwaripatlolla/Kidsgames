import React, { useState } from "react";
import "./Notifications.css";

const Notifications = () => {
  const [settings, setSettings] = useState({
    newGames: true,
    achievements: true,
    updates: true,
    system: true,
  });

  const notifications = [
    { id: 1, message: "New game 'Math Master' added!", type: "newGames" },
    { id: 2, message: "Achievement unlocked: 'Fast Learner!'", type: "achievements" },
    { id: 3, message: "Version 2.0 is now live with exciting updates!", type: "updates" },
    { id: 4, message: "System maintenance scheduled for tomorrow.", type: "system" },
  ];

  const handleToggle = (type) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [type]: !prevSettings[type],
    }));
  };

  const filteredNotifications = notifications.filter((notification) => settings[notification.type]);

  return (
    <div className="notifications-page">
      <h2>Notifications</h2>
      <div className="notifications-container">
        <h3>Recent Notifications</h3>
        {filteredNotifications.length > 0 ? (
          <ul className="notifications-list">
            {filteredNotifications.map((notification) => (
              <li key={notification.id} className="notification-item">
                {notification.message}
              </li>
            ))}
          </ul>
        ) : (
          <p>No notifications to show. Adjust your settings below.</p>
        )}
      </div>

      <div className="settings-container">
        <h3>Notification Settings</h3>
        <div className="settings-options">
          {Object.keys(settings).map((type) => (
            <div key={type} className="setting-item">
              <label>
                <input
                  type="checkbox"
                  checked={settings[type]}
                  onChange={() => handleToggle(type)}
                />
                {type
                  .replace("newGames", "New Games")
                  .replace("achievements", "Achievements")
                  .replace("updates", "Updates")
                  .replace("system", "System Notifications")}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
