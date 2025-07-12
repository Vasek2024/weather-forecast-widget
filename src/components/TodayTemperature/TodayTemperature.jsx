import './TodayTemperature.css'

const TodayTemperature = () => {
return (
    <section className="article__today-temperature">
        <span className="today-temperature__temp">20°</span>
        <span className="today-temperature__day">Сегодня</span>
        <span className="today-temperature__time">Время: 21:54</span>
        <img className="today-temperature__icon" src="./public/Group (1).svg" alt=""/>
        <span className="today-temperature__city">Город: Санкт-Петербург</span>
    </section>
)
}
export default TodayTemperature