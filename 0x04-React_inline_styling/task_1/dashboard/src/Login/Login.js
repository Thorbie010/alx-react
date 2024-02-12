import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
    return(
        <div className={css(styles.appBody)}>
            <p className={css(styles.paragraph)}>Login to access the full dashboard</p>
            <label htmlFor="email" className={css(styles.label)}>Email</label>
            <input type="email" id="email" name="email" className={css(styles.input)}/>
            <label htmlFor="password" className={css(styles.labelPass)}>Password</label>
            <input type="password" id="password" name="password" className={css(styles.input)}/>
            <button className={css(styles.button)}>OK</button>
        </div>
    );
}

const styles = StyleSheet.create({
  appBody: {
    marginTop: '4rem',
    height: 'calc(100vh - 7rem - 162px)',
  },
  paragraph: {
    marginLeft: '3rem',
  },
  label: {
    marginLeft: '3rem',
  },
  labelPass: {
    marginLeft: '1rem',
  },
  input: {
    marginTop: '1rem',
    marginLeft: '1rem',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '25%',
    boxSizing: 'border-box',
  },
  button: {
    marginLeft: '1rem',
  }
});

export default Login;
