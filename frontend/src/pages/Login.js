import React from 'react'
import './Login.css';
import Button from '../components/button/Button';

export default function Login() {
  return (
    <div className='login'>
        <div className='login-container'>
          <h1>Login here!</h1>
          <form>
            <input type="email" placeholder='Email Address' required/>
            <input type="password" placeholder='Your password' required/>
            <Button 
              type="submit"
              text="Login"
              onclick=""
            />
          </form>
          <p>Don't have an account? <a href='/registration'>Sign up here!</a></p>
          <a href='/'>Back Home</a>
        </div>
    </div>
  )
}
