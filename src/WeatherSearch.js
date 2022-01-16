import React, { useState } from "react";
import axios from "axios";
import "./WeatherSearch.css";
import WeatherInfo from "./WeatherInfo";

export default function WeatherSearch(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div class="container">
        <div class="card">
          <div class="card-header">
            <div class="search-city">
              <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                  <form class="d-flex" id="search-form">
                    <input
                      className="form-control me-2"
                      type="search"
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
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    const apiKey = "d6648610e3c1c3aed8194b8aaf46b519";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
