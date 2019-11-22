import React, { Component } from "react";
import ReusableInput from "./common/ReusableInput";
class UserLoginForm extends Component {
  state = {
    account: {
      userEmail: "",
      userPassword: ""
    }
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
      <form>
        <ReusableInput
          identifier="userEmail"
          value={account.userEmail}
          labelling="Email address: "
          onChange={this.handleInputChange}
          placeholder="Email address"
        />
        <ReusableInput
          identifier="userPassword"
          value={account.userPassword}
          labelling="Password: "
          onChange={this.handleInputChange}
          placeholder="Password"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default UserLoginForm;
