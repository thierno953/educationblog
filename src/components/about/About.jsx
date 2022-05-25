import React from 'react'
import About_1_Image from "../../images/pexels-andrea-piacquadio-3762940.jpg";
import About_2_Image from "../../images/about-vector.svg"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const About = () => {
  return (
    <>
       <section className="about" id="about">
        <div className="container">

          <figure className="about-banner">
            <img src={About_1_Image} alt="Eduland students" className="about-img" />
            <img src={About_2_Image} alt="Vector line art" className="vector-line" />
            <button className="play-btn">
              <ion-icon name="play"><PlayCircleOutlineIcon /></ion-icon>
            </button>
          </figure>

          <div className="about-content">
            <h2 className="h2 about-title">We Help to Create Possibility & Success in Your Career!</h2>
            <p className="section-text">
              Continually administrate process-centric human capital rather than bleeding-edge methodologies.
              Distinctively supply
              accurate methods of empowerment before.
            </p>
            <button className="btn btn-primary">Get Started Today</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
