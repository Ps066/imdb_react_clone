import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import MovieList from './Components/MovieList/MovieList';
import Movie from './Components/Movie/Movie'
import ErrorPage from './Components/ErrorPage/ErrorPage';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header/>
        <Routes>
          <Route index element={<HomePage/>}></Route>
          <Route path='movie/:id' element={<Movie/>}></Route>
          <Route path='movies/:type' element={<MovieList/>}></Route>
          <Route path='/*' element={<ErrorPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
