import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const MovieDetails = ({ movie, searchedMovie }) => {
  const [genres, setGenre] = useState();

  console.log('Trending movie in movie details component component', movie);

  const { poster_path, title, overview, genre_ids, vote_average } =
    searchedMovie ? searchedMovie : movie;

  const movieImage = `https://image.tmdb.org/t/p/w200/${poster_path}`;

  const fetchGenres = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzhiMWJkMjk1YWUyZGI4YWYzMjhjNWE5ZDQzMGE3NyIsInN1YiI6IjY0N2IxYmE1ZTMyM2YzMDEwNjE1MDc1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vxLHfnX6-9KADyJ-ltI_WHyCFtNAuDJ1qUjAWK6Nndc',
      },
    };
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/genre/movie/list?language=en',
        options
      );

      const data = await response.json();
      console.log('returned genres', data);

      const genresData = {};

      data.genres.forEach(genre => {
        genresData[genre.id] = genre.name;
      });

      setGenre(genresData);
    } catch (error) {
      console.error('Error with fetching genres', error);
    }
  };
  useEffect(() => {
    fetchGenres();
  }, [movie, searchedMovie]);

  useEffect(() => {
    fetchGenres();
  }, [searchedMovie]);

  const genreNames = genre_ids.map(genreId => {
    if (genres && genres[genreId]) {
      return genres[genreId];
    }
    return null;
  });

  function formatAsPercentage(num) {
    return 100 - (100 - num * 10) + '%';
  }
  // const goBackToPage = searchedMovie ? '/movies' : '/';
  const navigate = useNavigate();
  console.log('Genres Name', genreNames);
  return (
    <main>
      <button type="button" onClick={() => navigate(-1)}>
        Go back
      </button>
      <img src={movieImage} alt={title} />

      <h2>{title}</h2>
      <p>User Score: {formatAsPercentage(vote_average)}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genreNames.join(', ')}</p>
      <hr />
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};
