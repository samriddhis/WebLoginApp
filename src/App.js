import React from "react";
import { FaHandPointDown, FaSignInAlt, FaEnvelope,FaLockOpen } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="MainBg">
      <h1 className="TitleTxt">Latest Login Form</h1>
      <div className="InnerContainer">
        <div className="FormContainer">
          <div className="TopContainer">
            <img src={require("./images/user.jpg")} alt="" />
          </div>
          <form action="#" method="post">
            <p className="LoginTxt">
              Login Here
              <FaHandPointDown size="24px" className="HandIconStyle" />
            </p>
            <div className="InputStyle">
              <input type="email" placeholder="Email" name="name" />
              <FaEnvelope color="#1cc7d0" size={16} className="EnvIconStyle"/>
            </div>
            <div className="InputStyle">
              <input type="password" placeholder="Placeholder" name="name" />
              <FaLockOpen color="#1cc7d0" size={16} className="EnvIconStyle"/>
            </div>
            <button type="submit" className="ButtonStyle">
              <FaSignInAlt color="white" size={20} />
            </button>
          </form>
          <a href="#" class="FgtPswdStyle">
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

export default App;
