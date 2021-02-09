import { withRouter } from 'react-router-dom';
import React, { useState } from 'react';
// Local imports
import './SearchBar.css';

const searchHandler = (e, term, history) => {
    e.preventDefault();

    history.push(`/search/${term}`);
};

function SearchBar(props) {
    const [term, setTerm] = useState('');
    return (
        <form
            className="search__form"
            onSubmit={e => {
                searchHandler(e, term, props.history);
            }}
        >
            <input
                type="text"
                name="search"
                className="search__input"
                placeholder="search movies"
                value={term}
                onChange={e => {
                    setTerm(e.target.value);
                }}
            />
            <img
                src="https://i.ibb.co/dtSKsgZ/Png-Item-253949.png"
                alt="Png-Item-253949"
                border="0"
            />
        </form>
    );
}

export default withRouter(SearchBar);
