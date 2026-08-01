import { useState } from "react";
import Line from "../Divider";
import MovieOne from "../movies/MovieOne";
import MovieTwo from "../movies/MovieTwo";
import MovieThree from "../movies/MovieThree";

function MovieList() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (movieName) => {
    if (favorites.includes(movieName)) {
      setFavorites(favorites.filter(fav => fav !== movieName));
    } else {
      setFavorites([...favorites, movieName]);
    }
  };

  return (
    <section className="movie-list">
      <h2>Featured Loveteam Movies</h2>
      <p>Favorites: {favorites.length}</p>
      <Line />
      <MovieOne onToggle={toggleFavorite} />
      <Line />
      <MovieTwo onToggle={toggleFavorite} />
      <Line />
      <MovieThree onToggle={toggleFavorite} />
    </section>
  );
}

export default MovieList;