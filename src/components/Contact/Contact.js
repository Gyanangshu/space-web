import React from 'react';
// import css 
import "./contact.css";
// import icons 
import location from "../../images/location.png";
import phone from "../../images/phone.png";
import mail from "../../images/mail.png";
import path1 from "../../images/Path1.png";
import path2 from "../../images/Path2.png";
import path3 from "../../images/Path3.png";
import path4 from "../../images/Path4.png";

const Contact = () => {
  return (
    <footer className='footer__section' id='contact'>
      <div className="footer__container">

        {/* form  */}
        <div className="footer__form">
          {/* form title  */}
          <p className="footer__title p__poppins section__title">LET'S GET CONNECTED</p>
          {/* form fields  */}
          <div className="form__info">

            <div className="form__info-container">
              <form target='__blank' action="https://formsubmit.co/enquiry@hypermediaglobal.com" method='POST' className='form'>

                <div className="form__personal-info">
                  <input type="text" name='fname' className='form__name' placeholder='First Name' required />
                  <input type="text" name='lname' className='form__name' placeholder='Last Name' required />
                  <input type="email" name='email' className='form__name' placeholder='Email' required />
                  <input type="number" name='phone-number' className='form__name' placeholder='Phone' required />
                </div>

                <textarea placeholder='Message..' name="message"></textarea>

                <button class="form__button btn">
                  <div>
                    <p className='p__poppins'>Submit</p>
                  </div>
                  <div class="icon">
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                  </div>
                </button>

              </form>
            </div>

          </div>

        </div>

        {/* footer info */}
        <div className="footer__info ">

          <div className="info">
            <img src={location} alt="location" />
            <p className="info__text p__poppins">44 Hathersage Road
              Manchester M13 0FT.</p>
          </div>

          <div className="info">
            <img src={phone} alt="phone" />
            <p className="info__text p__poppins">+44 7384131960 (UK)</p>
          </div>

          <div className="info">
            <img src={phone} alt="phone" />
            <p className="info__text p__poppins">+601112251327 (MY)</p>
          </div>

          <div className="info">
            <img src={mail} alt="email" />
            <p className="info__text p__poppins">enquiry@hypermediaglobal.com</p>
          </div>

          <div className="info info__icons">
            <a href="https://www.instagram.com/hypermedia_group/?fbclid=IwAR0kgrAf9rHt_xYlRWQreMZw0KdloAK3fy0walrpe5JFVFfXtI5QkiVo8Vk" target='__blank'><img src={path1} className='icon__img' alt="instagram" /></a>
            <a href="https://www.facebook.com/hypermediagroup" target='__blank'><img src={path2} className='icon__img' alt="facebook" /></a>
            <a href="https://www.tiktok.com/@vineshvarma12?fbclid=IwAR3HbvsMJXo1M9mFre1rlzxXayN8n-pS-REHi_-t0HaXK1ME9CLRA6VW_gU" target='__blank'><img src={path3} className='icon__img' alt="tik-tok" /></a>
            <a href="https://www.youtube.com/@hypermediaTV/featured" target='__blank'><img src={path4} className='icon__img' alt="youtube" /></a>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Contact
