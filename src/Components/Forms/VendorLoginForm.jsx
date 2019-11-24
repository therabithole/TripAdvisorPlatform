import React, { Component } from "react";
import Joi from "joi-browser";
import ReusableInput from "./common/ReusableInput"; /* 8*/

class VendorLoginForm extends Component {
  state = {
    /* 4*/ account: { /* 7 */ vendorEmail: "", vendorPassword: "" },
    /* 9 */ errors: {}
  };

  schema = {
    vendorEmail: Joi.string()
      .required()
      .label("Email"),
    vendorPassword: Joi.string()
      .required()
      .label("Password")
  };

  validate = () => {
    const options = {
      abortEarly: false
    };
    const { error } = Joi.validate(this.state.account, this.schema, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  /* 3*/ handleSubmit = e => {
    /* 3*/ e.preventDefault();
    /* 9*/ const errors = this.validate();
    /* 10 */ console.log(errors);
    /* 9 */ this.setState({ errors: errors || {} }); /* 11 */
    /* 9*/ if (errors) return;

    /* 3*/ console.log(" Handle Submitted");
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget }) => {
    /* 12-2 */ const errors = { ...this.state.errors };
    /* 12-1 */ const errorMessage = this.validateProperty(currentTarget);
    /* 12-3 */ if (errorMessage) errors[currentTarget.name] = errorMessage;
    /* 12-4 */ else delete errors[currentTarget.name];

    /* 5 */ const account = { ...this.state.account };
    /* 6 */ account[currentTarget.name] = currentTarget.value;

    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <ReusableInput
          /* 5 */ value={account.vendorEmail}
          /* 6 */ onChange={this.handleChange} /* 8*/
          /* 6: */ name="vendorEmail" /* 8*/
          label="Email address: " /* 8*/
          type="text"
          placeholder="Email address"
          /* 11 */ error={errors.vendorEmail}
        />
        <small className="form-text text-muted">
          We'll never share your emails with anyone else.
        </small>
        <br />
        <ReusableInput
          /* 5 */ value={account.vendorPassword} /* 8*/
          /* 6 */ onChange={this.handleChange} /* 8*/
          /* 6 */ name="vendorPassword" /* 8*/
          label="Password: " /* 8*/
          type="password"
          placeholder="Password"
          /* 11 */ error={errors.vendorPassword}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default VendorLoginForm;
