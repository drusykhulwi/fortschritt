import React from 'react'
import './Registration.css'
import Button from '../components/button/Button'

export default function Registration() {
  return (
    <div className='register'>
        <div className='register-container'>
            <h1>REGISTRATION</h1>
            <form className='register-form'>
                <input type='text' required placeholder='ENTER YOUR FULL NAME'/>
                <input type='email' placeholder='Enter your email address' required/>
                <input type='password' placeholder='Password' required />
                <input  type='password' placeholder='Confirm Password' required/>
                <Button 
                  type="submit"
                  text="Register"
                  onclick=""
                />
            </form>
            <p>Already have an account? <a href='/login'>Login here!</a></p>
            <a href='/'>Back Home</a>
        </div>
    </div>
  )
}
