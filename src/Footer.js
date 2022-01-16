import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer mt-3">
      <p id="repository-link">
        <small className="text-muted">
          Hosted with
          <a href="https://www.netlify.com"> Netlify</a>{" "}
        </small>
        |
        <small className="text-muted">
          <a href="https://github.com/Carla-Margara/react-weather-app">
            Open-Source Code {""}
          </a>
          by Carla Margara
        </small>
      </p>
    </div>
  );
}
