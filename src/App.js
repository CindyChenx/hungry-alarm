import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import UserLogin from "./components/CustomerLoginpage/loginpage.customer"
import RestaurantLogin from "./components.r/loginpage.restaurant"

import Restaurant from "./restaurant"
import User from './user'

function App() {
  return (

    <Router>
    
      <Route path="/" exact component={UserLogin} />
      <Route  path="/restaurant/start" exact component={RestaurantLogin} />
      <Route  path="/restaurant" component={Restaurant} />
      <Route  path="/user" component={User} />

    </Router>


  );
}

export default App;