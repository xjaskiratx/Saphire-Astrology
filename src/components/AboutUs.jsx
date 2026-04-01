import React from 'react'
import '../styles/About.css'
import Seo from './Seo.jsx'

// const familyMembers = [
//   {
//     name: 'Rohit Jetly',
//     role: 'Master Astrologer & Mentor',
//     summary: 'Rohit carries forward three generations of astrological practice. Clients come to him for timing strategies, synastry insights, and calm, grounded advice.',
//     image: '/images/father2.webp'
//   },
//   {
//     name: 'Meera Jetly',
//     role: 'Numerology & Tarot Specialist',
//     summary: 'Meera blends numerology with intuitive tarot sessions that feel like a conversation with a wise friend. She brings warmth, laughter, and eye-opening clarity.',
//     image: '/images/mother2.webp'
//   },
//   {
//     name: 'Aradhana Jetly',
//     role: 'Client Care & Ritual Designer',
//     summary: 'Ira curates rituals, playlists, and check-ins so every session feels supported. She helps clients integrate their readings into daily life with ease.',
//     image: '/images/daughter1.webp'
//   }
// ]

const familyMembers = [
  {
    name: 'Anil Jetly',
    role: 'Senior Vedic Astrologer',
    summary:
      'With over 20 years of experience, Anil Jetly represents generations of ancestral Vedic astrology practice. He works across all major life areas—money, health, relationships, and career—focusing on clear logic behind every prediction. His belief is simple: astrology should guide your decisions, not control them.',
    image: '/images/father2.webp',
    width: 768,
    height: 906
  },
  {
    name: 'Shaifali Jetly',
    role: 'Vedic Astrologer & Spiritual Guide',
    summary:
      'Shaifali Jetly brings emotional depth and intuitive understanding to her astrological work. With more than two decades of experience, she helps clients navigate relationships, health, and inner balance. Her consultations focus on reassurance, clarity, and practical guidance rather than fear-based interpretations.',
    image: '/images/mother2.webp',
    width: 691,
    height: 746
  },
  {
    name: 'Aradhana Jetly',
    role: 'Vedic Astrologer & Modern Practitioner',
    summary:
      'With over 7 years of experience, Aradhana Jetly represents the next generation of Saphire Astrology. She blends traditional Vedic principles with a modern, logical outlook, helping clients understand astrology as a tool for awareness and free will. Her focus is on making astrology practical, approachable, and relevant to today’s challenges.',
    image: '/images/daughter1.webp',
    width: 945,
    height: 2048
  }
]

export default function AboutUs(){
  return (
    <div className="about-page">
      <Seo
        title="Meet the Jetly Family — Vedic Astrologers with 20+ Years of Experience"
        description="Saphire Astro is led by Anil, Shaifali & Aradhana Jetly — a family of Vedic astrologers with 20+ years of ancestral practice. Honest, logic-based readings for 2000+ clients/year."
        path="/about-us"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Anil Jetly',
            jobTitle: 'Senior Vedic Astrologer',
            worksFor: { '@type': 'Organization', name: 'Saphire Astro' },
            knowsAbout: ['Vedic Astrology', 'Kundali Analysis', 'Kundali Matchmaking'],
            description: '20+ years of ancestral Vedic astrology practice covering money, health, relationships, and career with clear logic behind every prediction.',
            url: 'https://www.saphireastro.in/about-us',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Shaifali Jetly',
            jobTitle: 'Vedic Astrologer & Spiritual Guide',
            worksFor: { '@type': 'Organization', name: 'Saphire Astro' },
            knowsAbout: ['Vedic Astrology', 'Spiritual Guidance', 'Relationship Astrology'],
            description: '20+ years of experience helping clients navigate relationships, health, and inner balance with reassurance and practical guidance.',
            url: 'https://www.saphireastro.in/about-us',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Aradhana Jetly',
            jobTitle: 'Vedic Astrologer & Modern Practitioner',
            worksFor: { '@type': 'Organization', name: 'Saphire Astro' },
            knowsAbout: ['Vedic Astrology', 'Tarot Reading', 'Numerology'],
            description: '7+ years experience in Vedic astrology, blending traditional principles with a modern, logical approach.',
            url: 'https://www.saphireastro.in/about-us',
          },
        ]}
      />
      <div className="page-bg" aria-hidden="true">
        <div className="page-bg-orbit">
          <img
            className="page-bg-image"
            src="/images/image.webp"
            alt=""
            width={1200}
            height={1800}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <div className="page-content">
      <section className="about-hero">
        <img
          className="hero-family-photo"
          src="/images/family1.webp"
          alt="Jetly family"
          width={1536}
          height={1024}
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
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
          <p className="p">
      Saphire Astrology is an ancestral family practice rooted in Vedic astrology, with over 20 years of experience across generations. 
      For us, astrology is not about fear or rigid beliefs—it is guidance. Life situations, whether joyful or challenging, are shaped by both luck and free will. 
      While astrology helps us understand what luck indicates, it is always your intention, karma, and choices that shape the outcome.
      <br /><br />
      We believe every prediction and remedy must have logic behind it. Honesty, clarity, and responsibility are at the core of our work, because this is your life we are dealing with. 
      Each year, we work with over 2000 clients, many of whom return regularly because of the trust built through accurate insights and transparent guidance.
      Our goal is simple: to help you feel comfortable, informed, and confident in the path ahead.
    </p>
        </div>
      </section>

      <section className="about-members">
        {familyMembers.map((member, idx) => (
          <React.Fragment key={member.name}>
            <div className={`about-row ${idx % 2 ? 'reverse' : ''}`}>
              <div className="about-content-wrapper">
              <div className="about-img">
                <img
                  src={member.image}
                  alt={member.name}
                  width={member.width}
                  height={member.height}
                  loading="lazy"
                  decoding="async"
                />
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
    </div>
  )
}
