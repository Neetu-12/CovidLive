import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Covid = () => {
  const [Covid, setCovid] = useState({})
  useEffect(() => {
    axios.get("https://data.covid19india.org/data.json").then((result) => {
      setCovid(result.data.statewise[0])

    }).catch((err) => {
      console.log(err);
    });
  }, [])

  console.log(Covid);
  return (
    <div>
      <div className="mainHeading">
        <div className="heading">COVID-19 CORONAVIRUS TRACKER</div>
      </div>
      <div className="mainCovindContainer">
        <div className="covidContainerFirst">
          <div className="card1 latestCard">
            <div className="countryDiv">
              <div className="head">
                <div className="our">OUR</div>
                <div className="country">COUNTRY</div>
              </div>
              <div className="indian">INDIA</div>
            </div>
          </div>
          <div className="card2 latestCard">
            <div className="head">
              <div className="our">TOTAL</div>
              <div className="country">RECOVERED</div>
            </div>
            <div className='recovered'>{Covid.recovered}</div>
          </div>
          <div className="card3 latestCard">
            <div className="head">
              <div className="our">TOTAL</div>
              <div className="country">CONFIRMED</div>
            </div>
            <div className='confirmed'>{Covid.confirmed}</div>
          </div>
        </div>
        <div className="covidContainerSecond">
          <div className="card4 latestCard">
            <div className="head">
              <div className="our">TOTAL</div>
              <div className="country">DEATHS</div>
            </div>
            <div className='deaths'>{Covid.deaths}</div>
          </div>
          <div className="card5 latestCard">
            <div className="head">
              <div className="our">TOTAL</div>
              <div className="country">ACTIVE</div>
            </div>
            <div className='active'>{Covid.active}</div>
          </div>
          <div className="card6 latestCard">
            <div className="head">
              <div className="our">LAST</div>
              <div className="country">UPDATED</div>
            </div>
            <div className='lastupdatedtime'>{Covid.lastupdatedtime}</div>
          </div>
        </div>
      </div>
      <h1 className="code">
        <a href="https://github.com/Neetu-12?tab=repositories" target='_blank'>Design by Neetu Sah</a>
      </h1>
    </div>
  )
}
