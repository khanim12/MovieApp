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
    <div className="w-screen">
      <div className="movi max-[650px]:flex max-[768px]:gap-x-96 grid md:gap-x-64 max-[650px]:items-center grid-cols-3 gap-x-10 lg:gap-x-32 ">

        {types.map((t) => {
          return (
            <div
              className="flex max-[650px]:hidden mov-head items-center text-white md:gap-x-16 lg:gap-x-16 "
              key={t.id}
            >
              <h2 className="capitalize max-[650px]:text-base text-2xl font-bold">
                {t.type}
              </h2>
              <button className="text-sm movie-btn ">Show More</button>
            </div>
          );
        })}
      
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
