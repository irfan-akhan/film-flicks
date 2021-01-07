import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../searchbar/SearchBar';

// Local Imports
import './navbar.scss';

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/">
                    <img
                        className="logo__img"
                        src="https://i.ibb.co/gZG9vCN/Group.png"
                        alt="logo"
                        border="0"
                    ></img>
                </Link>
            </div>
            <SearchBar />
            <div className="user">
                <Link to="/">
                    <img
                        src="https://i.ibb.co/f0GzQhr/home-alt-fill.png"
                        alt="home"
                    ></img>
                </Link>
                <Link to="/discover">
                    <img
                        src="https://i.ibb.co/PDRFGzf/layers-alt.png"
                        alt="trending"
                    ></img>
                </Link>

                <img src="https://i.ibb.co/jy1ttd3/user-plus.png" alt="signin"></img>
            </div>
        </div>
    );
}

export default Navbar;
