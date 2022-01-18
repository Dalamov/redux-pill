import React, { Component } from "react";
import { connect } from "react-redux";
import Home from "./pages/home/Home";
import Properties from "./pages/properties/Properties";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/properties" element={<Properties />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default connect((state) => ({}), {})(App);
