import React, { useEffect, useState } from 'react';
import { tmdb } from '../../api/tmdb';
import { API_KEY } from '../resources';
import Navbar from '../navbar/Navbar';
import './SearchResult.css';
import { Link } from 'react-router-dom';
import Loader from '../loader/Loader';

const renderResults = results => {
    const imageUrl = `https://image.tmdb.org/t/p/original`;

    if (!results) {
        return <h1>No result found</h1>;
    }
    return results.map(movie => {
        return (
            <div className="search__movie" key={movie.id}>
                <img
                    className="search__movie__poster"
                    src={`${imageUrl}${movie.poster_path}`}
                    alt={movie.title}
                />
                <h2 className="search__movie__title">{movie.title}</h2>

                <h4 className="search__movie__rating">&#9733; {movie.vote_average}</h4>

                <Link to={{ pathname: `/movies/${movie.id}`, state: movie }}>
                    <button className="detail__button ">View Details</button>
                </Link>
            </div>
        );
    });
};

function SearchResult(props) {
    const [results, setResults] = useState([]);
    const term = props.match.params.key;

    useEffect(() => {
        setTimeout(() => {
            const loader = document.querySelector('.loader-container');
            loader.style.display = 'block';

            if (loader) {
                setTimeout(() => {
                    loader.style.display = 'none';
                    window.scrollTo(0, 0);
                }, 3000);
            }
        }, 10);
        tmdb.get(
            `/search/movie?api_key=${API_KEY}&language=en-US&query=${term}&page=1&include_adult=false`,
        )
            .then(response => {
                setResults(response.data.results);
            })
            .catch(err => console.error(err));
    }, [term]);

    return (
        <section className="search__page">
            <Navbar />
            <div className="search__results">{renderResults(results)}</div>
            <Loader />
        </section>
    );
}

export default SearchResult;
