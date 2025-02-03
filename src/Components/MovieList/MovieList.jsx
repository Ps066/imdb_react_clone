import React, { useEffect, useState, useCallback } from 'react'
import './movielist.css'
import { useParams } from 'react-router-dom'
import Cards from '../CardComp/Card'

const MovieList = () => {

    //useState function to store the movie list 
    const [movieList, setMovieList]= useState([]);

    // fetching the :type from the url using useParams
    const {type} = useParams()

    // Memoized getData function
    const getData = useCallback(() => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=650d3e38cf6cfbf478abb5010cd579d4&language=en-US`)
            .then(res => res.json())
            .then(data => setMovieList(data.results))
            .catch(err => console.error("Error fetching data:", err));
    }, [type]); // Now it correctly updates when `type` changes

    // initial useEffect on page load
    useEffect(()=>{
        getData();
    },[])

    // useEffect when type sets
    useEffect(()=>{
        getData();
    },[type])

    // // getData method
    // const getData = () =>{
    //     fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=650d3e38cf6cfbf478abb5010cd579d4&language=en-US`)
    //     .then(res => res.json())
    //     .then(data => setMovieList(data.results))
    // }

  return (
    <div className="movie__list">
        <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
        <div className="list__cards">
            {
                movieList.map(movie => (
                    <Cards movie={movie} />
                ))
            }
        </div>
    </div>
  )
}

export default MovieList