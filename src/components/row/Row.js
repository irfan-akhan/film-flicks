import React from 'react';
import Movies from '../movies/Movies';
import './Row.scss';

function Row({ title, url }) {
    return (
        <div className="row">
            <h1 className="row__heading">{title}</h1>
            <div className="row__movies">
                <Movies url={url} />
            </div>
        </div>
    );
}

export default Row;
