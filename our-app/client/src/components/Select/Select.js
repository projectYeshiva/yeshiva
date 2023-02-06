import React from 'react'

const Select = ({options,inputChange}) => {
  return (
    <div>
        {options.map((option) => (
        <div >
          <select on onChange={inputChange}>
            {option.option.map((el) => (
              <option>{el}</option>
            ))}
          </select>
          <label>:{option.label}</label>
        </div>
      ))}
    </div>
  )
}

export default Select