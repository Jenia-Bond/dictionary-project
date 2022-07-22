import React from "react";
import Meaning from "./Meaning.js";
import "./Results.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <div className="searched-word">
          <h2>{props.results.word}</h2>
          <h3>{props.results.phonetic}</h3>
        </div>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              {" "}
              <Meaning meaning={meaning} />{" "}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
