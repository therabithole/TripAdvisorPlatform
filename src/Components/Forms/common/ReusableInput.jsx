import React, { Component } from "react";
const ReusableInput = ({
  name /* 8*/,
  label /* 8*/,
  value /* 8*/,
  onChange /* 8*/,
  placeholder,
  error /*11 */,
  type
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}> {label} </label>
      <input
        name={name} // props.name /* 8 */
        id={name} // props.name /* 8 */
        value={value} // props.value /* 8 */
        onChange={onChange} // props.onChange /* 8 */
        type={type} // props.name /* 8 */
        className="form-control"
        placeholder={placeholder} // props.placeholder /* 8 */
      />
      {error && <div className="alert alert-danger">{error} </div>} {/* 11 */}
    </div>
  );
};

export default ReusableInput;
