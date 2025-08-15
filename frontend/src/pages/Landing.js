import React from 'react'
import Button from '../components/button/Button'
import { useNavigate } from 'react-router-dom'
import './Landing.css'

export default function Landing() {
    const navigate = useNavigate();
    const goToReg = () => {
        navigate('/registration')
    } 
    const goToLogin = () => {
        navigate('/login')
    } 
  return (
    <div className='landing-page'>
        <h1>Fortschritt Progress Tracker</h1>
        <p>This is for the dream chasers! Track your goals. Celebrate your wins. Be reminded of your deadlines. Learn from your previous mistakes. Stay Motivated🥳.</p>
        <div className='buttons'>
            <Button 
                type="submit"
                text="Login"
                onclick={goToLogin}
            />
            <Button 
                type="submit"
                text="Register"
                onclick={goToReg}
            />
        </div>
    </div>
  )
}
