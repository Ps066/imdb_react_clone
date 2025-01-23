import axios from "axios";


// declare api 
const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

//creating a get request function 
export const getPopularMovies = () =>{
    return api.get("movie/popular?api_key=650d3e38cf6cfbf478abb5010cd579d4&language=en-US")
}

