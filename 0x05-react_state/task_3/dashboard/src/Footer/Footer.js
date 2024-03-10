import React, { useContext } from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

function Footer() {
  const { user } = useContext(AppContext);

  return (
    <div className={css(styles.appFooter)}>
      <p>{getFooterCopy(true)} </p>
      <p> &copy;{getFullYear()}</p>
      {user.isLoggedIn && (
        <p>
          <a href="/contact">Contact us</a>
        </p>
      )}
    </div>
  );
}

const styles = StyleSheet.create({
  appFooter: {
    borderTop: '3px solid #E0434C',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontStyle: 'italic',
    height: '3rem',
    width: '100%'
  }
});

export default Footer;
