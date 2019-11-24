import React, { Component } from "react";
import ReusableInput from "./common/ReusableInput";
class UserLoginForm extends Component {
  state = {
    account: { userEmail: "", userPassword: "" },
    errors: { userEmail: "", userPassword: "" }
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
          name="userEmail"
          value={account.userEmail}
          labelling="Email address: "
          type="text"
          placeholder="Email address"
          onChange={this.handleInputChange}
        />
        <ReusableInput
          name="userPassword"
          value={account.userPassword}
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
