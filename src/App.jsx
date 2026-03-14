import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SkeletonLoader from './components/SkeletonLoader.jsx'
import './styles/Components.css'

// Lazy load components for skeletal loading
const Home = lazy(() => import('./components/Home.jsx'))
const Services = lazy(() => import('./components/Services.jsx'))
const Blog = lazy(() => import('./components/Blog.jsx'))
const Transits = lazy(() => import('./components/Transits.jsx'))
const Contact = lazy(() => import('./components/Contact.jsx'))
const AboutUs = lazy(() => import('./components/AboutUs.jsx'))
const FAQs = lazy(() => import('./components/FAQs.jsx'))
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy.jsx'))
const TermsOfService = lazy(() => import('./components/TermsOfService.jsx'))
const NotFound = lazy(() => import('./components/NotFound.jsx'))

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-content">
        <Suspense fallback={<SkeletonLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/transits" element={<Transits />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}