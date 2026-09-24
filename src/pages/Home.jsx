import sampleMovies from "../data/sampleMovies";
import MovieCard from "../components/MovieCard";

function Home() {
  return (
    <main>
      <h1>Stage & Screen</h1>

      <p>Discover stories beyond the mainstream.</p>

      <div className="movie-grid">
        {sampleMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}

export default Home;