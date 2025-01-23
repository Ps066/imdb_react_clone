import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
        <div className="headerLeft">
            <Link className="link" to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="imdb" className="header__icon" />
            </Link>
            <Link to="/movies/popular" className="link"> <span>Popular</span></Link>
            <Link to="/movies/top_rated" className="link"> <span>Top Rated</span></Link>
            <Link to="/movies/upcoming" className="link"> <span>Upcomming</span></Link>
        </div>
    </div>
  )
}

export default Header