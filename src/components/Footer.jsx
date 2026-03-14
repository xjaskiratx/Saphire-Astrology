import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Components.css'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="copyright-text">
          <span>© {new Date().getFullYear()} Saphire Astrology</span>
          <span className="footer-hyphen"> — </span>
          <span className="all-rights">All rights reserved.</span>
          <span className="footer-credit">Developed and Managed by JSX W&amp;D</span>
        </div>
      <div className="footer-social">
        <Link className="social-link" to="/privacy-policy">Privacy Policy</Link>
        <Link className="social-link" to="/terms-of-service">Terms of Service</Link>
        <a className="social-link" href="https://www.instagram.com/saphire.astro?igsh=MTJhNDJueGNraGpjNQ==" target="_blank" rel="noreferrer">Instagram</a>
        <a className="social-link" href="https://wa.me/919311923536" target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
    </div>
  </footer>
  )
}
