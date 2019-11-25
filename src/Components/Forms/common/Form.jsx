import React, { Component } from "react";
import ReusableInput from "./ReusableInput";
import Joi from "joi-browser";

class Form extends Component {
  state = {
    /* 18*/
    data: {},
    errors: {}
  };

  validate = () => {
    /* below  line is 13*/
    const options = {
      abortEarly: false
    };
    /* below line is 13*/
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
  };

  /* 3*/ handleSubmit = e => {
    /* 3*/ e.preventDefault();
    /* 9*/ const errors = this.validate();
    /* 10 */ console.log(errors);
    /* 9 */ this.setState({ errors: errors || {} }); /* 11 */
    /* 9*/ if (errors) return;

    /* onSubmission */
    this.onSubmit();
  };

  handleChange = ({ currentTarget }) => {
    /* 12-2 */ const errors = { ...this.state.errors };
    /* 12-1 */ const errorMessage = this.validateProperty(currentTarget);
    /* 12-3 */ if (errorMessage) errors[currentTarget.name] = errorMessage;
    /* 12-4 */ else delete errors[currentTarget.name];

    /* 5 */ const data = { ...this.state.data };
    /* 6 */ data[currentTarget.name] = currentTarget.value;

    this.setState({ data, errors });
  };

  renderInput = (name, label, placeholder, type = "text") => {
    const { data, errors } = this.state;
    return (
      <ReusableInput
        /* 5  {data.vendorEmail} */ value={data[name]}
        /* 6 */ onChange={this.handleChange} /* 8*/
        /* 6: */ name={name} /* 8 "vendorEmail"*/
        label={label} /* 8 label="Email address: "  */
        type={type} /* "text"*/
        placeholder={placeholder} /* "Email address" 19*/
        error={errors[name]} /* 11  {errors.vendorEmail} */
      />
    );
  };

  FormButton = buttonLabel => {
    return (
      <button
        disabled={this.validate()}
        type="submit"
        className="btn btn-primary"
      >
        {buttonLabel}
      </button>
    );
  };
}

export default Form;
