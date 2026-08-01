import { useState } from 'react';
import './MovieCard.css';

function MovieCard({ title, actors, year, onRate }) {
  const [rating, setRating] = useState(0);
  const [onWatchlist, setOnWatchlist] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleRate = (stars) => {
    setRating(stars);
    onRate && onRate(title, stars);
  };

  return (
    <div className="movie-card movie-card-container">
      <h3>{title}</h3>
      <p>{actors}</p>
      <span className="year">({year})</span>
      
      <div className="movie-card-actions">
        <div className="rating-display">
          {[1, 2, 3, 4, 5].map(star => (
            <span
              key={star}
              className={`star ${star <= rating ? 'filled' : ''}`}
              onClick={() => handleRate(star)}
            >
              ★
            </span>
          ))}
        </div>
        
        <button
          className="favorite-btn"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>

      <button
        className={`watchlist-btn ${onWatchlist ? 'on-watchlist' : ''}`}
        onClick={() => setOnWatchlist(!onWatchlist)}
      >
        {onWatchlist ? '✓ On Watchlist' : '+ Add to Watchlist'}
      </button>
    </div>
  );
}

export default MovieCard;