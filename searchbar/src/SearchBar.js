import React, { useState } from "react";
import "./SearchBar.css";


function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const {wordEntered} = this.state;
    console.log(this.state);
    // send to server with e.g. `window.fetch`
  }

  return (
    <div className="search">
      <div className="searchInputs">

      <form onSubmit={e => { onFormSubmit(e) }}>
      <input
        type="text"
        placeholder={placeholder}
        value={wordEntered}
        onChange={handleFilter}
      />
        <button type="submit">Submit</button>
      </form>


      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
