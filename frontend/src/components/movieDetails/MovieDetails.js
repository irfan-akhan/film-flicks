import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import {
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    WhatsappIcon,
    TwitterIcon,
    TelegramIcon,
} from 'react-share';

import { tmdb } from '../../api/tmdb';
import Footer from '../footer/Footer';
import { API_KEY } from '../resources';
import './movieDetails.css';

const renderReviews = reviews => {
    if (!reviews.length) {
        return (
            <div className="review__item"> There are no review currently availabe </div>
        );
    }
    return reviews.map(review => {
        return (
            <div data-aos="fade-right" className="review__item" key={review?.id}>
                <h3 className="review__item__author">
                    <span>author| </span>
                    {review?.author}
                </h3>
                <p className="review__item__content">
                    {review?.content.slice(0, 440)}...
                </p>

                <a href={review?.url} className="review__item__button">
                    Read Full Review
                </a>
            </div>
        );
    });
};

const renderSimilarMovies = movies => {
    if (!movies.length) {
        return null;
    }
    return movies.map(movie => {
        return (
            <div data-aos="fade-down" className="similar__movies__item" key={movie?.id}>
                <LazyLoad offset={100}>
                    <img
                        className="similar__movies__poster"
                        src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                        alt={movie?.title}
                    />
                </LazyLoad>

                <h4 className="similar__movies__rating">
                    &#9733; {movie?.vote_average}
                </h4>
                <h2 className="similar__movies__title">
                    {movie?.title || movie?.name}
                </h2>

                <Link
                    to={
                        movie.title
                            ? { pathname: `/movies/${movie.id}`, state: movie }
                            : { pathname: `/tv/${movie.id}`, state: movie }
                    }
                >
                    <button className="similar__movies__button ">View Details</button>
                </Link>
            </div>
        );
    });
};

const renderTrailers = trailers => {
    if (!trailers.length) {
        return (
            <div className="no__trailer">There are no trailers currently availabe </div>
        );
    }
    const items = trailers.map(trailer => {
        return (
            <LazyLoad height={200} offset={[500, 100]} scroll>
                <iframe
                    data-aos="fade-left"
                    src={`https://www.youtube.com/embed/${trailer.key}`}
                    className="video__player"
                    controls
                    title="video-player"
                    frameborder="0"
                ></iframe>
            </LazyLoad>
        );
    });
    const index = Math.floor(Math.random() * items.length);
    return items[index];
};

const fetchCast = castMembers => {
    let cast = [];
    if (!castMembers.length) {
        return <div className="no__cast">There is no information available</div>;
    }
    for (let x = 0; x < castMembers.length; x++) {
        cast.push(castMembers[x]);
        if (x > 11) {
            break;
        }
    }
    return cast.map(member => {
        return (
            <li className="cast__member" key={member?.credit_id}>
                <div className="placeholder">
                    <LazyLoad height={200} offset={100}>
                        <img
                            src={
                                member?.profile_path
                                    ? `https://image.tmdb.org/t/p/original${member?.profile_path}`
                                    : 'https://i.ibb.co/X2C2DQf/no-image.png'
                            }
                            alt={member?.name}
                            className="cast__member__picture"
                        />
                    </LazyLoad>
                    <h2 className="cast__member__name">{member?.name}</h2>
                    <h3 className="cast__member__role">{member?.character}</h3>
                </div>
            </li>
        );
    });
};

const shareClickHandler = e => {
    const buttons = document.querySelector('.share__buttons');
    if (buttons.style.display === 'flex') {
        buttons.style.display = 'none';
    } else {
        buttons.style.display = 'flex';
    }
};

