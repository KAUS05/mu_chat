import React, { Component } from "react";

import "./Forms.css";

export default class Forms extends Component {
  state = {
    name: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, password } = this.state;
    if (!name.length || !password.length) {
      return false;
    } else {
      this.props.history.push("/noinfo");
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="middle">
          <figure className="swing">
            <div className="swing_div">
              <h1>Welcome to Meet Univesity</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>

              <form action="" onSubmit={this.handleSubmit}>
                <div className="label_input">
                  <input
                    onChange={this.handleChange}
                    type="text"
                    name="name"
                    id=""
                    placeholder=""
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="name">User name</label>
                </div>

                <div className="label_input">
                  <input
                    onChange={this.handleChange}
                    type="password"
                    name="password"
                    id=""
                    required
                  />
                  <label htmlFor="password">Password</label>
                </div>

                <input type="submit" name="" id="" value="LOGIN" />
              </form>
            </div>
          </figure>
        </div>
      </React.Fragment>
    );
  }
}
