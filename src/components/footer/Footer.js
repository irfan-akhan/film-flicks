import React from 'react';
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
                    <Link to="/profile">
                        <button> Profile</button>
                    </Link>
                    <Link to="/search">
                        <button> Discover</button>
                    </Link>
                </div>
                <img
                    className="footer__img"
                    src="https://i.ibb.co/svrK41n/film-flicks-3.png"
                    alt="logo"
                    border="0"
                ></img>
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
                        <img
                            src="https://i.ibb.co/YPFsMYN/LinkedIn.png"
                            alt="LinkedIn"
                        ></img>
                    </a>
                    <a href="https://github.com/Irfan-akhan" className="github">
                        <img
                            src="https://i.ibb.co/SKB76WQ/github.png"
                            alt="github"
                            border="0"
                        ></img>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
