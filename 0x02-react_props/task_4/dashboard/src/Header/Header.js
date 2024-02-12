import logo from './Holberton-Logo.jpg';
import './Header.css';

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
    </div>
    );
}
    
export default Header;