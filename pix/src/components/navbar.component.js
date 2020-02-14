import React, { Component } from 'react';
import{ Link } from 'react-router-dom';

export default class Navbar extends Component {

    render (){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Hello Pix</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create-user" className="nav-link">Create User</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="mavbar-item">
                            <Link to="/profile" className="nav-link">Profile</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}