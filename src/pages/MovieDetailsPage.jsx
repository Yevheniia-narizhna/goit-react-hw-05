import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchTrendMoviesById } from "../components/Api/Api";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const location = useLocation();
  const stateRef = useRef(location.state);
  const [error, setError] = useState(null);
  const goBackLink = stateRef.current ?? "/";

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchTrendMoviesById(movieId);
        setMovie(data);
      } catch (error) {
        setError("Failed to fetch movie details");
      }
    };
    getData();
  }, [movieId]);

  if (!movie) return <h2>Loading...</h2>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Link to={goBackLink}>Go back</Link>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
          alt={movie.title}
        />
        <ul>
          <li>
            <h1>{movie.title}</h1>
          </li>
          <li>User score: {Math.round((movie.vote_average / 10) * 100)} %</li>
          <li>Overview: {movie.overview}</li>
          <li>
            <h2>Genres:</h2>
            {movie.genres.map((genre) => genre.name).join(", ")}
          </li>
        </ul>
        <hr />
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>

          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet context={{ movieId }} />
        </Suspense>
      </div>
    </div>
  );
}
