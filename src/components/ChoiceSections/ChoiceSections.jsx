import './ChoiceSections.css'

const ChoiceSections = () => {

    return (
        <div className="choice__sections">
            <h2 className="choice__sections-title">Сегодня</h2>
            <span className="choice__sections-month">06 июля</span>
            <img className="choice__sections-img" src="" alt=""/>
            <span className="choice__sections-min">+18°</span>
            <span className="choice__sections-max">+15°</span>
            <span className="choice__sections-sky">Облачно</span>
        </div>
    )
}

export default ChoiceSections