import { Header, Link, Container } from './App.styled';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home/Home';
import { useEffect, useState } from 'react';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { Movies } from './Movies/Movies';
import { useNavigate } from 'react-router-dom';

export const App = () => {
  const [selectedMovie, setSelectedMovie] = useState();
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [movieName, setMovieName] = useState('');
  const [selectedSearchedMovie, setSelectedSearchedMovie] = useState();

  useEffect(() => {
    const trendingOptions = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzhiMWJkMjk1YWUyZGI4YWYzMjhjNWE5ZDQzMGE3NyIsInN1YiI6IjY0N2IxYmE1ZTMyM2YzMDEwNjE1MDc1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vxLHfnX6-9KADyJ-ltI_WHyCFtNAuDJ1qUjAWK6Nndc',
      },
    };

    fetch(
      `https://api.themoviedb.org/3/trending/all/week?language=en-US`,
      trendingOptions
    )
      .then(response => response.json())
      .then(data => {
        setTrendingMovies(data.results);
      })
      .catch(error => console.error(error.message));

    if (movieName !== '') {
      setSearchedMovies(null);
      const searchOptions = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzhiMWJkMjk1YWUyZGI4YWYzMjhjNWE5ZDQzMGE3NyIsInN1YiI6IjY0N2IxYmE1ZTMyM2YzMDEwNjE1MDc1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vxLHfnX6-9KADyJ-ltI_WHyCFtNAuDJ1qUjAWK6Nndc',
        },
      };

      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movieName}&language=en-US`,
        searchOptions
      )
        .then(response => response.json())
        .then(data => {
          setSearchedMovies(data.results);
        })
        .catch(error => console.error(error.message));
    } else {
      setSearchedMovies(null);
    }
  }, [movieName]);

  const handleMovieClick = movie => {
    setSelectedMovie(movie);
  };

  const handleSearchedMovieClick = searchedMovie => {
    setSelectedSearchedMovie(searchedMovie);
  };

  const navigate = useNavigate();

  return (
    <div>
      <Container>
        <Header>
          <nav>
            <Link to="/" end>
              Home
            </Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </Header>

        <Routes>
          <Route
            path="/"
            element={
              <Home movies={trendingMovies} onClickMovie={handleMovieClick} />
            }
          />
          <Route
            path="/movies"
            element={
              <Movies
                searchedMovies={searchedMovies}
                onClickMovie={handleSearchedMovieClick}
                onSubmit={setMovieName}
              />
            }
          />
          <Route
            path="/movies/:id"
            element={
              <MovieDetails
                movie={selectedMovie}
                searchedMovie={selectedSearchedMovie}
              />
            }
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route
            path="*"
            element={
              <>
                <h1>Page not found</h1>
                <button type="button" onClick={() => navigate(-1)}>
                  Go back
                </button>
              </>
            }
          ></Route>
        </Routes>
      </Container>
    </div>
  );
};
