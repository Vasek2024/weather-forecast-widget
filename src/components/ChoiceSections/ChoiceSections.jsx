import './ChoiceSections.css'

const ChoiceSections = ({weatherFiveDays, icons}) => {

    return (
        weatherFiveDays && weatherFiveDays.map((d, index) =>(
        <div className="choice__sections" key={index}>
            <img className="choice__sections-img" src = {icons+weatherFiveDays[index].weather[0].icon+`@2x.png`}/>
            <span className="choice__sections-min">{Math.floor(weatherFiveDays[index].main.temp)}<sup>o</sup></span>
            <span className="choice__sections-max">{Math.floor(weatherFiveDays[index].main.temp_max)}<sup>o</sup></span>
            <span className="choice__sections-sky">{weatherFiveDays[index].weather[0].description}</span>
        </div>
        )
    ))
}

export default ChoiceSections