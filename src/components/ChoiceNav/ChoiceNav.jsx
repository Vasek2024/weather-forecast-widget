import './ChoiceNav.css'

const ChoiceNav = () => {
    return (
        <nav className="article__choice-nav">
            <ul className="choice__nav">
                <li className="choice__nav-one btn">На неделю</li>
                {/* <li className="choice__nav-two btn">На 10 дней</li>
                <li className="choice__nav-three btn">На месяц</li> */}
            </ul>
            <button className="choice__btn btn">Очистить</button>
        </nav>
    )
}

export default ChoiceNav