import React from 'react'
import countryData from "../api/CountryData.json"

export const About = () => {
  return (
  <>
   <section className="section-about container">
    <h2 className="container-title">
      here are some Interesting Facts
      <br />
      we are proud of
    </h2>
    <div className="gradient-cards">

      {
        countryData.map((curr)=>{
          const {id,countryName,capital,population,interestingFact}=curr;
         return(
          <div className="card" key={id}>

          <div className="container-card bg-blue-box">
            <p className="card-title">
               {countryName}
            </p>
              <p>
                <span className="card-description">
                  Capital:
                </span>
                {capital}
              </p>
              <p>
                <span className="card-description">
                  Population:
                </span>
                {population}
              </p>
              <p>
                <span className="card-description">
                  Intersting Fact  :
                </span>
                {interestingFact}
              </p>
            
          </div>
  
        </div>
         )

        })
      }
     
    </div>
   </section>
  
  
  </>
  )
}

