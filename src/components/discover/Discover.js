import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { tmdb } from '../../api/tmdb';
import { API_KEY } from '../resources';
import { movieGenres } from '../resources';
import '../searchresults/SearchResult.scss';
import './Discover.scss';

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

    if (!movies.length) {
        return <h1>No result found</h1>;
    }
    return movies.map(movie => {
        return (
            <div className="search__movie" key={movie.id}>
                <img
                    className="search__movie__poster"
                    src={`${imageUrl}${movie.poster_path}`}
                    alt={movie.title}
                />
                <h2 className="search__movie__title">{movie.title}</h2>

                <h4 className="search__movie__rating">&#9733; {movie.vote_average}</h4>
                <h4 className="search__movie__genre">
                    <span>Genre </span>| {renderGenres(movie.genre_ids)}
                </h4>
                <h4 className="search__movie__date">Released | {movie.release_date}</h4>

                <Link to={{ pathname: `/movies/${movie.id}`, state: movie }}>
                    <button className="detail__button ">View Details</button>
                </Link>
            </div>
        );
    });
};

function Discover() {
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [pageNumber, setPageNumber] = useState(1);
    useEffect(() => {
        tmdb.get(
            `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}`,
        )
            .then(response => {
                setMovies(response.data.results);
                setTotalPages(response.data.total_pages);
            })
            .catch(err => console.error(err));
    }, [pageNumber, totalPages]);
    return (
        <div className="result__container" style={{ backgroundColor: '#161130' }}>
            <div className="search__results">{renderMovies(movies)}</div>

            {pageNumber > 1 ? (
                <button
                    className="loadmore__button"
                    onClick={e => {
                        if (pageNumber > 1) setPageNumber(pageNumber - 1);
                    }}
                >
                    Previous
                </button>
            ) : null}
            <button
                className="loadmore__button"
                onClick={e => {
                    setPageNumber(pageNumber + 1);
                }}
            >
                Next
            </button>
        </div>
    );
}

export default Discover;
