import React, { useState } from "react";
import axios from "axios";
import Loader from "react-js-loader";
import "./WeatherSearch.css";

export default function WeatherSearch() {
  const [WeatherSearch, SetWeatherSearch] = useState(false);
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [city, setCity] = useState(null);
  const [icon, setIcon] = useState(null);

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "d6648610e3c1c3aed8194b8aaf46b519";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(getForecast);
  }

  function getForecast(response) {
    SetWeatherSearch(true);
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  if (WeatherSearch) {
    return (
      <div class="container">
        <div class="card">
          <div class="card-header">
            <div class="search-city">
              <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                  <form class="d-flex" id="search-form" onSubmit={handleSearch}>
                    <input
                      className="form-control me-2"
                      type="search"
                      onChange={changeCity}
                      placeholder="Enter a city..."
                      aria-label="Search"
                      id="city-text-input"
                      autocomplete="off"
                    />
                    <button
                      className="btn btn-outline-info me-2"
                      type="Submit"
                      defaultValue="Search"
                      id="search-city"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </nav>
            </div>
          </div>
          <br />
          <div className="container px-4 weather-today mb-2">
            <div className="row">
              <div className="col">
                <div className="city-name mt-4">
                  <br />
                  <h1>{city}</h1>
                </div>
              </div>
              <div className="col">
                <div className="temp">
                  <span className="main-temp">{temperature}</span>
                  <span className="degrees">℃ | ℉</span>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="container px-4 weather-today">
            <div className="row">
              <div className="col">
                <div className="weather-icon">
                  <img src={icon} alt="weather icon" />
                </div>
                <div className="description">{description}</div>

                <br />
              </div>

              <div className="col">
                <div className="stats">
                  <ul>
                    <li className="weekday text-muted">Thursday</li>
                    <li className="time fw-bold">19:33</li>
                  </ul>
                  <ul>
                    <li>
                      <strong>Humidity:</strong> {humidity}%
                    </li>
                    <li>
                      <strong>Wind:</strong>
                      {wind}km/h
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="bublle-scale mb-4">
          {" "}
          <span className={"item"}>
            <Loader
              type="bubble-scale"
              bgColor={"#AD075D"}
              color={"#AD075D"}
              size={80}
            />
          </span>
          <span>Where are you now?</span>
        </div>{" "}
        <form onSubmit={handleSearch}>
          <input
            type="Search"
            placeholder="Enter a city..."
            onChange={changeCity}
          />
          <input type="Submit" defaultValue="Search" />
        </form>
        <br />
      </div>
    );
  }
}
