import axios from "axios";
import React, { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import "../movies/MovieCard";
import Movies from "../movies/Movies"
import MovieCard from "../movies/MovieCard";
function SearchBtnComp({ icons, inputTxt, backgroundColor,onInput }) {
  // const [filter, setFilter] = useState([]);
  // const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value)
    onInput(e.target.value)
    
  }
  return (
    <div >
    <div className=""> 
      
        <div className="search-container">
          {icons}
          <input
            value={search}
            className="search-input"
            type="search"
            onChange={handleChange}
            placeholder={inputTxt}
            
          />
          <button
            style={{ background: backgroundColor }}
            className="search-btn" 
          >
            Search
          </button>
        </div>
        <div >
          {/* {
            datas ? ({ datas.map((d) => (
                      <MovieCard key={d.imdbID}
                        title={d.Title}
                        img={d.Poster}
                      desc={d.Type}
                      />
                  ))
               }
            )
          : (<Movies/>)
          } */}
          {/* {datas?.length > 0 ? (
            datas.map((d) => (
                          <MovieCard key={d.imdbID}
            title={d.Title}
            img={d.Poster}
          desc={d.Type}/>

            ))
          ) : (<p></p>)} 
         */}
        </div>
      </div>
      {/* <Autocomplete
      disablePortal
      options={filter}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    /> */}
    </div>
  );
}

export default SearchBtnComp;
