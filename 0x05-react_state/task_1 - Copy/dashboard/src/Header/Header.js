import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from './Holberton-Logo.jpg';

function Header() {
  return (
    <div className={css(styles.appHeader)}>
      <img src={logo} className={css(styles.logo)} alt="logo" />
      <h1 className={css(styles.headerText)}>
        School dashboard
      </h1>
    </div>
  );
}

const styles = StyleSheet.create({
  appHeader: {
    borderBottom: '3px solid #E0434C',
    display: 'flex',
    alignItems: 'center',
    height: '162px',
    width: '100%',
  },
  logo: {
    height: '159px',
    width: '159px',
  },
  headerText: {
    color: '#E0434C',
    fontWeight: '900',
    fontSize: '2rem',
  }
});

export default Header;
