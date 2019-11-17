import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: ""
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  handleSubmit = e => {
    e.preventDefault();

    //Calling the server
    console.log("Submitted");
  };
  render() {
    const { account } = this.state;
    return (
      <section className="$Login">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username"> Username </label>
            <input
              value={account.username}
              onChange={this.handleChange}
              id="username"
              type="text"
              className="form-control"
              name="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"> Password </label>
            <input
              value={account.password}
              onChange={this.handleChange}
              name="password"
              id="password"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-sm btn-primary"> Login</button>
        </form>
      </section>
    );
  }
}

export default LoginForm;

/* 
import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: ""
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  handleSubmit = e => {
    e.preventDefault();

    //Calling the server
    console.log("Submitted");
  };
  render() {
    const { account } = this.state;
    return (
      <section className="$Login">
        Logging in ...
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username"> Username </label>
            <input
              value={account.username}
              onChange={this.handleChange}
              id="username"
              type="text"
              className="form-control"
              name="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"> Password </label>
            <input
              value={account.password}
              onChange={this.handleChange}
              name="password"
              id="password"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-sm btn-primary"> Login</button>
        </form>
      </section>
    );
  }
}

export default LoginForm;
*/
