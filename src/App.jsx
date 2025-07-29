import React, { useState, useEffect } from "react";
import './components/reset.css'
import './App.css'
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";


const App = () => {

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [weatherFiveDays, setWeatherFiveDays] = useState([]);
    
    const fetchWeather = async (city) => {
        try {
          const getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=ab955f21662b12a83937b65c3c86c310`)
          const data = await getData.json();
          setWeather({
            temperature: Math.floor(data.main.temp),
            feelsLike: Math.floor(data.main.feels_like),
            humidity: data.main.humidity,
            precipitation: data.weather[0].main,
            pressure: data.main.pressure,
            windSpeed: data.wind.speed,
            description: data.weather[0].description,
            location: data.name,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,

            lat: data.coord.lat,
            lon: data.coord.lon,
          });
          setLat(data.coord.lat)
        setLon(data.coord.lon)
          // console.log(data);
          
        } catch (err) {
          console.error(err);
        }
      };

      
      const fetchWeatherFiveDays = async (lat, lon) => {
        try {
          const getDataFiveDays = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=ru&cnt=7&appid=ab955f21662b12a83937b65c3c86c310`)
          const datas = await getDataFiveDays.json();
          setWeatherFiveDays(datas.list);
          // console.log(datas.list);
          // console.log(datas.list[2].main.temp);
          
        } catch (err) {
          console.error(err);
        }
      };

      useEffect(() => {
        city ? fetchWeather(city)
         : fetchWeather('bogotol')
      }, [city])


      useEffect(() => {
        lat ? fetchWeatherFiveDays(lat, lon):null
      }, [lat])



      function newSitys (newSity) {
        newSity ? fetchWeather(newSity)
        : fetchWeather('bogotol')
      }

  return (
    <div className="wrapper">
      <Header newSitys = {newSitys}/>
      <Main weather={weather} weatherFiveDays = {weatherFiveDays}/>
    </div>
  );
};
export default App;