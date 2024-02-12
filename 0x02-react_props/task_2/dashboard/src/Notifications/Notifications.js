import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

const Notifications = () => {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <button
        style={buttonStyle}
        aria-label="Close"
        onClick={handleButtonClick}
      >
        <img src={closeIcon} alt="Close Icon" style={imageStyle} />
      </button>

      <p>Here is the list of notifications</p>

      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={getLatestNotification()} />
      </ul>
    </div>
  );
};

const buttonStyle = {
  position: 'fixed',
  top: '1em',
  right: '1em',
  background: 'transparent',
  border: 'none',
};

const imageStyle = {
  width: '20px',
  height: '20px',
};

export default Notifications;
