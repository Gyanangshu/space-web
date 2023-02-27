import React from 'react'
import "./hero.css"

const Hero = () => {
  return (
    <main className='hero__section section__padding app__bg1'>
      <div className="hero__head">
      <h1 className='hero__heading p__poppins'>WE HELP BUSINESSES AMPLIFY THEIR BRANDS
        & SKYROCKET THEIR LEADS </h1>

      <p className='hero__tagline p__poppins'>STELLAR CONVERSION FUNNELS, EXPERT TEAM OF MARKET DISRUPTORS, BATTLE-TESTED LEAD GENERATION
        STRATEGIES. LEARN HOW OUR STRATEGY ACHIEVED 250% BUSINESS GROWTH FOR CLIENTS.</p>

        </div>
 
      <div className='hero__call'>
      <a href="https://calendly.com/hypermediamarketing/15min?fbclid=IwAR3HbvsMJXo1M9mFre1rlzxXayN8n-pS-REHi_-t0HaXK1ME9CLRA6VW_gU&month=2023-02"><button class="btn">
          <div>
            <p className='hero__button-text p__poppins'>Get Your FREE Marketing Plan</p>
            <p className='hero__term p__poppins'>100% Free & No Obligation</p>
          </div> 
          <div class="icon">
            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
          </div>
        </button>
        </a>
        
      </div>


    </main>
  )
}

export default Hero
