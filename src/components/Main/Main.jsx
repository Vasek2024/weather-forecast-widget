// import React, { useState, useEffect } from "react";
import './Main.css'
import TodayTemperature from "../TodayTemperature/TodayTemperature";
import TodayData from "../TodayData/TodayData";
// import ChoiceNav from  "../ChoiceNav/ChoiceNav"
import ChoiceSections from '../ChoiceSections/ChoiceSections'


const Main = ({weather, weatherFiveDays, icons, newDays}) => {

  return(
      <main className="main">
          <article className="article__today">
              <TodayTemperature weather={weather}/>
              <TodayData weather={weather}/>
          </article>
          <article className="article__choice">
          <button className="choice__nav-one btn" onClick={() => newDays()}>Обновить на неделю</button>
              {/* <ChoiceNav newDays = {newDays}/> */}
              <section className="article__choice-sections">
                  <ChoiceSections weatherFiveDays = {weatherFiveDays} icons = {icons}/>
              </section>
          </article>
      </main>
  )
}

export default Main