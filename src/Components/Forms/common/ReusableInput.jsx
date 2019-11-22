import React, { Component } from "react";
const ReusableInput = ({
  identifier,
  labelling,
  placeholder,
  value,
  onChange
}) => {
  return (
    <div className="form-group">
      <label htmlFor={identifier}> {labelling} </label>
      <input
        value={value}
        onChange={onChange}
        id={identifier}
        type="text"
        className="form-control"
        name={identifier}
        placeholder={placeholder}
      />
    </div>
  );
};

export default ReusableInput;
