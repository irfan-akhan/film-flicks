import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Discover from './discover/Discover';
import Home from './home/Home';
import MovieDetails from './movieDetails/MovieDetails';
import SearchResult from './searchresults/SearchResult';

// const Discover = lazy(() => import('./discover/Discover'));
// const SearchResult = lazy(import('./searchresults/SearchResult'));
// const Home = lazy(() => import('./home/Home'));
// const MovieDetails = lazy(() => import('./movieDetails/MovieDetails'))

function App() {
    const { loading, setLoading } = useState(true);
    const fakeReq = () => {
        return new Promise(resolve => setTimeout(() => resolve(), 2500));
    };
    useEffect(() => {
        fakeReq()
            .then(() => {
                const el = document.querySelector('.loader-container');
                if (el) {
                    el.remove();
                    setLoading(!loading);
                }
            })
            .catch(err => console.error(err));
    }, []);
    if (loading) {
        return null;
    }
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/movies/:id" component={MovieDetails} />
                <Route exact path="/tv/:id" component={MovieDetails} />
                <Route exact path="/discover" component={Discover} />
                <Route exact path="/search/:key" component={SearchResult} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
