import { useState } from "react";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import sampleMovies from "../data/sampleMovies";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = sampleMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />

      <main>
        <section id="discover">
          <h2>Discover stories beyond the mainstream.</h2>

          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
          />

          <div className="movie-grid">
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))
            ) : (
              <p>No films found.</p>
            )}
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