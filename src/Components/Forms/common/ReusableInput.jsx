import React, { Component } from "react";
const ReusableInput = ({
  name,
  labelling,
  placeholder,
  value,
  type,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}> {labelling} </label>
      <input
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        type={type}
        className="form-control"
        placeholder={placeholder}
      />
      {error && <div className="alert alert-danger">{error} </div>}
    </div>
  );
};

export default ReusableInput;
