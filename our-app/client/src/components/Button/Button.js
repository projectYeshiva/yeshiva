import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <span  onClick={onClick}>
        {text}
    </span>
  )
}

export default Button