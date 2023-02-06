import React from "react";

const Input = ({ type, placeholder ,label}) => {
  return (
    <div>      
      <input type={type} placeholder={placeholder} />
      <label>:{label}</label>
    </div>
  );
};

export default Input;