function MovieDetails(props) {
    const id = props.match.params.id;
    const path = props.match.path;
    const [movie, setMovie] = useState(null);
    const [castMembers, setCastMembers] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [trailers, setTrailers] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);

        const buttons = document.querySelector('.share__buttons');
        const share = document.querySelector('.share');
        if (share && buttons) {
            buttons.style = 'none';
            share.style = 'block';
        }

        (async () => {
            const { data } = await tmdb.get(
                path.includes('movies')
                    ? `/movie/${id}?api_key=c98379d070aea3bf6b254fd97cb04037&language=en-US`
                    : `/tv/${id}?api_key=c98379d070aea3bf6b254fd97cb04037&language=en-US`,
            );
            setMovie(data);
            const {
                data: { cast },
            } = await tmdb.get(
                movie?.title
                    ? `/movie/${id}/credits?api_key=${API_KEY}`
                    : `/tv/${id}/credits?api_key=${API_KEY}`,
            );
            setCastMembers(cast);
            const {
                data: { results },
            } = await tmdb.get(
                movie?.title
                    ? `/movie/${id}/reviews?api_key=${API_KEY}`
                    : `/tv/${id}/reviews?api_key=${API_KEY}`,
            );
            setReviews(results);
            const response = await tmdb.get(
                movie?.title
                    ? `/movie/${id}/videos?api_key=${API_KEY}`
                    : `/tv/${id}/videos?api_key=${API_KEY}`,
            );
            setTrailers(response.data.results);
            const similarMovies = await tmdb.get(
                movie?.title
                    ? `/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`
                    : `/tv/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`,
            );
            setSimilarMovies(similarMovies.data.results.slice(0, 5));
        })();
    }, [movie?.title, id, path]);

    return (
        <div className="movie__container">
            <Link to={'/'} className="back__button">
                <img
                    src="https://i.ibb.co/f0GzQhr/home-alt-fill.png"
                    alt="back button"
                ></img>
            </Link>
            <div
                className="share"
                onClick={e => {
                    shareClickHandler(e);
                }}
            >
                <img
                    src="https://i.ibb.co/TK1zGYh/share-outline.png"
                    alt="share-button"
                    border="0"
                ></img>
            </div>
            <div className="share__buttons">
                <TwitterShareButton
                    className="twitter"
                    url={window.location.href}
                    quote="check this out"
                    hashtag="Reactjs"
                >
                    <TwitterIcon size={32} round={true}></TwitterIcon>
                </TwitterShareButton>
                <TelegramShareButton
                    className="telegram"
                    url={window.location.href}
                    quote="check this out"
                    hashtag="Reactjs"
                >
                    <TelegramIcon size={32} round={true}></TelegramIcon>
                </TelegramShareButton>
                <WhatsappShareButton
                    className="whatsapp"
                    url={window.location.href}
                    quote="check this out"
                    hashtag="Reactjs"
                >
                    <WhatsappIcon size={32} round={true}></WhatsappIcon>
                </WhatsappShareButton>
            </div>
            <Link to={'/'} className="fav__button">
                <img
                    src="https://i.ibb.co/DCMZ5w3/heart-fill.png"
                    alt="favourite button"
                ></img>
            </Link>
            <header
                className="detail__banner"
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                    backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                }}
            >
                <div className="movie">
                    <img
                        src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                        alt={movie?.title}
                        className="movie__poster"
                    />
                    <div className="movie__details">
                        <h2 className="movie__title">{movie?.title || movie?.name}</h2>
                        <p className="movie__overview">{movie?.tagline}</p>
                        <h2 className="movie__rating">
                            Rating | <span> {movie?.vote_average}</span>
                        </h2>
                        <h2 className="movie__language">
                            Language |
                            <span>{movie?.original_language?.toUpperCase()}</span>
                        </h2>
                        <h2 className="movie__date">
                            {movie?.release_date
                                ? `Released | ${movie?.release_date}`
                                : ''}
                        </h2>
                        <h2 className="movie__creator">
                            <span>
                                {movie?.created_by
                                    ? `Created By | ${movie?.created_by
                                          .map(item => item.name)
                                          .join(' & ')}`
                                    : ' '}
                            </span>
                        </h2>
                        <h2 className="movie__Runtime">
                            {movie?.runtime
                                ? `Runtime | ${movie?.runtime} minutes`
                                : `Episode Runtime | ${movie?.episode_run_time}`}
                        </h2>
                    </div>
                </div>
            </header>
            <section className="details__section">
                <h1 className="heading">Summary</h1>
                <p data-aos="fade-left" className="overview">
                    {movie?.overview}
                </p>
                {movie?.first_air_date ? (
                    <div className="series">
                        <h1 className="heading">Details </h1>
                        <div className="series__details">
                            <h2>
                                <span>Seasons </span>
                                {movie?.number_of_seasons}
                            </h2>
                            <h2>
                                <span>Total Episode </span>
                                {movie?.number_of_episodes}
                            </h2>
                            <h2>
                                <span>Status </span>
                                {movie?.status}
                            </h2>
                            <h2>
                                <span>First Episode </span>
                                {movie?.first_air_date}
                            </h2>
                            <h2>
                                <span>Last Episode </span>
                                {movie?.last_air_date}
                            </h2>
                        </div>
                    </div>
                ) : (
                    ''
                )}
                <div data-aos="fade-right">
                    <h1 className="heading">cast</h1>
                    <ul className="cast">{fetchCast(castMembers)}</ul>
                </div>
                <h1 className="heading">trailer / Videos</h1>
                <div className="trailers">{renderTrailers(trailers)}</div>
                <h1 className="heading">reviews</h1>
                <div className="review">{renderReviews(reviews)}</div>
                <h1 className="heading">Similar </h1>
                <div data-aos="fade-up" className="similar__movies">
                    {renderSimilarMovies(similarMovies)}
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default MovieDetails;
