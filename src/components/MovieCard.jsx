function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />

      <h2>{movie.title}</h2>

      <p>
        {movie.year} · {movie.genre}
      </p>
    </div>
  );
}

export default MovieCard;