import React from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="top">
                <div className="links">
                    <h2 className="brand">Film flicks</h2>
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                    <Link to="/user">
                        <button> Profile</button>
                    </Link>
                    <Link to="/discover">
                        <button> Discover</button>
                    </Link>
                </div>
                <LazyLoad offset={100}>
                    <img
                        className="footer__img"
                        src="https://i.ibb.co/svrK41n/film-flicks-3.png"
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
                            <img
                                src="https://i.ibb.co/YPFsMYN/LinkedIn.png"
                                alt="LinkedIn"
                            ></img>
                        </LazyLoad>
                    </a>
                    <a href="https://github.com/Irfan-akhan" className="github">
                        <LazyLoad offset={100}>
                            <img
                                src="https://i.ibb.co/SKB76WQ/github.png"
                                alt="github"
                                border="0"
                            ></img>
                        </LazyLoad>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
