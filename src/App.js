import "./App.css";
import React from "react";
import WeatherSearch from "./WeatherSearch";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="app-wrapper">
          <header className="App-header">
            <WeatherSearch defaultCity="Arecibo" />
            <Footer />
          </header>
        </div>
      </div>
    </div>
  );
}

export default App;
