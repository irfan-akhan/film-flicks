import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Discover from './discover/Discover';
import Home from './home/Home';
import MovieDetails from './movieDetails/MovieDetails';
import SearchResult from './searchresults/SearchResult';

function App() {
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
