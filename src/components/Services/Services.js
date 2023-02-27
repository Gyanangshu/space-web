import React from 'react';
// import css 
import "./services.css";
// import data 
import data from "../../constants/data";

const ServiceCards = ({ ser: {imgUrl, title, description } }) => (
  <div className='card'>
    <div className="card_img">
      <img src={imgUrl} alt="icon" />
    </div>
    <p className="card__title p__poppins">{title}</p>
    <p className="card__description p__poppins">{description}</p>
  </div>
)

const Services = () => {
  return (
    <div className='service__section' id='services'>
      <div className='service__container'>

        <p className="services__title p__poppins section__title" >OUR COSMIC CAPABILITIES</p>

        <div className='service__cards'>
          {data.service.map((ser) => <ServiceCards ser={ser} key={ser.title}/>)}
        </div>
      </div>

    </div>
  )
}

export default Services
