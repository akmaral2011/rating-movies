import { useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import moviesData from "./data/movies.json";

export default function App() {
  const [movies, setMovies] = useState(moviesData);

  const updateMovie = (id, updates) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, ...updates } : movie
      )
    );
  };

  return (
    <div className="App">
      <div className="header">
        <h1>🎬 Система Голосования</h1>
        <p>Оцените фильмы от 1 до 5 звёзд</p>
      </div>

      <div className="items-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onUpdate={updateMovie} />
        ))}
      </div>
    </div>
  );
}
