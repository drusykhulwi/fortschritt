import React from 'react'
import './Button.css'

export default function Button({ text, type, onclick }) {
  return (
    <button type={type} onClick={onclick}>{text}</button>
  )
}
