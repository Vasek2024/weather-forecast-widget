import React, { useState } from "react";
import './Header.css'

const Header = ({newSitys}) =>{

    const [newSity, setNewSity] = useState("");

    return (
        <header className="header">
            <div className="header__icon">
                <img className="header__icon-img" src="./public/Group.svg" alt="React weather"/>
                <span className="header__icon-title">React weather</span>
            </div>
            <div className="header__choose">
                <img className="header__choose-img" src="./public/Vector.svg" alt=""/>
                <div className="header__choose-form">

                    <input className="header__choose-input"
                        value={newSity}
                        onChange={(e) => setNewSity(e.target.value)}
                        type="text"
                        placeholder="Ведите город" />
                    <button className="header__choose-btn" onClick={() => newSitys(newSity)}>🔍</button>
                </div>
            </div>
        </header>
    )
}

export default Header