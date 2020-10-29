import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Booking from './components/Booking';
import Login from './components/Login';
import AdminManage from './components/AdminManage';

import EditPage from './components/EditPage';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/chi-tiet/:id">
          <ItemDetailContainer />
        </Route>
        <Route exact path="/dat-tour/:id">
          <Booking />
        </Route>
        <Route exact path="/admin">
          <Login />
        </Route>
        <Route exact path="/chinh-sua/:id">
          <EditPage />
        </Route>
      </Router>
    )
  }
}
