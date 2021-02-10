import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../searchbar/SearchBar';

// Local Imports
import './navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/">
                    <img
                        className="logo__img"
                        src="/main-logo.png"
                        alt="logo"
                        border="0"
                    ></img>
                </Link>
            </div>
            <SearchBar />
            <div className="user">
                <Link to="/">
                    <img src="/home.png" alt="home"></img>
                </Link>
                <Link to="/discover">
                    <img src="/trending.png" alt="trending"></img>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
