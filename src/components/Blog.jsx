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
      content:'Treat the forecast as a weather report for your mood and priorities, not a fixed destiny. Read for both sun and rising signs, notice the theme, and then decide how you want to respond.'
    },
    {
      title:'Pairing with journal prompts',
      content:'After reading, note one supportive action and one mindful caution for the day. This keeps the horoscope grounded and reminds you that small choices shape the outcome.'
    }
  ],
  tarot: [
    {
      title:'Major vs. Minor Arcana',
      content:'Major cards point to big-life lessons or archetypal turning points; the Minors show daily dynamics around emotions, thinking, actions, and resources. Court cards often describe people, roles, or parts of yourself that want a voice.'
    },
    {
      title:'Choosing a spread',
      content:'Start with three-card past/present/future or mind/body/spirit spreads to keep insights focused. Move to Celtic Cross or Horseshoe layouts when you’re ready for multi-layered storytelling.'
    },
    {
      title:'Question crafting tips',
      content:'Ask “What can I understand/learn/do about…?” Instead of yes/no prompts. Open-ended questions invite richer guidance and make it easier to act on the reading.'
    }
  ],
  timing: [
    {
      title:'Transits that matter',
      content:'Fast planets (Moon, Mercury, Venus, Mars) nudge day-to-day energy, while Jupiter through Pluto describe long arcs. Track both so you know whether you’re dealing with a passing mood or a deeper shift.'
    },
    {
      title:'Working with exact dates',
      content:'Mark the date a transit perfects, then watch the week before and after for echoes. If it touches an angle or personal planet in your chart, journal what actually happens—you’ll build your own timing playbook.'
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
