import React, { useEffect, useState } from "react";import "../movies/MovieCard";
function SearchBtnComp({ icons, inputTxt, backgroundColor, onInput }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    onInput(e.target.value);
  };
  return (
    <div>
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
        <div>
        </div>
      </div>
    </div>
  );
}

export default SearchBtnComp;
