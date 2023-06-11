export const getTrendingMovies = async () => {
  const trendingOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzhiMWJkMjk1YWUyZGI4YWYzMjhjNWE5ZDQzMGE3NyIsInN1YiI6IjY0N2IxYmE1ZTMyM2YzMDEwNjE1MDc1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vxLHfnX6-9KADyJ-ltI_WHyCFtNAuDJ1qUjAWK6Nndc',
    },
  };

  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/all/week?language=en-US',
      trendingOptions
    );
    if (!response.ok) {
      throw new Error('Failed to fetch trending movies');
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

export const getSearchedMovies = async movieName => {
  const searchOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzhiMWJkMjk1YWUyZGI4YWYzMjhjNWE5ZDQzMGE3NyIsInN1YiI6IjY0N2IxYmE1ZTMyM2YzMDEwNjE1MDc1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vxLHfnX6-9KADyJ-ltI_WHyCFtNAuDJ1qUjAWK6Nndc',
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&language=en-US`,
      searchOptions
    );
    if (!response.ok) {
      throw new Error('Failed to fetch trending movies');
    }

    const data = await response.json();
    return data;
  } catch (error) {}
};

export const getMovieDetails = async movieId => {
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
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    );
    if (!response.ok) {
      throw new Error('Failed to fetch trending movies');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};
