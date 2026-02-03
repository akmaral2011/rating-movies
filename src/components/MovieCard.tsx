import React, { useState, useEffect } from "react";
import MovieRating from "./MovieRating";
import { Movie } from "../types/movie";

interface MovieCardProps {
  movie: Movie;
  onUpdate: (id: number, updates: Partial<Movie>) => void;
}

export default function MovieCard({ movie, onUpdate }: MovieCardProps) {
  const [comment, setComment] = useState(movie.comment ?? "");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setComment(movie.comment ?? "");
  }, [movie.comment]);

  const handleRatingChange = (newRating: number) => {
    onUpdate(movie.id, { rating: newRating });
  };

  const handleSubmit = () => {
    onUpdate(movie.id, { comment });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <div className="item-card">
      <div className="item-image">
        <img
          src={movie.image}
          alt={movie.title}
          style={{ width: "100%", height: "100%", borderRadius: "12px" }}
        />
      </div>
      <div className="item-title">{movie.title}</div>
      <div className="item-description">{movie.description}</div>

      <div className="rating-section">
        <div className="current-rating">
          <div className="rating-number">
            {movie.rating ? movie.rating.toFixed(1) : "-"}
          </div>
          <div className="rating-label">Ваша оценка</div>
        </div>
        <MovieRating rating={movie.rating ?? 0} onRate={handleRatingChange} />

        <div className="comment-section">
          <textarea
            className="comment-input"
            placeholder="Оставьте отзыв"
            maxLength={200}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="symbol-count">{comment.length}/200</div>
        </div>

        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={!movie.rating && !comment.trim()}
        >
          {movie.rating ? "Обновить оценку" : "Отправить оценку"}
        </button>

        {showSuccess && (
          <div className="success-message show"> ✔ Сохранено!</div>
        )}
      </div>
    </div>
  );
}
