import React from 'react';
import { Trending } from './Home.styled.js';
import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'components/APIs.js';

const Home = () => {
  const navigate = useNavigate();

  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const movies = await getTrendingMovies();
        console.log('Trending movies in HOME', movies);
        setTrendingMovies(movies);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchTrendingMovies();
  }, []);

  const handleMovieClick = movieId => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <main>
      <h1>Trending today</h1>

      {trendingMovies.map(movie => (
        <Trending
          key={movie.id}
          to={`/movies/${movie.id}`}
          onClick={() => handleMovieClick(movie.id)}
        >
          {movie.title}
        </Trending>
      ))}
    </main>
  );
};

export default Home;
