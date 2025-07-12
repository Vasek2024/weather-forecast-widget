import React, { useState } from "react";
import './Main.css'
import TodayTemperature from "../TodayTemperature/TodayTemperature";
import TodayData from "../TodayData/TodayData";
import ChoiceNav from  "../ChoiceNav/ChoiceNav"
import ChoiceSections from '../ChoiceSections/ChoiceSections'

const Main = () => {
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState()
    const url = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'

    return(
        <main className="main">
            <article className="article__today">
                <TodayTemperature />
                <TodayData />
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