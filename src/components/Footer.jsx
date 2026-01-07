import React from 'react'
import '../styles/Components.css'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="copyright-text">
          <span>© {new Date().getFullYear()} Saphire Astrology</span>
          <span className="footer-hyphen"> — </span>
          <span className="all-rights">All rights reserved.</span>
        </div>
      <div className="footer-social">
        <a className="social-link" href="https://www.instagram.com/..." target="_blank">Instagram</a>
        <a className="social-link" href="https://wa.me/..." target="_blank">WhatsApp</a>
      </div>
    </div>
  </footer>
  )
}