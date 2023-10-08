import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'fbaa34b4a071ad869c16352881014cd5',
        language: 'es-ES'
    }
})

export default movieDB