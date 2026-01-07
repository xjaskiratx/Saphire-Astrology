import React from 'react'
import '../styles/Home.css'

const items = [
  { name: 'Aisha', quote: 'Beautifully accurate reading, felt truly seen.'},
  { name: 'Leo', quote: 'The timing tips were spot on for my move.'},
  { name: 'Maya', quote: 'Kind, clear, and practical guidance.'},
  { name: 'Rohan', quote: 'Numerology + transit insights = mind blown.'},
  { name: 'Sara', quote: 'Booked a follow-up. Highly recommend!'}
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