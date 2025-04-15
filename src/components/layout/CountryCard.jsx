import React from 'react'
import { NavLink } from 'react-router-dom';

export const CountryCard = ({country}) => {
  const {flags,name,population,region,capital}=country; 
  return (
    <li className="country-card card">
     <div className="container-card bg-white-box">
      <img src={flags.svg} alt={flags.alt} />
     </div>
     <div className="countryInfo">
      <p className="card-title">
        {(name.common.length)>10?name.common.slice(0,10)+"...": name.common}
      </p>
      <p className="card-description"> capital: 
        <span>{capital[0]}</span></p>
      <p className="card-description">region: <span>{region}</span></p>
      <p className="card-description">population: <span>{population.toLocaleString()}</span></p>
       
       <NavLink to={`/country/${name.common}`}>
        <button>Read more</button>
       </NavLink>
     </div>

     </li>
  )
}
