import React, { Component } from "react";
import Home from "./pages/home/Home";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>hola</p>
        < Home/>
      </div>
    );
  }
}

export default connect((state) => ({}), {})(App);