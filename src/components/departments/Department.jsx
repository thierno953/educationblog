import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Department = () => {
  const { blogs } = useSelector((state) => state.blog);
  const [state, setState] = useState(3);

  const loading = () => {
    setState(state + state);
  }

  const slice = blogs.slice(0, state);

  return (
    <>
      <section className="departments" id="blog">
        <div className="container">

          <h2 className="h2 departments-title">We Have Most of Popular Departments</h2>

          <ul className="departments-list">

            {slice.map((item, index) => {
              return (
                <li key={index}>
                  <div className="departments-card">

                    <div className="card-banner">
                      <figure>
                        <img src={item.image} alt="Artificial Intelligence" />
                      </figure>
                    </div>

                    <h3 className="h3 card-title">{item.card_title}</h3>

                    <p className="card-text">
                      {item.card_text}
                    </p>

                    <Link to={`/blog/${item.id}`} className="card-link">
                      <span>{item.card_link}</span>
                      <ion-icon name="arrow-forward"><ArrowForwardIcon /></ion-icon>
                    </Link>

                  </div>
                </li>
              )
            })}

          </ul>

          <button className="btn btn-primary" onClick={() => loading()}>View All Department</button>
        </div>
      </section>
    </>
  )
}

export default Department
