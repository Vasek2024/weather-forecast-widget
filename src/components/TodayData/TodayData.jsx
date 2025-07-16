import './TodayData.css'

const TodayData = ({weather}) => {
    
    return (
        weather && (
            <section className="article__today-data">
                <div className="today__data-temp">
                    <img className="today__temp-img" src="./public/thermometer 1.svg" alt="Температура"></img>
                    <span className="today__temp-temp">Температура</span>
                    <span className="today__temp-difference">{weather.temperature}<sup>o</sup> - ощущается как {weather.feelsLike}<sup>o</sup></span>
                </div>
                <div className="today__data-pressure">
                    <img className="today__pressure-img" src="./public/humidity 1.svg" alt="Давление"></img>
                    <span className="today__pressure-pressure">Давление </span>
                    <span className="today__temp-ok">{weather.pressure} мм ртутного столба</span>
                </div>
                <div className="today__data-precipitation">
                    <img className="today__precipitation-img" src="./public/Group (4).svg" alt="Осадки"></img>
                    <span className="today__precipitation-precipitation">Осадки</span>

                    {/* СДЕЛАТЬ ПЕРЕВОД */}
                    <span className="today__temp-nou">{weather.precipitation}</span>

                </div>
                <div className="today__data-wind">
                    <img className="today__wind-img" src="./public/wind 1.svg" alt="Ветер"></img>
                    <span className="today__wind-wind">Ветер</span>

                    {/* СДЕЛАТЬ ПЕРЕВОД */}
                    <span className="today__temp-direction">{weather.windSpeed} м/с {weather.description}</span>
                </div>
            </section>
        )
    )
}

export default TodayData