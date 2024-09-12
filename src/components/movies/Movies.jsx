import React from "react";
import MovieList from "./MovieList";
import "./movie.css";
function Movies({genMovies}) {
  return (
    <div className="movies flex items-center justify-between">
      <MovieList genMovies={genMovies} />
    

    </div>
  );
}

export default Movies;
