import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Navbar from "./components/navbar.customer"
import NewsEvent from "./components/newsevent.customer"
import LocationMap from "./components/map.customer"
import Favorite from "./components/favorite.customer"
import UserSystem from "./components/usersystem.customer"
import UserLogin from "./components/loginpage.customer"
import CreateUser from "./components/createuser.customer"

import RestaurantLogin from "./components.r/loginpage.restaurant"
import RestaurantProfile from "./components.r/res_system.restaurant"


function App() {
  return (
    
   <Router>
      <Navbar />
      <br/>
      <Route path = "/" exact component = {NewsEvent} />
      <Route path = "/location" exact component = {LocationMap} />
      <Route path = "/favorite" exact component = {Favorite} />
      <Route path = "/profile" exact component = {UserSystem} />
      <Route path = "/login" exact component = {UserLogin} />
      <Route path = "/register" exact component = {CreateUser} />

      <Route path = "/restaurant" exacg component = {RestaurantLogin}/>
      <Route path = "/restaurant/profile" exacg component = {RestaurantProfile}/> 
      
    </Router>
   
   
  );
}

export default App;