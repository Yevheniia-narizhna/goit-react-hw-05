import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDE0NDU2YThiYjJjNmQ1M2IwMGFjNmYxZGIzNzFkYSIsIm5iZiI6MTcyNzUzNzU4Mi45NDE4NDgsInN1YiI6IjY2ZjQxMzc3Njg2MjhhMmVjMDBkZWQ3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H1gwKELYP0tKVs4al7-pzVY8e9SK10xAmOT3fjpeWPM",
  },
});

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const fetchTrendMovies = async () => {
  try {
    const { data } = await api.get("/trending/movie/day?language=en-US");
    return data.results;
  } catch (error) {
    console.error("Failed to fetch trending movies", error);
    throw error;
  }
};
