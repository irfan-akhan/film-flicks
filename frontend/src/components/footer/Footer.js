import React from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import './Footer.css';
import 'aos/dist/aos.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="top">
                <div className="links">
                    <h2 className="brand">Film flix</h2>
                    <Link to="/">
                        <button className="button__link">Home</button>
                    </Link>
                    <Link to="/user">
                        <button className="button__link"> Profile</button>
                    </Link>
                    <Link to="/discover">
                        <button className="button__link"> Discover</button>
                    </Link>
                </div>
                <LazyLoad offset={100}>
                    <img
                        className="footer__img"
                        src="/main-logo.png"
                        alt="logo"
                        border="0"
                    ></img>
                </LazyLoad>
            </div>
            <div className="bottom">
                <h2 className="copyright__name">
                    Build by <span> khan irfan</span>
                </h2>

                <div className="social__links">
                    <a
                        href="https://www.linkedin.com/in/irfan-khan-4a40b31b4/"
                        className="linkedin"
                    >
                        <LazyLoad offset={100}>
                            <img src="/linkedin.png" alt="LinkedIn"></img>
                        </LazyLoad>
                    </a>
                    <a href="https://github.com/Irfan-akhan" className="github">
                        <LazyLoad offset={100}>
                            <img src="/github.png" alt="github" border="0"></img>
                        </LazyLoad>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
