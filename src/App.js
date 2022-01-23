import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";

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
          <Route exact path="/properties" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logIn" element={< LogIn />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default connect((state) => ({}), {})(App);
