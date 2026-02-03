import React from "react";

interface MovieRatingProps {
  rating: number;
  onRate: (value: number) => void;
}
export default function MovieRating({ rating, onRate }: MovieRatingProps) {
  const [hover, setHover] = React.useState(0);
  const starRating = [1, 2, 3, 4, 5];

  return (
    <div className="stars">
      {starRating.map((star) => (
        <span
          key={star}
          onClick={() => onRate(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
        >
          {star <= (hover || rating) ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}
