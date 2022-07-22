import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // documentation : https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <div className="Dictionary">
        <header>
          <h1 className="Dictionary-header">Dictionary</h1>
          <p className="Dictionary-p">Let words find a meaning...</p>
        </header>
        <form className="mt-5" onSubmit={search}>
          <input type="search" onChange={handleKeywordChange} />
        </form>
      </div>
      <div>
        <Results results={results} />{" "}
      </div>
    </div>
  );
}
