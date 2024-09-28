export default function MovieList({ movies }) {
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
