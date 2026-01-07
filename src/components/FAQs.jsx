import React, { useState } from 'react'
import '../styles/FAQ.css'

const seed = [
  { q:'Do I need my exact birth time?', a:'It helps accuracy, but we can still work with approximations and discuss ranges.' },
  { q:'Which traditions do you use?', a:'A blend of Western astrology with numerology and tarot for context.' },
  { q:'How do sessions happen?', a:'On call, through messaging, or via detailed email reports—your choice.' },
  { q:'Do I need my exact birth time?', a:'It helps accuracy, but we can still work with approximations and discuss ranges.' },
  { q:'Which traditions do you use?', a:'A blend of Western astrology with numerology and tarot for context.' },
  { q:'How do sessions happen?', a:'On call, through messaging, or via detailed email reports—your choice.' },
  { q:'Do I need my exact birth time?', a:'It helps accuracy, but we can still work with approximations and discuss ranges.' },
  { q:'Which traditions do you use?', a:'A blend of Western astrology with numerology and tarot for context.' },
  { q:'How do sessions happen?', a:'On call, through messaging, or via detailed email reports—your choice.' },
]

export default function FAQs(){
  const [open, setOpen] = useState(null)
  const [name, setName] = useState('')
  const [question, setQuestion] = useState('')

  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('FAQ Question Submission')
    // We only need name and question now; the email address is handled by their mail app
    const body = encodeURIComponent(`Name: ${name}\n\nQuestion:\n${question}`)
    
    window.location.href = `mailto:astrologysapphire@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">FAQs</h2>
        <div className="faq-list">
          {seed.map((item, i) => (
            <div key={i} className="faq-item">
              <div className="faq-head" role="button" onClick={()=> setOpen(open===i ? null : i)}>
                <div className="h3">{item.q}</div>
                <div className="h3" aria-hidden>{open===i ? '–' : '+'}</div>
              </div>
              {open===i && (
                <div className="faq-body">
                  <div className="p">{item.a}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="card submit-box">
          <div className="h3" style={{marginBottom:18}}>Didn’t find your question?</div>
          <form onSubmit={submit} style={{display:'grid', gap:12}}>
            <input 
              className="input" 
              placeholder="Your name" 
              value={name} 
              onChange={e=>setName(e.target.value)} 
              required 
            />
            <textarea 
              className="textarea" 
              placeholder="Your question" 
              value={question} 
              onChange={e=>setQuestion(e.target.value)} 
              required 
            />
            <button className="btn" type="submit">Submit Question</button>
          </form>
        </div>
      </div>
    </section>
  )
}