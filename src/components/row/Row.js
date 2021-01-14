import React, { useEffect } from 'react';
import Aos from 'aos';
import Movies from '../movies/Movies';
import './Row.scss';
import 'aos/dist/aos.css';

function Row({ title, url }) {
    useEffect(() => {
        Aos.init({ offset: 200, duration: 1000, easing: 'ease-in-sine' });
        Aos.refresh();
    }, []);
    return (
        <div className="row">
            <h1 className="row__heading">{title}</h1>
            <div data-aos="fade-up" className="row__movies">
                <Movies url={url} />
            </div>
        </div>
    );
}

export default Row;
