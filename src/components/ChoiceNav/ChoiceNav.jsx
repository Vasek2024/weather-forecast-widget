import './ChoiceNav.css'

const ChoiceNav = (newDays) => {
    return (
        // <nav className="article__choice-nav">
        //     <ul className="choice__nav">
        //         <li className="choice__nav-one btn">На неделю</li>
        //     </ul>
        // </nav>
        <button className="choice__nav-one btn" onClick={() => newDays()}>Обновить на неделю</button>
    )
}

export default ChoiceNav