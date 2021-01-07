import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { tmdb } from '../../api/tmdb';
// local imports
import './banner.scss';

const renderMovies = (movies, title) => {
    const movie = movies[Math.floor(Math.random() * movies.length)];
    return (
        <header
            className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
                backgroundImage: `linear-gradient(to bottom, #00000009, #16112f),url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            }}
        >
            <div className="banner__details">
                <h2 className="name">{title.toUpperCase()}</h2>
                <h2 className="banner__title">
                    {movie?.title || movie?.name}
                    <span className="banner__rating">
                        {' '}
                        | {movie?.vote_average} rating
                    </span>
                </h2>
                <p className="banner__description">{movie?.overview}</p>
                <Link to={{ pathname: `/movies/${movie?.id}`, state: movie }}>
                    <button>View Details</button>
                </Link>
            </div>
        </header>
    );
};

function Banner({ url, title }) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        tmdb.get(url)
            .then(response => {
                setMovies(response.data.results);
            })
            .catch(err => console.log(err));
    }, [url]);
    return renderMovies(movies, title);
}

export default Banner;
