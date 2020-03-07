import React, { Component } from "react";

import "./LoginPage.css";

// images
import LoginImg from "../../../images/Group 10212 (1).png";

// form
import LoginForm from "../Forms/Forms";

export default class LoginPage extends Component {
  render() {
    // console.log(this.props, ' props')
    return (
      <div className="LoginPage">
        <div className="Login_img">
          <img src={LoginImg} alt="" />
        </div>
        <div className="Login_form">
          <LoginForm { ...this.props }/>
        </div>
      </div>
    );
  }
}
