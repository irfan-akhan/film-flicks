import React from 'react';
import { Link } from 'react-router-dom';
import { movieGenres } from '../resources';
import useFetchMovies from '../useFetchMovies';
import LazyLoad from 'react-lazyload';
import './movies.css';

const renderGenres = ids => {
    let result = [];
    for (const id of ids) {
        movieGenres.every(genre => {
            if (genre.id === id) {
                result.push(genre.name);
                return false;
            }
            return true;
        });
    }
    return result.splice(0, 2).map(item => <span>{item} </span>);
};

const renderMovies = movies => {
    const imageUrl = `https://image.tmdb.org/t/p/original`;

    return movies?.map(movie => {
        return (
            <li className="movie__item" key={movie.id}>
                <div className="placeholder">
                    <LazyLoad height={200} offset={100}>
                        <img
                            className="movie__poster"
                            src={`${imageUrl}${movie?.poster_path}`}
                            alt={movie.title || movie.name}
                        />
                    </LazyLoad>
                </div>
                <h2 className="movie__title">{movie.title || movie.name}</h2>

                <h4 className="movie__rating">&#9733; {movie.vote_average}</h4>
                <h4 className="movie__genre">{renderGenres(movie.genre_ids)}</h4>

                <Link
                    to={
                        movie.title
                            ? { pathname: `/movies/${movie.id}`, state: movie }
                            : { pathname: `/tv/${movie.id}`, state: movie }
                    }
                >
                    <button className="button ">View Details</button>
                </Link>
            </li>
        );
    });
};

function Movies({ url }) {
    const moviesList = useFetchMovies(url);
    return <ul className="movieList">{renderMovies(moviesList)}</ul>;
}

export default Movies;
