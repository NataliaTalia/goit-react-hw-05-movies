import React from 'react';
import { Trending } from './Home.styled.js';

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
