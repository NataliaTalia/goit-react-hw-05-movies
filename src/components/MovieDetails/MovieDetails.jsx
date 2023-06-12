import { useState, useEffect, useRef } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'components/APIs';
import { useParams, useLocation } from 'react-router-dom';
import { Suspense } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();

  const backLinkLocationRef = useRef(
    location.state?.from || location.pathname === '/' ? '/movies' : '/'
  );

  const [genreIds, setGenreIds] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);

        setMovieDetails(data);
        if (data && data.genres) {
          setGenreIds(data.genres);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  const { poster_path, title, overview, vote_average } = movieDetails || {};

  const placeholder = 'https://placehold.co/200x300/blue/yellow?text=No+Image';

  const movieImage = poster_path
    ? `https://image.tmdb.org/t/p/w200/${poster_path}`
    : placeholder;

  //
  const genreNames = genreIds ? genreIds.map(genreId => genreId.name) : [];

  function formatAsPercentage(num) {
    return 100 - (100 - num * 10) + '%';
  }

  return (
    <main>
      <button type="button">
        <Link to={backLinkLocationRef.current}> Go back</Link>
      </button>
      <img src={movieImage} alt={title} />

      <h2>{title}</h2>
      <p>User Score: {formatAsPercentage(vote_average)}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genreNames.length > 0 ? genreNames.join(', ') : 'No genres found'}</p>
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
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
