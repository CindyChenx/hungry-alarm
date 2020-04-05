import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Link, withRouter } from "react-router-dom";

import Navbar from "./components/navbar.customer"

import NewsEvent from "./components/newsevent.customer"
//  import LocationMap from "./components/map.customer"
//  import Favorite from "./components/favorite.customer"
//  import UserSystem from "./components/usersystem.customer"
//  import UserLogin from "./components/loginpage.customer"
//  import CreateUser from "./components/createuser.customer"

import Restaurant from "./restaurant"
import User from './user'

//  import RestaurantLogin from "./components.r/loginpage.restaurant"
//  import RestaurantProfile from "./components.r/res_system.restaurant"
//  import CreateRestaurant from "./components.r/createRestaurant.restaurant"
//  import RestaurantEvent from "./components.r/eventspage.restaurant"
//  import RestaurantBalance from "./components.r/accountbalance.restaurant"
//  import RestaurantPage from "./components.r/yourpage.restaurant"

function App() {
  return (
    
   <Router> 
   <Navbar />

      <Route path = "/" exact component = {NewsEvent} />
      {/* <Route path = "/location"  component = {LocationMap} />
      <Route path = "/favorite"  component = {Favorite} />
      <Route path = "/profile"  component = {UserSystem} />
      <Route path = "/login" component = {UserLogin} />
      <Route path = "/register" component = {CreateUser} /> 
       */}
      <Route path = "/restaurant" component = {Restaurant} />
      <Route path = "/user" component = {User} />

      {/* <Route path = "/restaurant/login"  component = {RestaurantLogin}/>
      <Route path = "/restaurant/profile"  component = {RestaurantProfile}/> 
      <Route path = "/restaurant/register"  component = {CreateRestaurant}/> 
      <Route path = "/restaurant/event"  component = {RestaurantEvent}/>
      <Route path = "/restaurant/payment" component = {RestaurantBalance}/>
      <Route path = "/restaurant/yourpage" s component = {RestaurantPage}/>  */}


    </Router>
   
   
  );
}

export default App;