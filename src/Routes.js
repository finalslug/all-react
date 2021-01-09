import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import State from "./pages/State/State";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/state" component={State}></Route>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
