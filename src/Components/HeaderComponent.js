import React from "react";
import "../App.css";

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="headerContainer">
        <div className="headerInnerContainer">
          <div className="leftHeader">
          <img src={require("../images/sLogo.png")} alt="shopping" className="sIconStyle"/>
            <a href="#home" className="homeLink">
              Home
            </a>
            <a href="#myAccount" className="myAccountLink">
              My Account
            </a>
            <a href="#cart" className="cartLink">
              Cart
            </a>
            <a href="#contact" className="contactLink">
              Contact
            </a>
          </div>
          <div className="rightHeader">
            <div className="searchDiv">
            <i class="fa fa-search" aria-hidden="true"></i>
              <p>Search</p>
            </div>
            <div className="emptyCartDiv">
            <i class="fa fa-tag" aria-hidden="true"></i>
              <p>WishList</p>
            </div>
            <div className="signInDiv">
            <i class="fa fa-user" aria-hidden="true"></i>
              <p>Sign in</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
