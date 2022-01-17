import React, { Component } from "react";
import Home from "./pages/home/Home";
import { connect } from "react-redux";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

class App extends Component {
  render() {
    return (
      <div className="App">
        < Home/>
        <button className="btn btn-secondary">press</button>
      </div>
    );
  }
}

export default connect((state) => ({}), {})(App);
