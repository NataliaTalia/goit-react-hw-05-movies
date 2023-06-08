import { Trending } from '../Home/Home.styled';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Movies = ({ onSubmit, searchedMovies, onClickMovie }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filmName = searchParams.get('name') || '';

  const handleInput = e => {
    setSearchParams({ name: e.currentTarget.value.toLowerCase() });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (filmName.trim() === '') {
      alert('PLease write the name of the movie');
      return;
    }
    onSubmit(filmName);
  };
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

      {searchedMovies && (
        <div>
          <h1>Here`s what we`ve found:</h1>

          {searchedMovies.map(searchedMovie => (
            <Trending
              key={searchedMovie.id}
              to={`/movies/${searchedMovie.id}`}
              onClick={() => onClickMovie(searchedMovie)}
            >
              {searchedMovie.title}
            </Trending>
          ))}
        </div>
      )}
    </main>
  );
};

Movies.propTypes = {
  searchedMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ),
  onClickMovie: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
