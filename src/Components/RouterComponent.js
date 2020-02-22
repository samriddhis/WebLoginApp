import React from "react";
import { Router, Route,browserHistory} from "react-router";
import LoginComponent from "./LoginComponent";
import HomeComponent from "./HomeComponent";

function RouterComponent() {
  return (
    <Router history={browserHistory}>
        <Route exact path="/" component={LoginComponent} />
        <Route path="home" component={HomeComponent} />
    </Router>
  );
}

export default RouterComponent;
