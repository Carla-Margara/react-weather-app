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
      <div className="Search">
        <div class="search-city">
          <div class="container-fluid">
            <form class="d-flex" id="search-form" onSubmit={handleSearch}>
              <div className="row">
                <div className="col-sm-9">
                  <input
                    type="search"
                    onChange={changeCity}
                    placeholder="Enter a city..."
                  />
                </div>
                <div className="col-sm-3">
                  <input
                    className="btn btn-light"
                    type="Submit"
                    defaultValue="Search"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <br />
        <div className="city-name mb-5">
          <h1>{city}</h1>
        </div>
        <div className="weather-today">
          <div className="row">
            {" "}
            <div className="col" id="weather-icon">
              <img src={icon} alt="weather icon" />
              {""}
            </div>
            <div className="col temp">{temperature} </div>
            <div className="col degrees">
              <span className="Celcius">℃</span> |{" "}
              <span className="Fahrenheit">℉</span>
            </div>{" "}
            <div className="col" id="description">
              {description}
            </div>{" "}
            <div className="col" id="stats">
              {" "}
              <ul>
                {" "}
                <li>
                  <strong>Humidity:</strong> {humidity}%
                </li>
                <li>
                  <strong>Wind:</strong>
                  {wind}km/h{" "}
                </li>
              </ul>
            </div>
            <br />
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
