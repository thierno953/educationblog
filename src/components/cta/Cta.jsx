import React from 'react'
import Cta_Image from "../../images/cta-vector.svg"

const Cta = () => {
  return (
    <>
      <section className="cta">
        <div className="container">
          <div className="title-wrapper">
            <h2 className="h2 cta-title">
              <span>Create Free Account & Get Register</span>
              <img src={Cta_Image} alt="Vector arrow art" className="vector-line" />
            </h2>
            <button className="btn btn-primary">Register Now</button>
          </div>
          <div className="cta-banner"></div>
        </div>
      </section>
    </>
  )
}

export default Cta
