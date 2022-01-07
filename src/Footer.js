import React from "react";
import "./Footer.css";
import Loader from "react-js-loader";

export default function Footer() {
  return (
    <div className="footer mt-5">
      <p id="repository-link">
        <small className="text-muted">
          Hosted with
          <a href="https://www.netlify.com"> Netlify</a>{" "}
        </small>
        |
        <small className="text-muted">
          <a href="https://github.com/Carla-Margara/My-Weather-App">
            Open-Source Code {""}
          </a>
          by Carla Margara
        </small>
        <div className={"item"}>
          <Loader
            type="heart"
            bgColor={"#AD075D"}
            color={"#AD075D"}
            size={20}
          />
        </div>{" "}
      </p>
    </div>
  );
}
