import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Discover from './discover/Discover';
import Home from './home/Home';
import Loader from './loader/Loader';
import MovieDetails from './movieDetails/MovieDetails';
import User from './user/User';
import SearchResult from './searchresults/SearchResult';

function App() {
    setTimeout(() => {
        const loader = document.querySelector('.loader-container');
        loader.style.display = 'block';

        if (loader) {
            setTimeout(() => {
                loader.style.display = 'none';
                window.scrollTo(0, 0);
            }, 2000);
        }
    }, 10);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/movies/:id" component={MovieDetails} />
                <Route exact path="/tv/:id" component={MovieDetails} />
                <Route exact path="/discover" component={Discover} />
                <Route exact path="/user" component={User} />
                <Route exact path="/search/:key" component={SearchResult} />
            </Switch>
            <Loader />
        </BrowserRouter>
    );
}

export default App;
