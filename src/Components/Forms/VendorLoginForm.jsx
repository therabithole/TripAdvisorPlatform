import React, { Component } from "react";
import Joi from "joi-browser";
import ReusableInput from "./common/ReusableInput";

class VendorLoginForm extends Component {
  state = {
    account: { vendorEmail: "", vendorPassword: "" },
    errors: {}
  };

  schema = {
    vendorEmail: Joi.string()
      .required()
      .label("Email"),
    vendorPassword: Joi.string()
      .required()
      .label("Password")
  };

  validateInputFields = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
  };

  handleInputChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateInputFields(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    console.log(account);
    this.setState({ account });
  };

  // Form Error Validation
  validateForm = () => {
    const options = {
      abortEarly: false
    };
    const { error } = Joi.validate(this.state.account, this.schema, options);
    console.log(error);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handlingForm = e => {
    e.preventDefault();
    const errors = this.validateForm();
    this.setState({ errors: errors || {} });
    if (errors) return;
  };

  render() {
    const { account, errors } = this.state;
    return (
      <form onSubmit={this.handlingForm}>
        <ReusableInput
          name="vendorEmail"
          value={account.vendorEmail}
          labelling="Email address: "
          type="text"
          placeholder="Email address"
          onChange={this.handleInputChange}
          error={errors.vendorEmail}
        />
        <small className="form-text text-muted">
          We'll never share your emails with anyone else.
        </small>
        <br />
        <ReusableInput
          name="vendorPassword"
          value={account.vendorPassword}
          labelling="Password: "
          type="password"
          placeholder="Password"
          onChange={this.handleInputChange}
          error={errors.vendorPassword}
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default VendorLoginForm;
