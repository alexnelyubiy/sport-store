import React from 'react';
import ReactDOM from 'react-dom';
import store from 'store';
import { Provider } from 'react-redux';
import Routes from "routes";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>, 
  document.getElementById('root')
);
