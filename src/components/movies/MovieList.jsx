import { useState } from "react";
import Line from "../Divider";
import MovieCard from "./MovieCard";

function MovieList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [watchCount, setWatchCount] = useState(0);

  const movies = [
    { id: 1, title: "Never Not Love You", actors: "James Reid and Nadine Lustre", year: 2017 },
    { id: 2, title: "Un/Happy for You", actors: "Joshua Garcia and Julia Barretto", year: 2018 },
    { id: 3, title: "Hello, Love, Again", actors: "Kathryn Bernardo and Alden Richards", year: 2024 }
  ];

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRate = (title, stars) => {
    if (stars === 5) setWatchCount(watchCount + 1);
  };

  return (
    <section className="movie-list">
      <h2>Featured Loveteam Movies</h2>
      
      <input
        type="text"
        className="search-box"
        placeholder="🔍 Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="stats">
        {filteredMovies.length} movie{filteredMovies.length !== 1 ? 's' : ''} found
      </div>

      {filteredMovies.map((movie, index) => (
        <div key={movie.id}>
          <MovieCard
            title={movie.title}
            actors={movie.actors}
            year={movie.year}
            onRate={handleRate}
          />
          {index < filteredMovies.length - 1 && <Line />}
        </div>
      ))}
    </section>
  );
}

export default MovieList;