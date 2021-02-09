import React from 'react';
import './Loader.css';

function Loader() {
    return (
        <div className="loader-container">
            <div className="loader">
                <div className="loader">
                    <div className="inner one"></div>
                    <div className="inner two"></div>
                    <div className="inner three"></div>
                </div>
            </div>
        </div>
    );
}

export default Loader;
