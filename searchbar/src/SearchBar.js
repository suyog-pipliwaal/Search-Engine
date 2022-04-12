import React, { useState } from "react";
import "./SearchBar.css";


function SearchBar({ placeholder}) {
  const [filteredData, setFilteredData] = useState([]);
  const [query, setquery] = useState("");
  const [docs, setdocs] = useState("");

  const handletextChange = (event) => {
    const searchWord = event.target.value;
    setquery(searchWord);
  };

  const clearInput = () => {
    setquery("");
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: query})
    };

    fetch('http://127.0.0.1:5000/query', requestOptions)
        .then(response => response.json())
        .then(data => setdocs(data));
    console.log(docs);
  }

  return (
    <div className="search">
      <div className="searchInputs">

      <form onSubmit={e => { onFormSubmit(e) }}>
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handletextChange}
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
