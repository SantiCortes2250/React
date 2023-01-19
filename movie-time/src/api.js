import axios from "axios";

const API = 'https://api.themoviedb.org/3';
const API_KEY = '93b4f5fa2f613775037737b22a08f486';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';

//get movies

export const getMovies = async () =>{
    const res = await axios.get(`${API}/discover/movie`,{
        params:{
            api_key: API_KEY
        },
    })

    return res;


}

export const getMovie = async (nombre) =>{
    const res = await axios.get(`${API}/search/movie`,{
        params:{
            api_key:API_KEY,
            query: nombre

        }
    })

    return res;
    
}

