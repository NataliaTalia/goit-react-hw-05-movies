import React from 'react';
import { Trending } from './Home.styled.js';
import PropTypes from 'prop-types';

export const Home = ({ movies, onClickMovie }) => {
  return (
    <main>
      <h1>Trending today</h1>

      {movies.map(movie => (
        <Trending
          key={movie.id}
          to={`/movies/${movie.id}`}
          onClick={() => onClickMovie(movie)}
        >
          {movie.title}
        </Trending>
      ))}
    </main>
  );
};

Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ).isRequired,
  onClickMovie: PropTypes.func.isRequired,
};
