import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store.js'
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"></link>

ReactDOM.render(
  <Router>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </Router>
, document.getElementById('root'));

