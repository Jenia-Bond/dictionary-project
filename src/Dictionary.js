import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("peace");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function search() {
    // documentation : https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div>
        <div className="Dictionary">
          <header>
            <h1 className="Dictionary-header">Dictionary</h1>
            <p className="Dictionary-p">Let words find a meaning...</p>
          </header>
          <form className="mt-5" onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} />
            <div className="hint">
              suggested words: peace, love, sunset, wine, yoga...
            </div>
          </form>
        </div>
        <div>
          <Results results={results} />{" "}
        </div>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
