import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Components.css'
import Seo from './Seo.jsx'

export default function NotFound() {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '100px 20px' }}>
      <Seo
        title="Page Not Found"
        description="The page you are looking for does not exist."
        path="/404"
        noIndex
      />
      <h1 className="h1">404 - Page Not Found</h1>
      <p className="p" style={{ marginBottom: '30px' }}>
        The cosmic paths seem to have shifted. The page you are looking for does not exist.
      </p>
      <Link to="/" className="btn">Return to Home</Link>
    </div>
  )
}
