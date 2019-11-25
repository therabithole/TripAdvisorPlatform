import React, { Component } from "react";
const ReusableInput = ({
  /* type,  19, */
  name /* 8 */,
  label /* 8  */,
  /* 19  value,  8*/
  /* 19  onChange,  8*/
  /*19 placeholder, */
  error,
  /*11*/
  ...rest
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}> {label} </label>
      <input
        name={name} // props.name /* 8 */
        id={name} // props.name /* 8 */
        // 19> type={type} // props.name /* 8 */
        //  19> value={value} // props.value /* 8 */
        //  19> onChange={onChange} // props.onChange /* 8 */
        // 19 > placeholder={placeholder} // props.placeholder /* 8 */
        /* 19*/ {...rest}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error} </div>} {/* 11 */}
    </div>
  );
};

export default ReusableInput;
