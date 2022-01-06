import React from "react";
import axios from "axios";
import Loader from "react-js-loader";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}℃`
    );
  }

  let apiKey = "d6648610e3c1c3aed8194b8aaf46b519";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="weather">
      <h3>Hello from Weather</h3>
      <div className={"item"}>
        <Loader type="heart" bgColor={"#FFFFFF"} color={"#FFFFFF"} size={100} />
      </div>
    </div>
  );
}
