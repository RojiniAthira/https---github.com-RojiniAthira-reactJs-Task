import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would typically handle the login logic.
    // For simplicity, I'm just checking if the username and password are non-empty.
    if (username && password) {
      navigate('/dashboard');
    }
  };
  
    return (
        <div className="wrapper">
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                <FaUser className='icon' />
            </div>
            <div className="input-box">
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <FaLock className='icon'/>
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href='#'>Forgot Password</a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
                <p>Don't have an account?<a href='#'>Click Here</a></p>
            </div>
        </form>
    </div>
  )
}
