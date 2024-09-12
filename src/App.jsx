import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Center from "./components/center/Center";
import Movies from "./components/movies/Movies";
import "./App.css";
import axios from "axios";
import MovieCard from "./components/movies/MovieCard";

function App() {
  const [genMovies, setGenMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const fetchDat = async () => {
      let url = `https://www.omdbapi.com/?i=tt3896198&apikey=9d9c6275`;
      if (searchTerm) {
        url += `&s=${searchTerm}&type=movie`;
      } else {
        url += "&s=toy&type=movie";
      }

      try {
        const res = await axios(url);
        if (res.data.Response === "True") {
          setGenMovies(res.data.Search.slice(0, 9));
        } else {
          setGenMovies([]);
        }

        console.log(res.data.Search);
      } catch (err) {
        console.log(err);
        setGenMovies([]);
      }
    };

    fetchDat();
  }, [searchTerm]);
  const handleInput = (value) => {
    setSearchTerm(value);
  };
  console.log(genMovies);
  return (
    <div className="p-8  font-sans">
      <div className="">
        <Header onInput={handleInput} />
        <Center />
        {/* {genMovies.length > 0 &&  />} */}
        {searchTerm ? (
          <div className="grid grid-cols-3 gap-16">
            {genMovies.map((m) => (
              <MovieCard key={m.key} img={m.Poster} title={m.Title} />
            ))}
          </div>
        ) : (
          <Movies genMovies={genMovies} />
        )}
      </div>
    </div>
  );
}

export default App;
