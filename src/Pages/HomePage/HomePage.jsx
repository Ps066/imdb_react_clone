import React, { useEffect, useState } from "react";
import "./homepage.css";
import { getPopularMovies } from "../../Services/getData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../../Components/MovieList/MovieList";

const HomePage = () => {
  // useState to store the state of the Popular movies
  const [popularMovies, setPopularMovies] = useState([]);

  // function to fetch popular movies
  const fetchPopularMovies = async () => {
    try {
      const res = await getPopularMovies();
      setPopularMovies(res.data.results);
    } catch (error) {
      console.error("Error message:", error.message);
      console.error("Error status:", error.response.status);
      console.error("Error data:", error.response.data);
    }
  };

  //useEffect hook to fetch the movies while page loads
  useEffect(() => {
    fetchPopularMovies();
  }, []);

  // // Now you can use popularMovies state
  // console.log(popularMovies); // This will log the fetched movies to the console after data is received

  return (
    <>
      <div className='poster'>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={2}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((m) => (
            <Link className='link' to={`/movie/${m.id}`}>
              <div className='posterImage'>
                <img
                  src={`https://image.tmdb.org/t/p/original${m && m.backdrop_path}`}
                  alt={m.original_title}
                />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  {m ? m.original_title: ""}
                </div>
                <div className="posterImage_runtime">
                  {m? m.release_date: ""}
                  <span className="posterImage__rating">
                    {m ? m.vote_average: ""}
                    <i className="fas fa-star"/>
                  </span>
                </div>
                <div className="postImage_description">
                  {m ? m.overview : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        <MovieList/>
      </div>
    </>
  );
};

export default HomePage;
