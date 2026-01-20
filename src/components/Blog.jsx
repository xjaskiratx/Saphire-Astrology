import React, { useRef } from 'react'
import '../styles/Blog.css'
import { Accordion } from './Accordion.jsx'

const topics = [
  { id:'daily', title:'Daily Horoscopes', preview:'Brief guidance for each sign.', cls:'astro' },
  { id:'tarot', title:'Tarot Basics', preview:'Major/Minor Arcana explained.', cls:'tarot' },
  { id:'timing', title:'Astrology Timing', preview:'Transits & progressions notes.', cls:'numerology' },
]

const infoContent = {
  daily: [
    {
      title:'How to read daily scopes',
      content:'Read it as guidance for the day, not a fixed prediction. Check both your sun and rising signs, then focus on one theme you can act on.'
    },
    {
      title:'Pairing with journal prompts',
      content:'Write one thing to lean into and one thing to handle gently. A quick note anchors the forecast and makes it usable.'
    }
  ],
  tarot: [
    {
      title:'Major vs. Minor Arcana',
      content:'Major Arcana highlights bigger life lessons and turning points. Minor Arcana covers everyday emotions, thoughts, actions, and practical matters; Court cards often show people or roles.'
    },
    {
      title:'Choosing a spread',
      content:'Start with a simple three-card spread to stay focused. Use larger layouts like Celtic Cross when you need depth and context.'
    },
    {
      title:'Question crafting tips',
      content:'Ask open-ended questions that invite advice, not yes/no answers. Framing it as "What can I learn or do about...?" makes the reading actionable.'
    }
  ],
  timing: [
    {
      title:'Transits that matter',
      content:'Fast planets describe daily mood shifts; slow planets show long-term change. Noting both helps you tell short blips from major cycles.'
    },
    {
      title:'Working with exact dates',
      content:'Track the exact date and notice the week before and after for repeat themes. If the transit hits a personal planet or angle, journal what shows up to refine your timing sense.'
    }
  ]
}

export default function Blog(){
  const refs = useRef({})

  const scrollTo = (id) => {
    const el = refs.current[id]
    if (el) el.scrollIntoView({ behavior:'smooth', block:'start' })
  }

  return (
    <div className="section blog-page">
      <div className="container">
        {/* Card Grid */}
        <div className="card-grid">
          {topics.map(t => (
            <div key={t.id} className={`card ${t.cls}`} onClick={()=>scrollTo(t.id)} role="button">
              <div className="h3">{t.title}</div>
              <div className="p">{t.preview}</div>
            </div>
          ))}
        </div>

        {/* Info Sections */}
        <div style={{marginTop:24}}>
          {topics.map(t => (
            <section key={t.id} id={t.id} className="anchor-section" ref={el => refs.current[t.id] = el}>
              <h2 className="h2">{t.title}</h2>
              <Accordion items={infoContent[t.id]} />
            </section>
          ))}
        </div>

        {/* Back to Top button */}
        {/* <button className="top-button" onClick={()=>window.scrollTo({top:0, behavior:'smooth'})}>↑ Top</button> */}
      </div>
    </div>
  )
}
