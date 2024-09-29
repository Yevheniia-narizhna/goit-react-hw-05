import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDE0NDU2YThiYjJjNmQ1M2IwMGFjNmYxZGIzNzFkYSIsIm5iZiI6MTcyNzUzNzU4Mi45NDE4NDgsInN1YiI6IjY2ZjQxMzc3Njg2MjhhMmVjMDBkZWQ3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H1gwKELYP0tKVs4al7-pzVY8e9SK10xAmOT3fjpeWPM",
  },
});

// axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const fetchTrendMovies = async () => {
  try {
    const { data } = await api.get("/trending/movie/day?language=en-US");
    return data.results;
  } catch (error) {
    console.error("Failed to fetch trending movies", error);
    throw error;
  }
};

export const fetchTrendMoviesById = async (movieId) => {
  try {
    const { data } = await api.get(`/movie/${movieId}?language=en-US`);
    return data;
  } catch (error) {
    console.error("Failed to fetch movie details", error);
    throw error;
  }
};

export const fetchInfoActors = async (movieId) => {
  try {
    const { data } = await api.get(`/movie/${movieId}/credits?language=en-US`);
    return data;
  } catch (error) {
    console.error("Failed to fetch cast for movie", error);
    throw error;
  }
};

export const fetchReviews = async (movieId) => {
  try {
    const { data } = await api.get(
      `/movie/${movieId}/reviews?language=en-US&page=1`
    );
    return data.results;
  } catch (error) {
    console.error("Failed to fetch reviews for movie", error);
    throw error;
  }
};

export const searchMovie = async (query) => {
  try {
    const { data } = await api.get(
      `/search/movie?include_adult=false&language=en-US&page=1&query=${query}`
    );
    return data.results;
  } catch (error) {
    console.error("Failed to fetch movies by query", error);
    throw error;
  }
};
