import React from 'react'
import Hero_Image from "../../images/pexels-photo-3184338.jpeg"

const Hero = () => {
  return (
    <>
      <section className="hero" id="hero">
        <div className="container">
          <figure className="hero-banner">
            <img src={Hero_Image} alt="A young lady sits, holding a pen and a notebook." />
          </figure>
          <div className="hero-content">
            <h1 className="h1 hero-title">Start Your Future Education</h1>
            <p className="section-text">
              Credibly redefine distinctive total linkage vis-a-vis multifunction data. Phosphorescently impact
              goal-oriented
              strategic
            </p>
            <button className="btn btn-primary">Discover More</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
