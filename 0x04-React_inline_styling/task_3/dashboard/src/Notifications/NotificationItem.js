import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends Component {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    
    return (
      <li
        className={
          `${css(styles.notificationList)} ${
            type === 'default'
              ? css(styles.defaultNotification)
              : css(styles.urgentNotification)
          }`
        }
        data-notification-type={type}
        onClick={() => markAsRead(id)}
      >
        {html ? (
          <div dangerouslySetInnerHTML={html}></div>
        ) : (
          <span>{value}</span>
        )}
    </li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  markAsRead: () => {},
};

const styles = StyleSheet.create({
  defaultNotification: {
    color: 'blue',
  },
  urgentNotification: {
    color: 'red',
  },
  notificationList: {
    position: 'relative',
    paddingRight: '3rem',
    '@media (max-width: 900px)': {
      padding: '10px 8px',
      width: '100%',
      fontSize: '20px',
      borderBottom: '1px solid black',
      listStyleType: 'none'
    },
  },
});

export default NotificationItem;
