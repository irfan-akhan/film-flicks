import React, { useState } from 'react';

// local imports
import urls from '../resources';
import Row from '../row/Row';
import Banner from '../banner/Banner';
import './home.scss';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const {
    trendingMovies,
    topRatedMovies,
    upcomingMovies,
    nowPlayingMovies,
    popularMovies,
    trendingTv,
    topRatedTv,
    upcomingTv,
    nowPlayingTv,
    popularTv,
} = urls;

function Home() {
    const [versionFlag, setVersionFlag] = useState(true);

    return (
        <div className="container">
            <Navbar />
            <Banner url={versionFlag ? trendingMovies : trendingTv} title="trending" />
            <div className="flag">
                <button
                    onClick={() => {
                        setVersionFlag(true);
                    }}
                >
                    Movies
                </button>

                <button
                    onClick={() => {
                        setVersionFlag(false);
                    }}
                >
                    {' '}
                    Tv shows
                </button>
            </div>
            <div className="movies">
                <Row
                    title="now playing"
                    url={versionFlag ? nowPlayingMovies : nowPlayingTv}
                />
                <Row title="popular" url={versionFlag ? popularMovies : popularTv} />
                <Row title="upcoming" url={versionFlag ? upcomingMovies : upcomingTv} />
                <Row
                    title="top rated"
                    url={versionFlag ? topRatedMovies : topRatedTv}
                />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
