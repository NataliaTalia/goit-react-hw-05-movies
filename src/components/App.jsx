import { Header, Link, Container } from './App.styled';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { Suspense } from 'react';

const Home = lazy(() => import('./Home/Home'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Movies = lazy(() => import('./Movies/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

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

        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </Container>
    </div>
  );
};
