import logo from './Holberton-Logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
        <div className="header-line"></div>
      </header>
      
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>

      <footer className="App-footer">
        <div className="footer-line"></div>
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
