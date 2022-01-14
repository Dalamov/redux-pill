import React, { Component } from "react";

import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>hola</p>
      </div>
    );
  }
}

export default connect((state) => ({}), {})(App);
