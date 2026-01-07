import React, { useEffect } from 'react'
import '../styles/Home.css'
import CardsRow from './CardsRow.jsx'
import TestimonialsCarousel from './TestimonialsCarousel.jsx'

export default function Home(){
  useEffect(() => {
    const el = document.querySelector('.countup');
    if (!el) return;

    const target = +el.getAttribute('data-target');
    const speed = 30; // smaller is faster
    const steps = 200; // number of increments
    const increment = Math.ceil(target / steps);

    const startCounter = () => {
      let count = 0;
      const updateCounter = () => {
        count += increment;
        if (count > target) count = target;
        el.textContent = count.toLocaleString();
        if (count < target) {
          setTimeout(updateCounter, speed);
        } else {
          // wait 2 seconds then restart
          setTimeout(startCounter, 3000);
        }
      };
      updateCounter();
    };

    startCounter();
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="hero">
        
          <img src="../public/images/sabg.jpg" alt="Background" className="hero-bg-img" />
          <img src="../public/images/sabg-modified.png" alt="Overlay" className="hero-overlay-img" />
          <div className="hero-overlay"></div>
        <div className="hero-name">Saphire Astro</div>
        <div className="hero-child">- Jetlys</div>
      </section>

      {/* Intro */}
      <section className='welcomeandcards'> 
        <section className="section">
          <div className="container">
            <h2 className="h2 fade-in-up">Welcome to Saphire Astro</h2>
            <h2 className="h2">
              <span className="word fade-seq">Credibility</span>
              <span className="dot fade-seq "> &nbsp; • &nbsp;  </span>
              <span className="word fade-seq ">Reliability</span>
              <span className="dot fade-seq "> &nbsp; • &nbsp;  </span>
              <span className="word fade-seq ">Trust</span>
            </h2>
          </div>
        </section>

        {/* Cards Row */}
        <CardsRow />

      </section>

      <div className='bar'>
        <span className=''></span>
      </div>

      {/* Split image + info */}
      {/* <section className="section godandquote">
        <div className="container">
          <div className="split-section">
            <div className="image-container">
              <img className='God'src="../public/images/God.jpg" alt="Astrology tools" />
            </div>
            <div>
              <h3 className='h3'> Saphire is not about predicting the future,</h3>    
              <h3 className='h3'> It’s about helping you create it. </h3>
              <h4 className="h4 sanskrit-quote"> यथा पिण्डे तथा ब्रह्माण्डे</h4>
              <div className="quote-top">“Yathā Piņde Tathā Brahmāņde”</div>
              <div className="quote-bottom">“As is the microcosm, so is the macrocosm.”</div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="section godandquote">
        <div className="container">
          <div className="split-section mobile-priority">
            {/* Group 1: The lead headings */}
              <div className="quote-lead">
                <h3 className='h3'> Saphire is not about predicting the future,</h3>
                <h3 className='h3'> It’s about helping you create it. </h3>
              </div>

            {/* Group 2: The Image */}
              <div className="image-container">
                <img className='God' src="../public/images/God.jpg" alt="Astrology tools" />
              </div>

            {/* Group 3: The Sanskrit Quote */}
              <div className="quote-details">
                <h4 className="h4 sanskrit-quote"> यथा पिण्डे तथा ब्रह्माण्डे</h4>
                <div className="quote-top">“Yathā Piņde Tathā Brahmāņde”</div>
            {/* <div className="quote-bottom">“As is the microcosm, so is the macrocosm.”</div> */}
              <div className="quote-bottom">
                <span className="keep-together">“As is the microcosm,</span> 
                <span className="keep-together"> so is the macrocosm.”</span>
              </div>
              </div>
          </div>
        </div>
      </section>

      {/* Numbers of the business */}
      <section className="section-numbers">
        <div className='numbers'>
          <h3 className="h3">
            { "20+ Years of Experience".split("").map((char, i) => (
  <span key={i} style={{ animationDelay: `${i * 0.04}s` }}>
    {char === " " ? "\u00A0" : char}
  </span>
)) }
          </h3>
          <h3 className="h3">
            <span className="countup" data-target="20000">1</span>+ clients helped globally
          </h3>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="section-cta">
        <div className="container-cta">
          <div className="h3" style={{marginBottom:8}}>Ready to talk?</div>
          <p className="p-cta">Choose a format that works the best for you — <br /> in person, live audio call, video call or chat on WhatsApp.</p>
          <a href="/contact" className="btn">Contact me</a>
        </div>
      </section>

      {/* <div className='bar'>
        <span className='barspan'></span>
      </div> */}

      {/* Testimonials */}
      <TestimonialsCarousel />
    </div>
  )
}