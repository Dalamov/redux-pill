import React, { Component } from "react";
import { connect } from "react-redux";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Dashboard from "./pages/Dashboard";

library.add(fas);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/properties" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default connect((state) => ({}), {})(App);
