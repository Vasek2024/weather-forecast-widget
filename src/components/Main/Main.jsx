import React, { useState, useEffect } from "react";
import './Main.css'
import TodayTemperature from "../TodayTemperature/TodayTemperature";
import TodayData from "../TodayData/TodayData";
import ChoiceNav from  "../ChoiceNav/ChoiceNav"
import ChoiceSections from '../ChoiceSections/ChoiceSections'


const Main = () => {

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    const fetchWeather = async (city) => {
        // Mock API call (replace with actual API)
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
        //   console.log(data);
        } catch (err) {
          console.error(err);
        }
      };

    useEffect(() => {
        fetchWeather('Bogotol')
    })


    
    return(
        <main className="main">
            <article className="article__today">
                <TodayTemperature weather={weather}/>
                <TodayData weather={weather}/>
            </article>
            <article className="article__choice">
                <ChoiceNav />
                <section className="article__choice-sections">
                    <ChoiceSections />
                    <ChoiceSections />
                    <ChoiceSections />
                    <ChoiceSections />
                    <ChoiceSections />
                    <ChoiceSections />
                    <ChoiceSections />
                </section>
            </article>
        </main>
    )
}

export default Main