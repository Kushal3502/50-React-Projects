import React, { useEffect, useState } from "react";
import Search from "./Search";
import "./weather.css";

function Weather() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchWeatherData(city) {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=18a3945101ee3ad747040821ed703b35`
      );
      const result = await response.json();
      console.log(result);
      if (response.ok) {
        setWeatherData(result);
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  }

  async function handleClick() {
    if (city) {
      fetchWeatherData(city);
    }
  }

  function getDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    setCity("Kolkata");
    fetchWeatherData("Kolkata");
  }, []);

  return (
    <div className="weather-container">
      <h1>Weather App</h1>
      <Search city={city} setCity={setCity} handleClick={handleClick} />
      {loading ? (
        <div className="loading">Getting data...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : weatherData ? (
        <div className="weather-info">
          <div className="city-info">
            <h1>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h1>
          </div>
          <div className="date">
            <span>{getDate()}</span>
          </div>
          <div className="temp-info">
            <div className="temp">
              Max Temp: {Math.round(weatherData?.main?.temp - 273.15)}°C
            </div>
            <div className="temp-feel">
              Feels like : {Math.round(weatherData?.main?.feels_like - 273.15)}
              °C
            </div>
          </div>
          <div className="description">
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : ""}
          </div>
          <div className="wind-humadity">
            <p className="wind">Wind Speed : {weatherData.wind.speed} km/h</p>
            <p className="humidity">Humidity : {weatherData.main.humidity} %</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Weather;
