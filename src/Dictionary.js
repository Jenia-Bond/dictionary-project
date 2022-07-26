import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // documentation : https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001758d3249528f446ea71c5830630e3a65";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
        <Results results={results} /> <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
