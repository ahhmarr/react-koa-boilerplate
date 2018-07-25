import React, { Component } from "react";
import { render } from "react-dom";
import Layout from "./containers/Layout/Layout";
class App extends Component {
  render() {
    return <Layout />;
  }
}

render(<App />, document.querySelector("#app"));
