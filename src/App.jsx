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

    const [icons, setIcons] = useState(`https://openweathermap.org/img/wn/`);
    
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
        } catch (err) {
          console.error(err);
        }
      };

      
      const fetchWeatherFiveDays = async (lat, lon) => {
        try {
          const getDataFiveDays = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=ru&cnt=7&appid=ab955f21662b12a83937b65c3c86c310`)
          const datas = await getDataFiveDays.json();
          setWeatherFiveDays(datas.list, icons);
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

      function newDays () {
        fetchWeatherFiveDays(lat, lon)
      }

  return (
    <div className="wrapper">
      <Header newSitys = {newSitys}/>
      <Main weather={weather}
            weatherFiveDays = {weatherFiveDays}
            icons = {icons}
            newDays = {newDays}
            />
    </div>
  );


  // const [city, setCity] = useState("");
  //   const [data, setData] = useState([]);
  //   const [error, setError] = useState([]);
  //   const onCityChange = (e) => {
  //     setCity(e.target.value);
  //   };
  
  //   const getCityFromCoords = async (lat, lon) => {
  //     const response = await fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ab955f21662b12a83937b65c3c86c310`
  //     );
  //     const data = await response.json();
  //     setCity(data.name);
  //   };
  
  //   const getCoords = async () => {
  //     if ("geolocation" in navigator) {
  //       await navigator.geolocation.getCurrentPosition(async (position) => {
  //         const { coords } = position;
  //         getCityFromCoords(coords.latitude, coords.longitude);
  //         fetchData(1, coords.latitude, coords.longitude);
  //       });
  //     }
  //   };
  
  //   const fetchData = async (count, lat, lon) => {
  //     const response = await fetch(
  //       `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ab955f21662b12a83937b65c3c86c310&cnt=${count}&lat=${lat}&lon=${lon}`
  //     );
  //     const data = await response.json();
  //     if (data.cod === "404") {
  //       setError(data.message);
  //     }
  //     if (data.cod === "200") {
  //       setData(data.list);
  //       setError("");
  //       console.log(data);
  //     }
  //   };
  
  //   return (
  //     <div className="App">
  //       <button onClick={() => fetchData(1)}>Today</button>
  //       <button onClick={() => fetchData(5)}>Five Days</button>
  //       <button onClick={getCoords}>Five Days</button>
  //       <input type="text" value={city} onChange={onCityChange} />
  //       {error}
  //       {data.map((item) => {
  //         return (
  //           <div className="weather" style={{ border: "1px solid blue" }}>
  //             <div>{item.main.temp - 273}C</div>
  //             <div>{item.main.humidity}%</div>
  //             <div>{item.main.pressure}мм/рт/ст</div>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
};
export default App;