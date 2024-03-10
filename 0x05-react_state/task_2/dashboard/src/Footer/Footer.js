import React from 'react';
import './footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function footer() {
  return (
      <footer className="App-footer">
        <p>{getFooterCopy(true)} </p>
        <p> &copy;{getFullYear()}</p>
      </footer>
  );
}

export default footer;
