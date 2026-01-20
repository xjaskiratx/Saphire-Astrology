import React from 'react'
import '../styles/Home.css'

const items = [
  { name: 'Sonia', quote: 'You are really good at what you do'},
  { name: 'Rimpy', quote: 'Totally satisfied and very impressed with the predictions and guidance'},
  { name: 'Pooja', quote: 'Kind, clear, and practical guidance.'},
  { name: 'Rohan', quote: 'I had a great experience. I really trust her predictions.'},
  { name: 'Dhruv', quote: 'The session made hair on my arms bristle!'}
]

export default function TestimonialsCarousel(){
  const doubled = [...items, ...items] // for seamless loop
  return (
    <div className="testimonials-section">
      <div className="container-testimonials">
        <h2 className="h2">What our clients have to say about us -</h2>
        <div className="track" aria-label="testimonials auto-scrolling">
          {doubled.map((t, i) => (
            <div key={i} className="card testimonial-card">
              <div className="h3" style={{marginBottom:8}}>{t.name}</div>
              <div className="p">“{t.quote}”</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}