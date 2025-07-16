// import React, { useState, useEffect } from "react";
import { useState } from 'react'
import './TodayTemperature.css'

const TodayTemperature = ({weather}) => {

  const [now, setNow] = useState(new Date())
  setInterval(() => {setNow(new Date()), 1000})

return (
        weather && (
            <section className="article__today-temperature">
              <span className="today-temperature__temp">{weather.temperature}<sup>o</sup></span>
              <span className="today-temperature__day">Сегодня</span>
              <span className="today-temperature__time">Время: {now.toLocaleTimeString()}</span>
              <img className="today-temperature__icon" src={weather.icon} alt={weather.precipitation}/>
              <span className="today-temperature__city">Город: {weather.location}</span>
          </section>
        )
)
}
export default TodayTemperature