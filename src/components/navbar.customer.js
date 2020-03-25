import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            // TODO: the hamberger bar is not working so far
            <nav className="navbar navbar-expand-lg navbar-passion bg-light">
                <a class="navbar-brand" href="#">Hungry alarm</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" href="#" to="/">Local Evnet</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" href="#" to="/location">Resturant Near By</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" href="#" to="/favorite">Your Favorite</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" href="#" to="/user">System</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" href="#" to="/login">Login</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>



        );

    }
}