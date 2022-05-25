import React from 'react';
import { useSelector } from 'react-redux';

const Instructor = () => {
  const { instructs } = useSelector((state) => state.instruct);

  return (
    <>
      <section className="instructor" id="team">
        <div className="container">

          <div className="title-wrapper">
            <h2 className="h2 instructor-title">Introduce with Our Famous Teacher</h2>
          </div>

          <ul className="instructor-list">

            {instructs.map((item, index) => {
              return (

                <li key={index}>
                  <div className="instructor-card">
                    <figure className="card-banner">
                      <img src={item.image} alt="Shaapir Prio" />
                    </figure>

                    <a href="#">
                      <h3 className="card-title">{item.card_title}</h3>
                    </a>

                    <p className="card-subtitle">{item.card_subtitle}</p>

                    <ul className="card-social-list">

                      <li>
                        <a href="#" className="card-social-link">
                          <ion-icon name="logo-linkedin">{item.card_link1}</ion-icon>
                        </a>
                      </li>

                      <li>
                        <a href="#" className="card-social-link">
                          <ion-icon name="logo-facebook">{item.card_link2}</ion-icon>
                        </a>
                      </li>

                      <li>
                        <a href="#" className="card-social-link">
                          <ion-icon name="logo-twitter">{item.card_link3}</ion-icon>
                        </a>
                      </li>

                    </ul>

                  </div>
                </li>
              )
            })}

          </ul>

        </div>
      </section>
    </>
  )
}

export default Instructor
