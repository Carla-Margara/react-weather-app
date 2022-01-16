import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div class="row row-cols-1 row-cols-md-2 g-4 mt-2">
        <div class="col">
          <div class="card ">
            <div class="card-body">
              <h1 className="city mb-4 me-2">{props.data.city}</h1>

              <div className="temp">
                <span className="main-temp me-2">
                  {Math.round(props.data.temperature)}
                </span>
                <span className="degrees">℃ | ℉</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card ms-5 mb-2">
            <div class="card-body">
              <div className="description text-capitalize mb-2 ms-4">
                {props.data.description}
              </div>
              <div className="weather-icon mb-2 ms-5">
                <img src={props.data.iconUrl} alt="" />
              </div>
            </div>
            <div className="stats">
              <ul>
                <li className="now text-muted ">
                  <FormattedDate date={props.data.date} />
                </li>
                <li>
                  <strong>Humidity:</strong> {props.data.humidity}%
                </li>
                <li>
                  <strong>Wind:</strong>
                  {Math.round(props.data.wind)}km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
