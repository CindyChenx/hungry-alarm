import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            // TODO: the hamberger bar is not working so far
            <nav className="navbar navbar-expand-lg navbar-passion bg-light">
                <a className="navbar-brand" >Hungry alarm</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link"  to="/">Local Event</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link"  to="/location">Resturant Near By</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link"  to="/favorite">Your Favorite</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/user">System</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link"  to="/register">Create user</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>



        );

    }
}