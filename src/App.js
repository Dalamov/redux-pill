import React, { Component } from "react";
import { connect } from "react-redux";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route path="/" element={<Home/>} />
      </Routes>
      </BrowserRouter>
    );
  }
}

export default connect((state) => ({}), {})(App);
