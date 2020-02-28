import React from "react";
import HeaderComponent from "./HeaderComponent";
import ListComponent from "./ListComponent";
import "../App.css";

export default class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  allSelectedClick() {
    var selectedCheckBox = document.querySelector("#selectAllBox");
    var checkboxes = document.querySelectorAll("input[type=checkbox]");
    if (selectedCheckBox.checked) {
      for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true;
      }
    } else {
      for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
      }
    }
  }
  render() {
    return (
      <div className="hcOuterContainer">
        <HeaderComponent />
        <div className="hcInnerContainer">
          <div className="hcProductContainer">
            <div className="hcProductMenu">
              <div className="hcSideBarMenu">
                <section className="hcSectionContainer">
                  <h1>Category</h1>
                  <div className="hcRow1">
                    <div className="hcRow2">
                      <label className="checkBox">
                        <input
                          type="checkbox"
                          name="checkbox"
                          id="selectAllBox"
                          onClick={this.allSelectedClick}
                        />
                        <i>All Category</i>
                      </label>
                    </div>
                    <div className="hcRow3">
                      <label className="checkBox">
                        <input type="checkbox" name="checkbox" />
                        <i>Pub Beer</i>
                      </label>
                      <label className="checkBox">
                        <input type="checkbox" name="checkbox" />
                        <i>Devils Cup</i>
                      </label>
                      <label className="checkBox">
                        <input type="checkbox" name="checkbox" />
                        <i>Foreman</i>
                      </label>
                      <label className="checkBox">
                        <input type="checkbox" name="checkbox" />
                        <i>Black Exodus</i>
                      </label>
                      <label className="checkBox">
                        <input type="checkbox" name="checkbox" />
                        <i>Jade</i>
                      </label>
                      <label className="checkBox">
                        <input type="checkbox" name="checkbox" />
                        <i>Cone Crusher</i>
                      </label>
                      <label className="checkBox">
                        <input type="checkbox" name="checkbox" />
                        <i>Sophomoric Saison</i>
                      </label>
                      <label className="checkBox">
                        <input type="checkbox" name="checkbox" />
                        <i>Ginja Ninja</i>
                      </label>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="hcProductBlock">
              <ListComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
