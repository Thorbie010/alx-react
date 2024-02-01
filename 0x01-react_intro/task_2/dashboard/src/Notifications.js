import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png'
import { getLatestNotification } from './utils';

const Notifications = () => {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  }
    return (
      <div className="Notifications">
         <button
        style={buttonStyle}
        aria-label="Close"
        onClick={handleButtonClick}
      >
        {/* Children img element with close-icon.png image */}
        <img src={closeIcon} alt="Close Icon" style={imageStyle}/>
      </button>

      <p>Here is the list of notifications</p>

      <ul>
        <li data-priority="default">New course available</li>

        <li data-priority="urgent">New resume available</li>

        <li data-priority='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
      </div>
    );
  }

  const buttonStyle = {
    position: 'fixed',
    top: '1em',
    right: '1em',
    background: 'transparent',
    border: 'none',
  }
  
  const imageStyle = {
    width: '20px',
    height: '20px',
  }
  export default Notifications;