import React from 'react'
import './Login.css';

export default function () {
  return (
    <div className='login'>
        <div className='login-container'>
            <h1>Login here!</h1>
            <form>
                <input type="text" placeholder='Email Address' required/>
                <input type="text" placeholder='Your password' required/>
                <button type='submit'>Login</button>
                <p>Don't have an account? <a href='/'>Sign up here!</a></p>
            </form>
        </div>
    </div>
  )
}
