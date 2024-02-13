import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import close_icon from './close-icon.png';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

const buttonClick = () => {
  console.log('Close button has been clicked');
};

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const { listNotifications } = this.props;
    return listNotifications.length < nextProps.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    console.log("Total notifications:", listNotifications.length); // Log total number of notifications
    return (
      <>
        <div className={css(styles.menuItem)}>Your notifications</div>
        {displayDrawer ? (
          <div className={css(styles.Notifications)}>
            <button onClick={() => buttonClick()} aria-label="Close" className={css(styles.closeButton)}>
              <img alt="close icon" src={close_icon} className={css(styles.closeIcon)} />
            </button>
            <p className={css(styles.paragraph)}>Here is the list of notifications</p>
            <ul className={css(styles.notificationList)}>
              {listNotifications.map(notification => {
                console.log("Rendering notification:", notification.id); // Log each notification being rendered
                return (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    html={notification.html} // Remove value prop if html is provided
                    markAsRead={this.markAsRead}
                  />
                );
              })}
            </ul>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
}


Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

const styles = StyleSheet.create({
  menuItem: {
    textAlign: 'right',
    marginRight: '.5rem',
  },
  Notifications: {
    border: '2px dashed #E0434C',
    padding: '1rem',
    marginBottom: '1rem',
    position: 'absolute',
    right: '0',
    '@media (max-width: 900px)': {
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      background: 'white'
    },
  },
  paragraph: {
    '@media (max-width: 900px)': {
      fontSize: '20px'
    }
  },
  fullScreen: {
    padding: 0,
  },
  closeButton: {
    background: 'transparent',
    border: 'none',
    outline: 'none',
    position: 'absolute',
    top: '0',
    right: '0',
  },
  closeIcon: {
    width: '.7rem',
    height: '.7rem',
  },
  notificationList: {
    position: 'relative',
    paddingRight: '3rem',
    '@media (max-width: 900px)': {
      padding: '10px 8px',
      width: '100%',
      fontSize: '20px',
      listStyleType: 'none',
      paddingLeft: '0'
    },
  },
});

export default Notifications;
