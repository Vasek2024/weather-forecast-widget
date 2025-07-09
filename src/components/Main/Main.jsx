import React, { useState } from "react";
import './Main.css'

const Main = () => {
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState()
    const url = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'

    return(
        <main className="main">
            <article className="article__today">
                <section className="article__today-temperature">
                    <span className="today-temperature__temp">20°</span>
                    <span className="today-temperature__day">Сегодня</span>
                    <span className="today-temperature__time">Время: 21:54</span>
                    <img className="today-temperature__icon" src="./public/Group (1).svg" alt=""/>
                    <span className="today-temperature__city">Город: Санкт-Петербург</span>
                </section>
                <section className="article__today-data">
                    <div className="today__data-temp">
                        <img className="today__temp-img" src="./public/thermometer 1.svg" alt=""></img>
                        <span className="today__temp-temp">Температура</span>
                        <span className="today__temp-difference">20° - ощущается как 17°</span>
                    </div>
                    <div className="today__data-pressure">
                        <img className="today__pressure-img" src="./public/humidity 1.svg" alt=""></img>
                        <span className="today__pressure-pressure">Давление </span>
                        <span className="today__temp-ok">765 мм ртутного столба - нормальное</span>
                    </div>
                    <div className="today__data-precipitation">
                        <img className="today__precipitation-img" src="./public/Group (4).svg" alt=""></img>
                        <span className="today__precipitation-precipitation">Осадки</span>
                        <span className="today__temp-nou">Без осадков</span>
                    </div>
                    <div className="today__data-wind">
                        <img className="today__wind-img" src="./public/wind 1.svg" alt=""></img>
                        <span className="today__wind-wind">Ветер</span>
                        <span className="today__temp-direction">3 м/с юго-запад - легкий ветер</span>
                    </div>
                </section>
            </article>
            <article className="article__choice">
                <nav className="article__choice-nav">
                    <ul className="choice__nav">
                        <li className="choice__nav-one btn">На неделю</li>
                        <li className="choice__nav-two btn">На 10 дней</li>
                        <li className="choice__nav-three btn">На месяц</li>
                    </ul>
                    <button className="choice__btn btn">Очистить</button>
                </nav>
                <section className="article__choice-sections">
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