import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Services.css'

const currencyList = ['INR','CAD','USD','AUD']
const ratesToInr = { INR: 1, CAD: 65, USD: 90, AUD: 61 }
const baseInrPrices = {
  tarot15: 2900,
  tarot30: 4400,
  tarot45: 7200,
  tarotCombo40: 11000,
  kundali: 7100,
  varshaphala: 7100,
  matchmaking: 11000,
  emergency: 11000,
  nameCorrection: 12000,
  businessNameCorrection: 18000,
  babyNaming: 15000,
}

const priceTable = currencyList.reduce((acc, cur) => {
  const rate = ratesToInr[cur]
  acc[cur] = Object.fromEntries(
    Object.entries(baseInrPrices).map(([key, inrValue]) => {
      const converted = cur === 'INR' ? inrValue : Math.round(inrValue / rate)
      return [key, converted]
    })
  )
  return acc
}, {})

priceTable.CAD = {
  ...priceTable.CAD,
  tarot15: 42,
  tarot30: 66,
  tarot45: 108,
}

export default function Services(){
  const [cur, setCur] = useState('INR')
  const p = priceTable[cur]
  const navigate = useNavigate()
  const [tarotChoice, setTarotChoice] = useState('tarot15')

  const tarotOptions = [
    { key: 'tarot15', label: '15 min', service: 'Tarot Reading', timing: '15 min' },
    { key: 'tarot30', label: '30 min', service: 'Tarot Reading', timing: '30 min' },
    { key: 'tarot45', label: '45 min', service: 'Tarot Reading', timing: '45 min' },
    { key: 'tarotCombo40', label: 'Kundali + Tarot (40 min)', service: 'Kundali + Tarot', timing: '40 min', wide: true, delayStep: 0.06 },
  ]

  const goToContact = ({ service, intent, timing, price }) => {
    const params = new URLSearchParams()
    if (service) params.set('service', service)
    if (cur) params.set('currency', cur)
    if (timing) params.set('timing', timing)
    if (price) params.set('price', price)
    if (intent) params.set('intent', intent)
    navigate(`/contact?${params.toString()}`)
  }

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
            {tarotOptions.map((x) => (
              <div
                key={x.key}
                className={`card-tarot ${x.wide ? 'card-tarot-wide' : ''}`}
                onClick={() => setTarotChoice(x.key)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setTarotChoice(x.key)
                }}
              >
                <div className="h3">
                  {x.label.split("").map((char, i) => (
                    <span key={i} style={{ animationDelay: `${i * (x.delayStep || 0.12)}s` }}>
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </div>
                <div className="p">{p[x.key]} {cur}</div>
              </div>
            ))}
          </div>
          {(() => {
            const selected = tarotOptions.find(x => x.key === tarotChoice) || tarotOptions[0]
            return (
              <button
                className="btn btn-svc-tarot"
                style={{marginTop:16}}
                onClick={() => goToContact({
                  service: selected.service,
                  timing: selected.timing,
                  price: p[selected.key],
                  intent: 'book',
                })}
              >
                Book {selected.label}
              </button>
            )
          })()}
        </div>
      </section>

      <div className='bar-svc'>
        <span className='barspan'></span>
      </div>  

      {/* Analysis Section */}
      <section className="section-services">
        <div className="container-astro">
          <h2 className="h1 astro-head">Kundali Analysis (25-35 mins)</h2>
          <div className="grid-svc-astro grid-4-svc-astro" style={{marginTop:16}}>
            {[
              {t:'Kundali Analysis', d:'Deep-dive into your birth chart for personality, strengths, and life themes.', k:'kundali'},
              {t:'Varshaphala Analysis', d:'Year-ahead forecast highlighting key opportunities, challenges, and timing.', k:'varshaphala'},
              {t:'Kundali Matchmaking', d:'Compatibility check for marriage/partnership alignment and long-term harmony.', k:'matchmaking'},
              {t:'Emergency', d:'Fast-track guidance for urgent situations needing quick clarity and direction.', k:'emergency'},
            ].map((x,i)=> (
              <div key={i} className="card-astro">
                <div className="h3">{x.t}</div>
                <p className="p">{x.d}</p>
                <div className="p">{p[x.k]} {cur}</div>
                <button
                  className="btn-svc-astro"
                  onClick={() => goToContact({ service: x.t, intent: 'learn', price: p[x.k] })}
                >
                  Book a Session
                </button>
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
              {t:'Name Correction', d:'Numerology-based tweaks to optimize name vibrations and personal flow.', k:'nameCorrection'},
              {t:'Business Name Correction', d:'Aligns business name energy for growth, trust, and profitability.', k:'businessNameCorrection'},
              {t:'Baby Naming', d:'Meaningful, numerology-aligned names to support the child’s life path.', k:'babyNaming'},
            ].map((x,i)=> (
              <div key={i} className="card-num">
                <div className="h3">{x.t}</div>
                <p className="p">{x.d}</p>
                <div className="p">{p[x.k]} {cur}</div>
                <button
                  className="btn-svc-num"
                  onClick={() => goToContact({ service: x.t, intent: 'learn', price: p[x.k] })}
                >
                  Book a Session
                </button>
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
          <div className="grid-svc-astro grid-3-svc-tarot grid-svc-courses" style={{marginTop:16}}>
            {[
              {t:'Numerology (Beginner + Advanced)', k:'course1'},
                {t:'Reiki (Level 1 and Level 2)', k:'course2'},
            ].map((x,i)=> (
              <div key={i} className="card-astro">
                <div className="h3">{x.t}</div>
                <p className="p">{x.d}</p>
                <button className="btn-svc-astro" onClick={() => goToContact(x.t, 'learn')}>Learn More</button>
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
