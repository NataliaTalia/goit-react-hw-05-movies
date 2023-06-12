import { Trending } from '../Home/Home.styled';

import { useState, useEffect } from 'react';
import { getSearchedMovies } from 'components/APIs';
import { useNavigate, useLocation } from 'react-router-dom';

const Movies = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [movieName, setMovieName] = useState('');
  const [selectedSearchedMovie, setSelectedSearchedMovie] = useState([]);

  console.log(selectedSearchedMovie);

  const saveMovieList = movies => {
    sessionStorage.setItem('movieList', JSON.stringify(movies));
  };

  const getMovieList = () => {
    const movieList = sessionStorage.getItem('movieList');
    return movieList ? JSON.parse(movieList) : [];
  };

  const handleInput = e => {
    setMovieName(e.currentTarget.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (movieName.trim() === '') {
      alert('PLease write the name of the movie');
      return;
    }
    try {
      const data = await getSearchedMovies(movieName);
      setSelectedSearchedMovie(data.results);
      saveMovieList(data.results);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const savedMovieList = getMovieList();
    setSelectedSearchedMovie(savedMovieList);
  }, []);

  // useEffect(() => {
  //   sessionStorage.removeItem('movieList');
  // }, []);

  const handleMovieClick = movieId => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={movieName}
          onChange={handleInput}
        />
        <button type="submit">Search movie</button>
      </form>

      {selectedSearchedMovie.length > 0 && (
        <div>
          <h1>Here`s what we`ve found:</h1>

          {selectedSearchedMovie.map(searchedMovie => (
            <Trending
              key={searchedMovie.id}
              to={`/movies/${searchedMovie.id}`}
              onClick={() => handleMovieClick(searchedMovie.id)}
              state={{ from: location }}
            >
              {searchedMovie.title}
            </Trending>
          ))}
        </div>
      )}
    </main>
  );
};
export default Movies;
