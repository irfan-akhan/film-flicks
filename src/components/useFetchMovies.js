import { useEffect, useState } from 'react';
import { tmdb } from '../api/tmdb';

const useFetchMovies = url => {
    const [state, setState] = useState([]);
    useEffect(() => {
        tmdb.get(url)
            .then(response => {
                setState(response.data.results);
            })
            .catch(err => console.error(err));
    }, [url]);

    return state;
};
export default useFetchMovies;
