import React from 'react'

const cards = [
  { title: 'Astro', cls: 'astro' },
  { title: 'Guidance', cls: 'guidance' },
  { title: 'Numerology', cls: 'numerology' },
  { title: 'Tarot', cls: 'tarot' },
  { title: 'Remedies', cls: 'remedies' },
]

export default function CardsRow(){
  return (
    <div className="section">
      <div className="container">
        <div className="cards-row">
          {cards.map((c, i) => (
            <div key={i} className={`card ${c.cls}`}>
              <div className="h3">{c.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}