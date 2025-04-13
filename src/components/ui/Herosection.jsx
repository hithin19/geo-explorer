import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Herosection = () => {
  return (
    <main className="hero-section main">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <h1 className="heading-xl">Explore the world,one at a time</h1>
              <p className="paragraph">
                discover history,culture and beauty of every nation.sort,search and
                filter are avaible to find in detail.
              </p>
              <button className="btn btn-darken btn-inline bg-white-box">
                Start Exploring <FaLongArrowAltRight />
              </button>
            </div>
            <div className="hero-image">
              <img src="/world.png" alt="worldbeauty" className="banner-image" />
            </div>
          </div>
        </main>
  )
}

export default Herosection