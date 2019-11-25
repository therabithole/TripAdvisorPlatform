import React, { Component } from "react";
import ReusableInput from "./common/ReusableInput";
class UserLoginForm extends Component {
  state = {
    data: { userEmail: "", userPassword: "" },
    errors: { userEmail: "", userPassword: "" }
  };

  handleInputChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    console.log(data);
    this.setState({ data });
  };

  render() {
    const { data } = this.state;
    return (
      <form>
        <ReusableInput
          name="userEmail"
          value={data.userEmail}
          labelling="Email address: "
          type="text"
          placeholder="Email address"
          onChange={this.handleInputChange}
        />
        <ReusableInput
          name="userPassword"
          value={data.userPassword}
          labelling="Password: "
          type="password"
          placeholder="Password"
          onChange={this.handleInputChange}
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default UserLoginForm;
