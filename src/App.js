import React, { Component } from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import { connect } from "react-redux";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Home />
      </div>
    );
  }
}

export default connect((state) => ({}), {})(App);
