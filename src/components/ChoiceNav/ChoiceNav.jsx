import './ChoiceNav.css'

const ChoiceNav = (newDays) => {
    return (
        <button className="choice__nav-one btn" onClick={() => newDays()}>Обновить на неделю</button>
    )
}

export default ChoiceNav