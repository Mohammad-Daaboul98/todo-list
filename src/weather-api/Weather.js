import React, { useState, useEffect } from "react";

const Weather = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async position => {
      const { latitude, longitude } = position.coords;
      const api_key = "40ae4d185a1fdbd1549ec91df3560f3c";
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`;

      const response = await fetch(url);
      const data = await response.json();

      setWeather(data);
    });
  }, []);

  return (
    <div>
      {weather.main ? (
        <div>
          <p>Temperature: {weather.main.temp}</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default Weather;
