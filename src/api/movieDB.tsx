import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '3ee1407dc5622753cf95e1947af20984',
    language: 'es-ES',
  },
});

export default movieDB;
