import React, { Component } from "react";
class SupplierLoginForm extends Component {
  state = {};
  render() {
    return (
      <form>
        {/* you didnt used onchange event handler for every input field and dont have functionality for submit button (do it first) */}
        <div class="form-group">
          <label htmlFor="">Email address</label>
          <input
            type="email"
            className="form-control"
            id=""
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="form-control"
            id=""
            placeholder="Password"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default SupplierLoginForm;
