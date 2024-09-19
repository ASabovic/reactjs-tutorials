import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About setPlayState={setPlayState} />} />
          <Route path="/gallery" element={
            <>
              <Title subTitle='Gallery' title='Campus Photos' />
              <Campus />
            </>
          } />
          <Route path="/" element={
            <div>
              <Hero />
              <Title subTitle='Our PROGRAM' title='What We Offer' />
              <Programs />
              <About setPlayState={setPlayState} />
              <Title subTitle='Gallery' title='Campus Photos' />
              <Campus />
              <Title subTitle='TESTIMONIALS' title='What Student Says' />
              <Testimonials />
              <Title subTitle='Contact Us' title='Get in Touch' />
              <Contact />
              <Footer />
            </div>
          } />
        </Routes>
        <VideoPlayer playState={playState} setPlayState={setPlayState} />
      </div>
    </Router>
  );
};

export default App;
