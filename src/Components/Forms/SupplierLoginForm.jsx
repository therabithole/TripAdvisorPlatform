import React, { Component } from "react";

import ReusableInput from "./common/ReusableInput";
class SupplierLoginForm extends Component {
  state = {
    account: {
      supplierEmail: "",
      supplierPassword: ""
    }
  };

  handlingForm = e => {
    e.preventDefault();
  };

  handleInputChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    console.log(account);
    this.setState({ account });
  };
  render() {
    const { account } = this.state;
    return (
      <form onSubmit={this.handlingForm}>
        <ReusableInput
          identifier="supplierEmail"
          value={account.supplierEmail}
          labelling="Email address: "
          onChange={this.handleInputChange}
          placeholder="Email address"
        />
        <small className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>{" "}
        <br />
        <ReusableInput
          identifier="supplierPassword"
          value={account.supplierPassword}
          labelling="Password: "
          onChange={this.handleInputChange}
          placeholder="Password"
        />
        <input type="checkbox" /> Remember Me
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default SupplierLoginForm;

/* Code before extracting reusable input*/
/* 
<div className="form-group">
          <label htmlFor="supplierUsername">Email address</label>
          <input
            autoFocus
            type="email"
            className="form-control"
            id="supplierUsername"
            name="supplierUsername" // we used name property to reference e.current.target.value relatively using bracket notation //
            value={account.supplierUsername}
            onChange={this.handleInputChange}
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />  </div>
      */

/* <div className="form-group">
          <label htmlFor="supplierPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="supplierPassword"
            name="supplierPassword" // we used name property to reference e.current.target.value relatively using bracket notation //
            value={account.supplierPassword}
            onChange={this.handleInputChange}
            placeholder="Password"
          />
        </div>*/
