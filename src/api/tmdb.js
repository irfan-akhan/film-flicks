import axios from 'axios';
export const tmdb = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    header: {
        'Allow-Access-Control-Origin': '*',
    },
});
