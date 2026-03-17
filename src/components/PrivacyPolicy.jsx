import React from 'react';
import '../styles/Components.css';
import Seo from './Seo.jsx';

const PrivacyPolicy = () => {
  return (
    <div className="container" style={{ padding: '80px 20px', maxWidth: '800px', textAlign: 'left' }}>
      <Seo
        title="Privacy Policy"
        description="Read how Saphire Astro collects, uses, and protects your information."
        path="/privacy-policy"
      />
      <h1 className="h1" style={{ borderBottom: '2px solid var(--border)', paddingBottom: '10px', marginBottom: '30px' }}>Privacy Policy</h1>
      <p className="p" style={{ textAlign: 'left', marginBottom: '20px' }}>Last updated: March 13, 2026</p>
      <p className="p" style={{ textAlign: 'left', marginBottom: '30px' }}>
        At Saphire Astro, your privacy is of extreme importance to us. This Privacy Policy document outlines the types of personal information that is received and collected by Saphire Astro and how it is used.
      </p>
      
      <h2 className="h3" style={{ textAlign: 'left', marginBottom: '15px' }}>Information Collection</h2>
      <p className="p" style={{ textAlign: 'left', marginBottom: '30px' }}>
        We may collect personal information such as your name and email address when you voluntarily submit it through our contact forms or newsletter sign-ups.
      </p>
      
      <h2 className="h3" style={{ textAlign: 'left', marginBottom: '15px' }}>Use of Information</h2>
      <p className="p" style={{ textAlign: 'left', marginBottom: '30px' }}>
        The information we collect is used to personalize your experience, improve our website, and communicate with you about our services.
      </p>
      
      <h2 className="h3" style={{ textAlign: 'left', marginBottom: '15px' }}>Cookies</h2>
      <p className="p" style={{ textAlign: 'left', marginBottom: '30px' }}>
        Saphire Astro uses cookies to store information about visitors' preferences, to record user-specific information on which pages the site visitor accesses or visits, and to personalize or customize our web page content based upon visitors' browser type or other information that the visitor sends via their browser.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
