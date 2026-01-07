import React from 'react'
import '../styles/About.css'

const familyMembers = [
  {
    name: 'Rohit Jetly',
    role: 'Master Astrologer & Mentor',
    summary: 'Rohit carries forward three generations of astrological practice. Clients come to him for timing strategies, synastry insights, and calm, grounded advice.',
    image: '/images/father2.png'
  },
  {
    name: 'Meera Jetly',
    role: 'Numerology & Tarot Specialist',
    summary: 'Meera blends numerology with intuitive tarot sessions that feel like a conversation with a wise friend. She brings warmth, laughter, and eye-opening clarity.',
    image: '/images/mother2.png'
  },
  {
    name: 'Aradhana Jetly',
    role: 'Client Care & Ritual Designer',
    summary: 'Ira curates rituals, playlists, and check-ins so every session feels supported. She helps clients integrate their readings into daily life with ease.',
    image: '/images/daughter1.jpeg'
  }
]

export default function AboutUs(){
  return (
    <div className="about-page">
      <section className="about-hero">
        <img className="hero-family-photo" src="/images/family1.png" alt="Jetly family" />
      </section>

      <div className="family-banner">
        <div className="h2">The Jetly Family</div>
        <div className="p">Rooted in tradition, created for today</div>
      </div>

      {/* <section className="section about-story">
        <div className="container narrow">
          <div className="badge">Our Family</div>
          <p className="p hero-text">Astrology has always been our dinner-table conversation. Today we turn that shared language into reassuring guidance for people around the world.</p>
        </div>
      </section> */}

      <section className="section about-intro">
        <div className="narrow">
          <h2 className="h2">Three voices, one purpose</h2>
          <p className="p">Astrology has always been our dinner-table conversation. Today we turn that shared language into reassuring guidance for people around the world. The Jetly household mixes classic charts, modern timing tools, and practical remedies. Each of us has a unique lens, yet the goal stays the same: give you clarity so you can move with confidence.</p>
        </div>
      </section>

      <section className="about-members">
        {familyMembers.map((member, idx) => (
          <React.Fragment key={member.name}>
            <div className={`about-row ${idx % 2 ? 'reverse' : ''}`}>
              <div className="about-content-wrapper">
              <div className="about-img">
                <img src={member.image} alt={member.name} loading="lazy" />
              </div>
              <div className="about-bio">
                <h3 className="h3">{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="p">{member.summary}</p>
              </div>
            </div>
            </div>
            {idx < familyMembers.length - 1 && <div className="about-divider" aria-hidden />}
          </React.Fragment>
        ))}
      </section>
    </div>
  )
}
