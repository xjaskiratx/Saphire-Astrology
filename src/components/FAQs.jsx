import React, { useState } from 'react'
import '../styles/FAQ.css'

const seed = [
  { q:'Do I need my exact birth time?', a:'Exact time gives the most accurate chart, especially for houses and ascendant. If you are unsure, we can still work with approximate time and focus on planetary themes.' },
  { q:'What details should I share before a reading?', a:'Birth date, place, and time are ideal, plus your key questions. The clearer your focus, the more targeted the insights.' },
  { q:'Can astrology predict the future?', a:'Astrology highlights trends, timing, and likely themes rather than fixed outcomes. It is best used for guidance and decision-making, not guarantees.' },
  { q:'What is the difference between sun, moon, and rising signs?', a:'Your sun sign reflects core identity, your moon sign shows emotions, and your rising sign is how you present to the world. Together they shape your overall chart.' },
  { q:'How often should I get a reading?', a:'Most people benefit from a check-in every few months or around major life shifts. You can also book shorter sessions for specific questions.' },
  { q:'Can a reading help with relationships or compatibility?', a:'Yes, synastry compares two charts to reveal strengths and friction points. It helps you understand dynamics and communicate better.' },
  { q:'What is a transit and why does it matter?', a:'A transit is a current planetary movement affecting your natal chart. It shows timing for opportunities, challenges, and growth periods.' },
  { q:'Is astrology the same as tarot or numerology?', a:'They are different tools: astrology maps your birth chart, tarot offers intuitive guidance, and numerology focuses on number patterns. They can be combined for a fuller picture.' },
  { q:'Are readings confidential?', a:'Yes, your information and session details are kept private. I only use your data to deliver the reading.' },
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
    <section className="section faq-page">
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
