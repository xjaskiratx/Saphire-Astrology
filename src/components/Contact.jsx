import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
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
    handle: '+91 93119 23536',
    detail: 'Voice notes, quick clarifications or scheduling a call.',
    href: 'https://wa.me/+919311923536'
  }
]

export default function Contact(){
  const location = useLocation()
  const [name, setName] = useState('')
  const [query, setQuery] = useState('')
  const [email, setEmail] = useState('')
  const [dest, setDest] = useState('email')

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const service = params.get('service')
    const currency = params.get('currency')
    const timing = params.get('timing')
    const price = params.get('price')
    const intent = params.get('intent')
    if (!service && !currency && !intent && !timing && !price) return

    const lines = []
    if (intent === 'book') {
      lines.push('Request: Book a reading')
    } else if (intent === 'learn') {
      lines.push('Request: Learn more')
    } else if (intent) {
      lines.push(`Request: ${intent}`)
    }
    if (service) lines.push(`Service: ${service}`)
    if (timing) lines.push(`Timing: ${timing}`)
    if (currency) lines.push(`Currency: ${currency}`)
    if (price && currency) {
      lines.push(`Price: ${price} ${currency}`)
    } else if (price) {
      lines.push(`Price: ${price}`)
    }

    const prefill = lines.join('\n')
    if (prefill) {
      setQuery(prev => (prev ? prev : prefill))
    }
  }, [location.search])

  const submit = (e) => {
    e.preventDefault()
    const headerLines = []
    if (name) headerLines.push(`Name: ${name}`)
    if (email && dest === 'email') headerLines.push(`Email: ${email}`)
    const header = headerLines.join('\n')
    const bodyText = query ? `${header}${header ? '\n\n' : ''}${query}` : header

    if (dest === 'email'){
      const subject = encodeURIComponent('Client Query')
      const body = encodeURIComponent(bodyText)
      window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`
    } else {
      const msg = encodeURIComponent(bodyText)
      window.open(`https://wa.me/+919311923536?text=${msg}`, '_blank')
    }
  }

  return (
    <section className="section contact-page">
      <div className="container contact-shell">
        <div className="contact-intro card">
          <div className="badge">Let’s connect</div>
          <h2 className="h2" style={{textAlign:'center'}}>Choose how you’d like to reach out</h2>
          <p className="p" style={{textAlign:'center'}}>Whether you prefer a quick DM, a thoughtful email or a WhatsApp voice note, we reply within 24 hours on weekdays.</p>
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
          <input className="input" placeholder="Your email (optional)" value={email} onChange={e=>setEmail(e.target.value)} type="email" />
          <textarea className="textarea" placeholder="Drop your question, birth details, or call preference." value={query} onChange={e=>setQuery(e.target.value)} required />
          <button className="btn" type="submit">{dest==='email' ? 'Send via Email' : 'Send to WhatsApp'}</button>
        </form>
      </div>
    </section>
  )
}
