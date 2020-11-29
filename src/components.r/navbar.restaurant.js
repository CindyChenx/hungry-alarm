import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

class Navbar extends Component {
    logOut(e) {
        localStorage.removeItem('rtoken')
        this.props.history.push('/')
        // window.location = "/restaurant/start"
    }

    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/restaurant/start" className="nav-link">
                        Restaurant
                </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Login
                </Link>
                </li>
            </ul>
        )

        
        // TODO:add navbar for restaurant
        const RestaurantLink = (
            <ul className="navbar-nav">

                <li className="nav-item">
                    <Link to="/restaurant/profile" className="nav-link">
                        Profile
                </Link>
                </li>
                <li className="nav-item">
                    <Link to="/restaurant/appointment" className="nav-link">
                        Appintment
                </Link>
                </li>
                <li className="nav-item">
                    <Link to="/restaurant/event" className="nav-link">
                        Create Event
                </Link>
                </li>
                <li className="nav-item">
                    <Link to="/restaurant/payment" className="nav-link">
                        Account
                </Link>
                </li>
                <li className="nav-item">
                    <Link to="/restaurant/yourPage" className="nav-link">
                        view Page
                </Link>
                </li>
                <li className="nav-item">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                </a>
                </li>
            </ul>
        )



        return (

            <nav className="navbar navbar-expand-lg navbar-passion bg-light">
                <a className="navbar-brand" >Hungry alarm</a>
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-contentent-mid-conter" id="navbarSupportedContent">

                    <ul className="navbar-nav ml-auto">
                        {/* <li>
                            <Link to="../" className="nav-link">
                                Events
                            </Link>
                        </li> */}

                    </ul>
                    {localStorage.usertoken ? RestaurantLink : loginRegLink}
                    
                </div>
            </nav>
        );
    }


}
export default withRouter(Navbar)