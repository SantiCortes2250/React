import axios from "axios";

const API = 'https://api.themoviedb.org/3';
const API_KEY = '93b4f5fa2f613775037737b22a08f486';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';

//get movies

export const getTop = async () =>{
    const res = await axios.get(`${API}/movie/top_rated`,{
        params:{
            api_key: API_KEY
        },
    })

    return res;


}

export const getPop = async () =>{
    const res = await axios.get(`${API}/movie/popular`,{
        params:{
            api_key: API_KEY
        },
    })

    return res;


}

export const getUp = async () =>{
    const res = await axios.get(`${API}/movie/upcoming`,{
        params:{
            api_key: API_KEY
        },
    })

    return res;


}



export const getTrending = async (type, name) =>{
    const res = await axios.get(`${API}/${type}/${name}`,{
        params:{
            api_key: API_KEY
        },
    })

    return res;


}

//get movies for the name

export const getMovie = async (tipo , name) =>{
    const res = await axios.get(`${API}/search/${tipo}`,{
        params:{
            api_key:API_KEY,
            query: name

        }
    })

    return res;
    
}



//get video movie

export const getVideoMovie = async (id) =>{
    const res = await axios.get(`${API}/movie/${id}`,{
        params:{
            api_key:API_KEY,
            append_to_response: "videos"

        }
    })

    return res;
    
}





