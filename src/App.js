import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="peace" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Eugenia Bondarenko and is{" "}
            <a href="https://github.com/Jenia-Bond/dictionary-project">
              open-sourced on GitHub
            </a>{" "}
            and hosted on Netlify
          </small>
        </footer>
      </div>
    </div>
  );
}
