import React from "react";

const Input = ({
  type,
  name,
  label,
  value,
  onChange,
  placeholder,
  className,
}) => (
  <div>
    <label>{label}:</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  </div>
);

export default Input;
