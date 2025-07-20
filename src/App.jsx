import React, { useState, useEffect } from "react";
import './components/reset.css'
import './App.css'
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";


const App = () => {

    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    const handleNameChange = (name) => {
      setName(name)
    }
  
    const fetchWeather = async (city) => {
        try {
          const getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ab955f21662b12a83937b65c3c86c310`)
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
          });
          // console.log(weather);
        } catch (err) {
          console.error(err);
        }
      };
  
    useEffect(() => {
        fetchWeather('bogotol')
    })


  return (
    <div className="wrapper">
      <Header onChange = {handleNameChange}/>
      <Main weather={weather}/>
    </div>
  );
};
export default App;