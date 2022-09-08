import React from 'react';
import './navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="nav-bar">
                <h3 className="nav-bar--logo"><a href="/">MoMOuth-Tracker</a></h3>
                <ul className="nav-bar--list">
                    <li className="nav-bar--list-item">Connected To</li>
                    <li className="nav-bar--list-item">Transactions</li>
                    <li className="nav-bar--list-item">Help</li>
                </ul>
                <button className="nav-bar--btn">Profile</button>
            </nav>
        </div>
    );
};

export default Navbar;