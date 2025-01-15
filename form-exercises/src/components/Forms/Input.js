import React from "react";

const Input = ({ type, name, label, value, onChange, placeholder }) => {
  <div>
    <label>{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>;
};

export default Input;
