import './Login.css';
import logo from './assets/Logo.jpg'

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login logic goes here');
  };

  return (
    <div className="login-container">
      <img className='Logo' src={logo} alt='logo'></img>
      <h1 className='heading'>Welcome to BookHive</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <br />
        <button type="submit">Login</button>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Login;
