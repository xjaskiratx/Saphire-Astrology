import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import Services from './components/Services.jsx'
import Blog from './components/Blog.jsx'
import Transits from './components/Transits.jsx'
import Contact from './components/Contact.jsx'
import AboutUs from './components/AboutUs.jsx'
import FAQs from './components/FAQs.jsx'
import './styles/Components.css'

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/transits" element={<Transits />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}