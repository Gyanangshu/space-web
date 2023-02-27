import React from 'react';
// import css file 
import "./navbar.css";
// import images file
import logo from "../../images/logo.svg";
// import icons 
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
 
  // state for the GiHamburgerMenu 
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className='app__navbar section__padding'>
      {/* logo */}
      <div className="app__navbar-logo">
        <img src={logo} alt="app logo" />
      </div>
      {/* nav components  */}
      <ul className='app__navbar-links'>
        <li><a href="/">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* responsive nav  */}
      <div className='app__navbar-smallscreen'> 
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
        <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
          <RxCross1 fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
          <ul className='app__navbar-smallscreen_links'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar
