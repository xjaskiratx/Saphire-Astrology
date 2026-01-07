import React, { useState } from 'react'
import '../styles/Contact.css'

const channels = [
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@saphire.astro',
    detail: 'DM me for live stories, mini reads & launch updates.',
    href: 'https://www.instagram.com/saphire.astro?igsh=MTJhNDJueGNraGpjNQ=='
  },
  {
    id: 'email',
    label: 'Email',
    handle: 'astrologysapphire@gmail.com',
    detail: 'Best for sharing attachments or booking confirmations.',
    href: 'mailto:astrologysapphire@gmail.com'
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    handle: '+1 (236) 313-3875',
    detail: 'Voice notes, quick clarifications or scheduling a call.',
    href: 'https://wa.me/+12363133875'
  }
]

export default function Contact(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [query, setQuery] = useState('')
  const [dest, setDest] = useState('email')

  const submit = (e) => {
    e.preventDefault()
    if (dest === 'email'){
      const subject = encodeURIComponent('Client Query')
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${query}`)
      window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`
    } else {
      const msg = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${query}`)
      window.open(`https://wa.me/+12363133875?text=${msg}`, '_blank')
    }
  }

  return (
    <section className="section contact-page">
      <div className="container contact-shell">
        <div className="contact-intro card">
          <div className="badge">Let’s connect</div>
          <h2 className="h2" style={{textAlign:'center'}}>Choose how you’d like to reach out</h2>
          <p className="p" style={{textAlign:'center'}}>Whether you prefer a quick DM, a thoughtful email or a WhatsApp voice note, I reply within 24 hours on weekdays.</p>
          <div className="channel-grid">
            {channels.map(ch => (
              <a key={ch.id} className={`channel-card ${ch.id}`} href={ch.href} target="_blank" rel="noreferrer">
                <div className="channel-label">{ch.label}</div>
                <div className="channel-handle">{ch.handle}</div>
                <p className="channel-detail">{ch.detail}</p>
                <span className="channel-cta">Open {ch.label}</span>
              </a>
            ))}
          </div>
        </div>
        
        <form className="card contact-form" onSubmit={submit}>
          <div className="form-head">
            <div className="badge">Short form</div>
            <div className="h2" style={{textAlign:'center'}}>Send a voice or text note</div>
            <p className="p form-p" style={{textAlign:'center'}}>Quickly fill out your name and query and send it right away directly!</p>
            <div className="mode-toggle" role="group" aria-label="Delivery preference">
              <button type="button" className={dest==='email' ? 'mode-btn active' : 'mode-btn'} onClick={()=>setDest('email')}>Email</button>
              <button type="button" className={dest==='whatsapp' ? 'mode-btn active' : 'mode-btn'} onClick={()=>setDest('whatsapp')}>WhatsApp</button>
            </div>
          </div>
          <input className="input" placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} required />
          <textarea className="textarea" placeholder="Drop your question, birth details, or call preference." value={query} onChange={e=>setQuery(e.target.value)} required />
          <button className="btn" type="submit">{dest==='email' ? 'Send via Email' : 'Send to WhatsApp'}</button>
        </form>
      </div>
    </section>
  )
}
