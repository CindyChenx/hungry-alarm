import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Navbar from "./components/navbar.customer"
import NewsEvent from "./components/newsevent.customer"
import LocationMap from "./components/map.customer"
import Favorite from "./components/favorite.customer"
import UserSystem from "./components/usersystem.customer"

function App() {
  return (
    
   <Router>
      <Navbar />
      <br/>
      <Route path = "/" exact component = {NewsEvent} />
      <Route path = "/location" exact component = {LocationMap} />
      <Route path = "/favorite" exact component = {Favorite} />
      <Route path = "/user" exact component = {UserSystem} />
    </Router>
   
   
  );
}

export default App;