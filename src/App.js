import React, { Component } from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import { connect } from "react-redux";
import Home from "./pages/home/Home";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <p>*header*</p>
        <Home/>
      </div>
    );
  }
}

export default connect((state) => ({}), {})(App);
