import Header from "../components/Header";
import sampleMovies from "../data/sampleMovies";
import MovieCard from "../components/MovieCard";

function Home() {
  return (
    <>
      <Header />

      <main>
        <section id="discover">
          <h2>Discover stories beyond the mainstream.</h2>

          <div className="movie-grid">
            {sampleMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>

        <section id="about">
          <h2>About</h2>
          <p>
            Stage & Screen is a film discovery project focused on helping
            audiences explore distinctive stories and creative work.
          </p>
        </section>
      </main>
    </>
  );
}

export default Home;