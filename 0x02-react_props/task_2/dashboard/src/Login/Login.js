import './Login.css';

function Login() {
  return (
    <div className="App">
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
    </div>
  );
}

export default Login;