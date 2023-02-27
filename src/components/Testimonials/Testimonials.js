import React from 'react';
// import css 
import "./testimonials.css";
// import icon 
import user from "../../images/user.png"
// import data 
import data from "../../constants/data";
// import carousel 
import Slider from "react-slick";

const TestimonialCard = ({ feed: { img, review, name } }) => (
  <div className='card__content'>
    <img className='user__img' src={img} alt="user_photo" />
    <p className='testimonial__para p__poppins'>{review}</p>
    <p className='testimonial__user-name p__poppins'>{name}</p>
  </div>
)


const Testimonials = () => {

  const [slideIndex, setSlideIndex] = React.useState(0)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
        
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
    ]
       
  };
 
  return (
    <section className='testimonial__section' id='testimonials'>
      <div className="testimonial__container">
        <p className="testimonial__title p__poppins section__title" >STELLAR FEEDBACK</p>


        <div className="testimonial__card " >

          <Slider {...settings}>
            {data.feedback.map((feed, index) => <TestimonialCard className={index === slideIndex ? 'slide slide-active' : 'slide'} feed={feed} key={index}/>)}


          </Slider>

        </div>




      </div>
    </section>
  )
}

export default Testimonials
