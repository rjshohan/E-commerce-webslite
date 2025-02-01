import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

// import { Routes, Route, Link } from 'react-router-dom';

// const Home = () => <h1>Home Page</h1>;
// const About = () => <h1>About Page</h1>;
// const Contact = () => <h1>Contact Page</h1>;

function App() {
  return (
    <div>
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      <Navbar/>
      <Hero/>
      <About/>
     <Services/>
     <MyWork/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
