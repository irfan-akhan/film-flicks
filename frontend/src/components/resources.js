export const API_KEY = 'c98379d070aea3bf6b254fd97cb04037';

const urlsList = {
    trendingMovies: `/trending/movie/week?api_key=${API_KEY}`,
    topRatedMovies: `/movie/top_rated?api_key=${API_KEY}`,
    upcomingMovies: `/movie/upcoming?api_key=${API_KEY}`,
    popularMovies: `/movie/popular?api_key=${API_KEY}`,
    nowPlayingMovies: `/movie/now_playing?api_key=${API_KEY}`,
    latestMovies: `/movie/latest?api_key=${API_KEY}`,
    trendingTv: `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`,
    topRatedTv: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    upcomingTv: `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
    nowPlayingTv: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`,
    popularTv: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    latestTV: `https://api.themoviedb.org/3/tv/latest?api_key=${API_KEY}&language=en-US`,
};

export const movieGenres = [
    {
        id: 28,
        name: 'Action',
    },
    {
        id: 12,
        name: 'Adventure',
    },
    {
        id: 16,
        name: 'Animation',
    },
    {
        id: 35,
        name: 'Comedy',
    },
    {
        id: 80,
        name: 'Crime',
    },
    {
        id: 99,
        name: 'Documentary',
    },
    {
        id: 18,
        name: 'Drama',
    },
    {
        id: 10751,
        name: 'Family',
    },
    {
        id: 14,
        name: 'Fantasy',
    },
    {
        id: 36,
        name: 'History',
    },
    {
        id: 27,
        name: 'Horror',
    },
    {
        id: 10402,
        name: 'Music',
    },
    {
        id: 9648,
        name: 'Mystery',
    },
    {
        id: 10749,
        name: 'Romance',
    },
    {
        id: 878,
        name: 'Science Fiction',
    },
    {
        id: 10770,
        name: 'TV Movie',
    },
    {
        id: 53,
        name: 'Thriller',
    },
    {
        id: 10752,
        name: 'War',
    },
    {
        id: 37,
        name: 'Western',
    },
];
export default urlsList;
