import React from 'react'

function Input({type ,placeholder , label }) {
  return (
    <>
    <label> {label}</label>
    <input type={type} placeholder={placeholder}  />
    </>
  )
}

export default Input