import React, { useState } from 'react'
import '../styles/Services.css'

const currencyList = ['INR','CAD','USD','AUD']
// Pre-set prices (no live conversion)
const priceTable = {
  INR: { tarot15: 799, tarot30: 1299, tarot60: 2199, course1: 2999, course2: 4999, course3: 7999 },
  CAD: { tarot15: 15,  tarot30: 25,   tarot60: 40,   course1: 69,   course2: 119,  course3: 179  },
  USD: { tarot15: 12,  tarot30: 20,   tarot60: 35,   course1: 59,   course2: 99,   course3: 149  },
  AUD: { tarot15: 18,  tarot30: 28,   tarot60: 45,   course1: 79,   course2: 129,  course3: 189  },
}

export default function Services(){
  const [cur, setCur] = useState('INR')
  const p = priceTable[cur]

  return (
    <div className='services-page'>
      <div className="currency-select global-currency">
        <div className="cur-text">Currency:</div>
        <select value={cur} onChange={e=>setCur(e.target.value)}>
          {currencyList.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {/* Tarot Section */}
      <section className="section-services first-svc">
        <div className="container-tarot">
          <h1 className="h1 tarot-head">Tarot Readings</h1>
          <p className="h2 tarot-avail">Available Mon–Fri, 9 AM – 7 PM</p>
          <div className="grid-svc-tarot grid-3-svc-tarot" style={{marginTop:16}}>
            <div className="card-tarot">
              <div className="h3">
                {"15 min".split("").map((char, i) => (
                  <span key={i} style={{ animationDelay: `${i * 0.12}s` }}>
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </div>
              <div className="p">{p.tarot15} {cur}</div>
            </div>
            <div className="card-tarot">
              <div className="h3">
                {"30 min".split("").map((char, i) => (
                  <span key={i} style={{ animationDelay: `${i * 0.12}s` }}>
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </div>
              <div className="p">{p.tarot30} {cur}</div>
            </div>
            <div className="card-tarot">
              <div className="h3">
                {"60 min".split("").map((char, i) => (
                  <span key={i} style={{ animationDelay: `${i * 0.12}s` }}>
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </div>
              <div className="p">{p.tarot60} {cur}</div>
            </div>
          </div>
          <button className="btn btn-svc-tarot" style={{marginTop:16}}>Book a Reading</button>
        </div>
      </section>

      <div className='bar-svc'>
        <span className='barspan'></span>
      </div>  

      {/* Analysis Section */}
      <section className="section-services">
        <div className="container-astro">
          <h2 className="h1 astro-head">Astrological Analysis</h2>
          <div className="grid-svc-astro grid-4-svc-astro" style={{marginTop:16}}>
            {[
              {t:'Natal Chart Analysis', d:'Your core blueprint.'},
              {t:'Compatibility Analysis', d:'Synastry for relationships.'},
              {t:'Transit Analysis', d:'Key timing windows.'},
              {t:'Career/Wealth Analysis', d:'Focus on vocation and flow.'},
            ].map((x,i)=> (
              <div key={i} className="card-astro">
                <div className="h3">{x.t}</div>
                <p className="p">{x.d}</p>
                <button className="btn-svc-astro">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className='bar-svc'>
        <span className='barspan'></span>
      </div>  

      {/* Numerology Section */}
      <section className="section-services">
        <div className="container-num">
          <div className="num-banner" style={{marginBottom:16}}>
            <div className="h1 astro-head">Numerology Insights</div>
            <p className="h3">Explore the power of numbers in your life.</p>
          </div>
          <div className="grid-svc-num grid-3-svc-tarot">
            {[
              {t:'Life Path Number', d:'Core life direction.'},
              {t:'Destiny Number', d:'Purpose and gifts.'},
              {t:'Name Analysis', d:'Vibration of your name.'},
            ].map((x,i)=> (
              <div key={i} className="card-num">
                <div className="h3">{x.t}</div>
                <p className="p">{x.d}</p>
                <button className="btn-svc-num">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className='bar-svc'>
        <span className='barspan'></span>
      </div>  

      {/* Courses */}
      <section className="section-services last-svc">
        <div className="container-astro">
          <h2 className="h1 astro-head">Courses</h2>
          <div className="grid-svc-astro grid-3-svc-tarot" style={{marginTop:16}}>
            {[
              {t:'Astrology 101 (4 weeks)', k:'course1'},
                {t:'Numerology Deep Dive (6 weeks)', k:'course2'},
                {t:'Synastry & Timing Mastery (8 weeks)', k:'course3'},
            ].map((x,i)=> (
              <div key={i} className="card-astro">
                <div className="h3">{x.t}</div>
                <p className="p">{x.d}</p>
                <button className="btn-svc-astro">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Options Banner */}
      {/* <section className="section-services banner">
        <div className="container banner-options">
          {[
            {t:'On Call', e:'📞'},
            {t:'On Message', e:'💬'},
            {t:'Email Report', e:'📧'},
          ].map((x,i)=> (
            <div key={i} className="banner-pill">
              <span style={{fontSize:24, marginRight:8}}>{x.e}</span>
              <span className="h3">{x.t}</span>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  )
}