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
                    <div className="choice__sections">
                        <h2 className="choice__sections-title">Сегодня</h2>
                        <span className="choice__sections-month">06 июля</span>
                        <img className="choice__sections-img" src="" alt=""/>
                        <span className="choice__sections-min">+18°</span>
                        <span className="choice__sections-max">+15°</span>
                        <span className="choice__sections-sky">Облачно</span>
                    </div>
                    <div className="choice__sections">
                        <h2 className="choice__sections-title">Сегодня</h2>
                        <span className="choice__sections-month">06 июля</span>
                        <img className="choice__sections-img" src="" alt=""/>
                        <span className="choice__sections-min">+18°</span>
                        <span className="choice__sections-max">+15°</span>
                        <span className="choice__sections-sky">Облачно</span>
                    </div>
                    <div className="choice__sections">
                        <h2 className="choice__sections-title">Сегодня</h2>
                        <span className="choice__sections-month">06 июля</span>
                        <img className="choice__sections-img" src="" alt=""/>
                        <span className="choice__sections-min">+18°</span>
                        <span className="choice__sections-max">+15°</span>
                        <span className="choice__sections-sky">Облачно</span>
                    </div>
                    <div className="choice__sections">
                        <h2 className="choice__sections-title">Сегодня</h2>
                        <span className="choice__sections-month">06 июля</span>
                        <img className="choice__sections-img" src="" alt=""/>
                        <span className="choice__sections-min">+18°</span>
                        <span className="choice__sections-max">+15°</span>
                        <span className="choice__sections-sky">Облачно</span>
                    </div>
                    <div className="choice__sections">
                        <h2 className="choice__sections-title">Сегодня</h2>
                        <span className="choice__sections-month">06 июля</span>
                        <img className="choice__sections-img" src="" alt=""/>
                        <span className="choice__sections-min">+18°</span>
                        <span className="choice__sections-max">+15°</span>
                        <span className="choice__sections-sky">Облачно</span>
                    </div>
                    <div className="choice__sections">
                        <h2 className="choice__sections-title">Сегодня</h2>
                        <span className="choice__sections-month">06 июля</span>
                        <img className="choice__sections-img" src="" alt=""/>
                        <span className="choice__sections-min">+18°</span>
                        <span className="choice__sections-max">+15°</span>
                        <span className="choice__sections-sky">Облачно</span>
                    </div>
                </section>
            </article>
        </main>
    )
}

export default Main