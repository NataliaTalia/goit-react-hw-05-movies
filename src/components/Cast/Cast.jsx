import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState();

  useEffect(() => {
    const fetchCredits = async () => {
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
          `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
          options
        );
        const data = await response.json();
        const cast = data.cast;
        setCredits(cast);
      } catch (error) {
        console.error('Couldnt fetch the credits', error.message);
      }
    };
    fetchCredits();
  }, [movieId]);

  return (
    <ul>
      {credits && credits.length > 0 ? (
        credits.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : 'https://placehold.co/200x300/blue/yellow?text=No+Image'
              }
              alt={name}
            />
            <p>Name: {name}</p>
            <p>Character: {character}</p>
          </li>
        ))
      ) : (
        <p>The cast list is not available for this movie</p>
      )}
    </ul>
  );
};

export default Cast;
