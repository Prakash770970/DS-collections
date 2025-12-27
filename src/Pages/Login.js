import React, { useState } from 'react'
import './Login.css';
import Button from 'react-bootstrap/Button';
const Login = () => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please fill out all fields');
      return;
    }
    
     if (username === 'prakash' || password === '6385770970') {
      
      setError(null);
      console.log('Login successful');
      alert('Login successful!');
     } 
  else {
     setError('Invalid username or password');
    }
  };
 return (
    <div className='bg'>
    <div className="login-page">
      <h1><i>Login</i></h1>
      <br>
      </br>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={username}onChange={(e) => setUsername(e.target.value)} />
        <br>
        </br>
        <label>Password:</label>
        <input  type="password"  value={password}onChange={(e) => setPassword(e.target.value)}/>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <br>
        </br>
         <br>
        </br>
        <button  type="submit">Login</button>
        <br>
        </br>
      </form>
      <br>
        </br>
      <p>
        Don't have an account? <a href="">Register here</a>
        
      </p>
      </div>
    </div>


  )
}


export default Login
