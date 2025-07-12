import './TodayData.css'

const TodayData = () => {
    
    return (
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
    )
}

export default TodayData