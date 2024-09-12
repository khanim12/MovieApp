import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
const types = [
  {
    id: 1,
    type: "series",
  },
  {
    id: 2,
    type: "movie",
  },
  {
    id: 3,
    type: "documentaries",
  },
];
console.log(types);
function MovieList({ genMovies }) {
  console.log(genMovies);
  return (
    <div>
      <div className="grid grid-cols-3 gap-16 text-white items-center">
        {types.map((t) => {
          return (
            <div className="flex justify-between " key={t.id}>
              <h2 className="capitalize text-2xl font-bold">{t.type}</h2>
              <button className="text-sm movie-btn">Show More</button>
            </div>
          );
        })}
      </div>
      <div className="grid grid-rows-4 grid-cols-3 gap-x-10		">
        {genMovies.map((m) => (
          <MovieCard
            key={m.imdbID}
            title={m.Title}
            desc={m.Type}
            img={m.Poster}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
