import React, { Component } from "react";
import { render } from "react-dom";
import Layout from "./containers/Layout/Layout";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route exact path="/new" component={Layout} />
        </Switch>
      </HashRouter>
    );
  }
}

render(<App />, document.querySelector("#app"));
