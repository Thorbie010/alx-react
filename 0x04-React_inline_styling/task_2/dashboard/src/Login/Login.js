import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
    return(
        <div className={css(styles.appBody)}>
            <p className={css(styles.paragraph)}>Login to access the full dashboard</p>
            <label htmlFor="email" className={css(styles.label)}>Email:</label>
            <input type="email" id="email" name="email" className={css(styles.input)}/>
            <label htmlFor="password" className={css(styles.labelPass)}>Password:</label>
            <input type="password" id="password" name="password" className={css(styles.input)}/>
            <button className={css(styles.button)}>OK</button>
        </div>
    );
}

const styles = StyleSheet.create({
  appBody: {
    marginTop: '4rem',
    height: 'calc(100vh - 7rem - 162px)',
    '@media (max-width: 900px)': {
      marginTop: '2rem',
      marginLeft: '3rem' // Adjusted margin for smaller screens
    },
  },
  paragraph: {
    marginLeft: '3rem',
    '@media (max-width: 900px)': {
      marginLeft: '1rem', // Adjusted margin for smaller screens
    },
  },
  label: {
    marginLeft: '3rem',
    '@media (max-width: 900px)': {
      marginLeft: '1rem', // Adjusted margin for smaller screens
    },
  },
  labelPass: {
    marginLeft: '1rem',
    '@media (max-width: 900px)': {
      marginLeft: '1rem',
      marginTop: '0', // Adjusted margin for smaller screens
    },
  },
  input: {
    marginTop: '1rem',
    marginLeft: '1rem',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '25%',
    boxSizing: 'border-box',
    '@media (max-width: 900px)': {
      width: 'calc(100% - 7rem)', // Adjusted width for smaller screens
      marginLeft: '0',
      marginTop: '0',
      border: '0', // Adjusted margin for smaller screens
    },
  },
  button: {
    marginLeft: '1rem',
    '@media (max-width: 900px)': {
      marginLeft: '1rem', // Adjusted margin for smaller screens
      marginTop: '0', // Adjusted margin for smaller screens
    },
  }
});

export default Login;
