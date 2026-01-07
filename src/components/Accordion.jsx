import React, { useState } from 'react'
import '../styles/Blog.css'

export function Accordion({ items }){
  return (
    <div className="accordion">
      {items.map((it, i) => <AccordionItem key={i} {...it} />)}
    </div>
  )
}

function AccordionItem({ title, content }){
  const [open, setOpen] = useState(false)
  return (
    <div className={`accordion-item ${open ? 'open' : ''}`}>
      <div className="ac-head" onClick={()=>setOpen(!open)} role="button" aria-expanded={open}>
        <div className="h3">{title}</div>
        <div className="h3" aria-hidden>{open ? '–' : '+'}</div>
      </div>
      <div className="ac-body" aria-hidden={!open}>
        <div className="p">{content}</div>
      </div>
    </div>
  )
}
