import React from 'react'

const Button = ({ bgColor, color, size, text, borderRadius }) => {
  return (
    <button type='button' style={{ backgroundColor: bgColor, color: color, borderRadius, zIndex: 1000 }} className={`text-${size} p-3 hover:drop-shadow-xl`}>
      {text}
    </button>
  )
}

export default Button