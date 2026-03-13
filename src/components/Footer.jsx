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
          <span className="footer-credit">Developed and Managed by JSX W&amp;D</span>
        </div>
      <div className="footer-social">
        <a className="social-link" href="/privacy-policy.html">Privacy Policy</a>
        <a className="social-link" href="/terms-of-service.html">Terms of Service</a>
        <a className="social-link" href="https://www.instagram.com/saphire.astro?igsh=MTJhNDJueGNraGpjNQ==" target="_blank" rel="noreferrer">Instagram</a>
        <a className="social-link" href="https://wa.me/919311923536" target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
    </div>
  </footer>
  )
}
