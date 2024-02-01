import logo from './Holberton-Logo.jpg';
import './App.css';
import './Notifications'
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      
      <div className="App-body">
        <p>Login to access the full dashboard</p>

        {/* Email input */}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />

        {/* Password input */}
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />

        {/* OK button */}
        <button>OK</button>
      </div>

      <footer className="App-footer">
        <p>{getFooterCopy(true)} </p>
        <p> &copy;{getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
