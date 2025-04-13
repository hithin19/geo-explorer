import React from 'react'
import footerContact from "../../api/footerApi.json"
import { MdPlace} from 'react-icons/md'
import { IoCallSharp } from 'react-icons/io5'
import { TbMailPlus } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  const fIcon={
    MdPlace:<MdPlace/>,
    IoCallSharp:<IoCallSharp/>,
    TbMailPlus:<TbMailPlus/>
  }
  return (
    <footer className="footer-section">
      <div className="grid grid-three-cols">
        {
        footerContact.map((curr,index)=>{
          const {icon,title,details}=curr;
          return(
            <div className="footer-contact" key={index}>
              <div className="icon">{fIcon[icon]}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>

          )
        })
        }
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <p>
              copyright &copy;2025 all rights reserved
              <NavLink to="/https://react-icons.github.io/react-icons" target='_blank ' >
              hReacticons
              </NavLink>
            </p>
            <div className="footer-menu">
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="https://www.linkedin.com" target='_blank'>social</NavLink></li>
                <li><NavLink to="https://github.com/hithin19" target='_blank'>github</NavLink></li>
              </ul>

            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
