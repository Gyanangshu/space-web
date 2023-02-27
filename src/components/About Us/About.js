import React from 'react';
// import css 
import "./about.css";
// import component 
import Number from './Number';

const About = () => {
  return (
    <section className='about__section' id="about">
      <Number />

      <div className='about__content'>

        <p className='about__title p__poppins section__title'>OUR GALACTIC STORY</p>

        <p className='about__description p__poppins'>GREETING EARTHLINGS!
          We are Hyper Media, a full-service digital marketing agency
          with a mission to empower businesses to thrive in the ever-changing
          digital universe. Since 2019, we've been helping clients across
          Malaysia, Singapore, India, and the UK achieve cosmic success
          through our out-of-this-world solutions, including brand
          development, lead generation, and community management. Our
          team of interstellar experts is committed to delivering the best
          possible ROI for our clients, working closely with them to
          understand their unique needs and goals. Join us on our mission
          to revolutionize the digital landscape  and propel your business to
          new heights</p>

          <button class="about__button btn">
          <div>
            <a href="https://calendly.com/hypermediamarketing/15min?fbclid=IwAR3HbvsMJXo1M9mFre1rlzxXayN8n-pS-REHi_-t0HaXK1ME9CLRA6VW_gU&month=2023-02"><p className='about__button-text p__poppins'>Get Your FREE Marketing Plan</p>
            <p className='hero__term p__poppins'>100% Free & No Obligation</p></a>
          </div> 
          <div class="icon">
            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
          </div>
        </button>
      </div>
    </section>
  )
}

export default About
