import './ChoiceSections.css'

const ChoiceSections = ({weatherFiveDays}) => {
    console.log(weatherFiveDays);

    return (
        weatherFiveDays && weatherFiveDays.map((d, index) =>(
        <div className="choice__sections">
            {/* <h2 className="choice__sections-title">Сегодня</h2> */}
            <span className="choice__sections-month">06 июля</span>
            <img className="choice__sections-img" src = {weatherFiveDays[index].weather[0].icon}/>
            <span className="choice__sections-min">{Math.floor(weatherFiveDays[index].main.temp)}<sup>o</sup></span>
            <span className="choice__sections-max">{Math.floor(weatherFiveDays[index].main.temp_max)}<sup>o</sup></span>
            <span className="choice__sections-sky">{weatherFiveDays[index].weather[0].description}</span>
        </div>
        )
    ))
}

export default ChoiceSections