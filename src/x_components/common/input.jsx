import React, { Component } from "react";
const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="name"> {label}</label>
      <input
        autoFocus
        type="text"
        id="name"
        name="name"
        value={value}
        onChange={onChange}
        className="form-control"
      />
    </div>
  );
};

export default Input;
