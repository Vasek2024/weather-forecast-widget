// import React, { useState, useEffect } from "react";
import './Main.css'
import TodayTemperature from "../TodayTemperature/TodayTemperature";
import TodayData from "../TodayData/TodayData";
import ChoiceNav from  "../ChoiceNav/ChoiceNav"
import ChoiceSections from '../ChoiceSections/ChoiceSections'


const Main = ({weather}) => {

  return(
      <main className="main">
          <article className="article__today">
              <TodayTemperature weather={weather}/>
              <TodayData weather={weather}/>
          </article>
          <article className="article__choice">
              <ChoiceNav />
              <section className="article__choice-sections">
                  <ChoiceSections />
                  <ChoiceSections />
                  <ChoiceSections />
                  <ChoiceSections />
                  <ChoiceSections />
                  <ChoiceSections />
                  <ChoiceSections />
              </section>
          </article>
      </main>
  )
}

export default Main