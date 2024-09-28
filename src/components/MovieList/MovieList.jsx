import { Link } from "react-router-dom";
import s from "./MovieList.module.css";
export default function MovieList({ movies }) {
  return (
    <div>
      <ul className={s.list}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={movie.id}>
              <p className={s.movie}>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
