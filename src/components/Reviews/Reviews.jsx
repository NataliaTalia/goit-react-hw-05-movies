import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
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
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
          options
        );

        const data = await response.json();

        const savedReviews = data.results;

        console.log('here are saved reviews from the fetch', savedReviews);

        setReviews(savedReviews);
      } catch (error) {
        console.error('Error while fetching reviews', error);
      }
    };
    fetchReviews();
  }, [movieId]);

  function formattedDate(date) {
    const formattedDate = new Date(date).toLocaleString();

    return formattedDate;
  }

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(({ id, author_details, content, created_at }) => (
          <li key={id}>
            <h5>Username: {author_details.username}</h5>
            <p>{content}</p>
            <p>{formattedDate(created_at)}</p>
          </li>
        ))
      ) : (
        <p>We don't have reviews for this movie</p>
      )}
    </ul>
  );
};

export default Reviews;
