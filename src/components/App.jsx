import { Header, Link, Container } from './App.styled';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home/Home';

import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { Movies } from './Movies/Movies';
import { useNavigate } from 'react-router-dom';

export const App = () => {
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
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
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
