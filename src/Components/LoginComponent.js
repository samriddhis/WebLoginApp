import React from "react";
import {
  FaHandPointDown,
  FaSignInAlt,
  FaEnvelope,
  FaLockOpen
} from "react-icons/fa";
import { browserHistory } from "react-router";
import "../App.css";

export default class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      passWord: ""
    };
    this._onLoginPress = this._onLoginPress.bind(this);
    this._checkLogin = this._checkLogin.bind(this);
  }

  _checkLogin(username, password) {
    return new Promise(function(resolve, reject) {
        fetch("https://aqueous-refuge-84015.herokuapp.com/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: username,
            password: password
          })
        })
          .then(res => res.json().then(response => resolve(response)))
          .catch(error => {
            console.log("rejecting error", error);
            reject(error);
          });
      });
  }
  async _onLoginPress1() {
    try {
      var response = await this._checkLogin(
        this.state.userName,
        this.state.passWord
      );
      if (response.success === 0) {
        console.log("Login error: ", response.message);
      } else {
        browserHistory.push("/home");
      }
    } catch (error) {
      console.log("Login error: ", error);
    }
  }

  _onLoginPress(){
    browserHistory.push("/home");
  }

  render() {
    return (
      <div className="MainBg">
        <h1 className="TitleTxt">Latest Login Form</h1>
        <div className="InnerContainer">
          <div className="FormContainer">
            <div className="TopContainer">
              <img src={require("../images/user.jpg")} alt="" />
            </div>
            <form action="#" method="post">
              <p className="LoginTxt">
                Login Here
                <FaHandPointDown size="24px" className="HandIconStyle" />
              </p>
              <div className="InputStyle">
                <input
                  type="text"
                  placeholder="Email"
                  name="name"
                  value={this.state.userName}
                  onChange={e => this.setState({ userName: e.target.value })}
                />
                <FaEnvelope
                  color="#1cc7d0"
                  size={16}
                  className="EnvIconStyle"
                />
              </div>
              <div className="InputStyle">
                <input
                  type="password"
                  placeholder="Password"
                  name="name"
                  value={this.state.passWord}
                  onChange={e => this.setState({ passWord: e.target.value })}
                />
                <FaLockOpen
                  color="#1cc7d0"
                  size={16}
                  className="EnvIconStyle"
                />
              </div>
              <button
                type="submit"
                className="ButtonStyle"
                onClick={this._onLoginPress}
              >
                <FaSignInAlt color="white" size={20} />
              </button>
            </form>
            <a href="#" className="FgtPswdStyle">
              Forgot Password?
            </a>
          </div>
        </div>
        <div className="CopyRightContainer">
          <h2>© 2019 Latest Login Form. All rights reserved</h2>
        </div>
      </div>
    );
  }
}
