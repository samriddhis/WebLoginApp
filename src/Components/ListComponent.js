import React from "react";

export default class ListComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="lcOuterContainer">
        <div className="lcInnerContainer">
          <div className="lcItemContainer">
            <img
              src={require("../images/beer_bottle1.jpg")}
              alt=""
              className="itemImgStyle"
            />
            <div className="lcItemBottomStyle">
              <h3>Smart Shopping</h3>
              <h4>Expolre now</h4>
            </div>
          </div>
          <div className="lcItemContainer">
            <img
              src={require("../images/beer_bottle1.jpg")}
              alt=""
              className="itemImgStyle"
            />
            <div className="lcItemBottomStyle">
              <h3>Smart Shopping</h3>
              <h4>Expolre now</h4>
            </div>
          </div>
          <div className="lcItemContainer">
            <img
              src={require("../images/beer_bottle1.jpg")}
              alt=""
              className="itemImgStyle"
            />
            <div className="lcItemBottomStyle">
              <h3>Smart Shopping</h3>
              <h4>Expolre now</h4>
            </div>
          </div>
          <div className="lcItemContainer">
            <img
              src={require("../images/beer_bottle1.jpg")}
              alt=""
              className="itemImgStyle"
            />
            <div className="lcItemBottomStyle">
              <h3>Smart Shopping</h3>
              <h4>Expolre now</h4>
            </div>
          </div>
          <div className="lcItemContainer">
            <img
              src={require("../images/beer_bottle1.jpg")}
              alt=""
              className="itemImgStyle"
            />
            <div className="lcItemBottomStyle">
              <h3>Smart Shopping</h3>
              <h4>Expolre now</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
