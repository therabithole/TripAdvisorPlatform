import React, { Component } from "react";
class SupplierLoginForm extends Component {
  state = {};

  formDefaultBehavior = e => {
    e.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.formDefaultBehavior}>
        {/* you didnt used onchange event handler for every input field and dont have functionality for submit button (do it first) */}
        <div className="form-group">
          <label htmlFor="login-email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="login-email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            className="form-control"
            id="login-password"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default SupplierLoginForm;
