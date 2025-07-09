import React from "react";
// import '../reset.css'
import './Header.css'

const Header = () =>{
    return (
        <header className="header">
            <div className="header__icon">
                <img className="header__icon-img" src="./public/Group.svg" alt=""/>
                <span className="header__icon-title">React weather</span>
            </div>
            <div className="header__choose">
                <img className="header__choose-img" src="./public/Vector.svg" alt=""/>
                <div className="header__choose-form">
                    <input className="header__choose-input" type="text" placeholder="Ведите город" />
                    <button className="header__choose-btn">🔍</button>
                </div>
            </div>
        </header>
    )
}

export default Header