import { useEffect, useState } from 'react';
import { tmdb } from '../api/tmdb';

const useFetchMovies = url => {
    const [state, setState] = useState([]);
    useEffect(() => {
        const ac = new AbortController();
        tmdb.get(url)
            .then(response => {
                const { data } = response;
                setState(data.results);
            })
            .catch(err => console.error(err));
        return () => ac.abort();
    }, [url]);

    return state;
};
export default useFetchMovies;
