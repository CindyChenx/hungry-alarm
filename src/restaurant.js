import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./components.r/navbar.restaurant"

import NewsEvent from "./components/newsevent.customer"
import RestaurantLogin from "./components.r/loginpage.restaurant"
import RestaurantProfile from "./components.r/res_system.restaurant"
import CreateRestaurant from "./components.r/createRestaurant.restaurant"
import RestaurantEvent from "./components.r/eventspage.restaurant"
import RestaurantBalance from "./components.r/accountbalance.restaurant"
import RestaurantPage from "./components.r/yourpage.restaurant"
import RestaurantProfileEdit from "./components.r/profileEdit.restaurant"
import ChangePassword from "./components.r/passwordreset.restaurant"
import EventCreate from "./components.r/createEvent.restaurant"

function Restaurant() {
    return (
    
        <Router>
           <Navbar />
           <br/>
           <Route path = "/" exact component = {NewsEvent} />
           <Route path = "/restaurant/login"  component = {RestaurantLogin}/>
           <Route path = "/restaurant/profile"  component = {RestaurantProfile}/> 
           <Route path = "/restaurant/register"  component = {CreateRestaurant}/> 
           
           <Route path = "/restaurant/payment"  component = {RestaurantBalance}/>
           <Route path = "/restaurant/yourpage"  component = {RestaurantPage}/>
           <Route path = "/restaurant/profileEdit/:id"  component = {RestaurantProfileEdit}/> 
           <Route path = "/restaurant/resetpassword/:id"  component = {ChangePassword}/>

           <Route path = "/restaurant/event"  component = {RestaurantEvent}/>
           <Route path = "/restaurant/eventCreate" component = {EventCreate}/>
           
           
         </Router>
        
        
       );
  }
  
  export default Restaurant;