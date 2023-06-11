import { Trending } from '../Home/Home.styled';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSearchedMovies } from 'components/APIs';
import { useNavigate, useLocation } from 'react-router-dom';

export const Movies = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const [movieName, setMovieName] = useState('');
  const [selectedSearchedMovie, setSelectedSearchedMovie] = useState([]);

  const filmName = searchParams.get('name') || '';

  console.log(filmName);
  console.log(selectedSearchedMovie);

  const handleInput = e => {
    if (e.currentTarget.value === '') {
      setSearchParams({});
    } else {
      setSearchParams({ name: e.currentTarget.value.toLowerCase() });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (filmName.trim() === '') {
      alert('PLease write the name of the movie');
      return;
    }
    setMovieName(filmName);
  };

  useEffect(() => {
    const fetchSearchedMovies = async () => {
      try {
        const data = await getSearchedMovies(movieName);
        console.log(data, 'from fetch by movie name');
        setSelectedSearchedMovie(data.results);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchSearchedMovies();
  }, [movieName]);

  const handleMovieClick = movieId => {
    navigate(`/movies/${movieId}`);
  };

  const location = useLocation();
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={filmName}
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
