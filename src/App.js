import './App.css';

// import components 
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About Us/About';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
