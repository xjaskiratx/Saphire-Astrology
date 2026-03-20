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
      <p className="p" style={{ textAlign: 'left', marginBottom: '20px' }}>Last updated: March 20, 2026</p>
      
      <p className="p" style={{ textAlign: 'left', marginBottom: '30px' }}>
        At Saphire Astro, your privacy is of extreme importance to us. This document outlines how we handle your personal data to ensure a transparent and secure experience.
      </p>
      
      <section style={{ marginBottom: '30px' }}>
        <h2 className="h3" style={{ textAlign: 'left', marginBottom: '15px' }}>1. Information Collection</h2>
        <p className="p" style={{ textAlign: 'left' }}>
          We collect personal information you voluntarily provide, including your name, email address, phone number (WhatsApp), and birth details (date, time, and location of birth). This information is strictly used to facilitate the scheduling of your consultation and to allow the consultant to prepare for your session.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 className="h3" style={{ textAlign: 'left', marginBottom: '15px' }}>2. Use of Information</h2>
        <p className="p" style={{ textAlign: 'left' }}>
          The information collected is used to manage your booking and is shared with the designated consultant to conduct your reading. Since consultations occur off-site (via third-party platforms like WhatsApp, Zoom, or Google Meet), we use your contact details to bridge that connection.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 className="h3" style={{ textAlign: 'left', marginBottom: '15px' }}>3. Third-Party Interactions & Payments</h2>
        <p className="p" style={{ textAlign: 'left' }}>
          Saphire Astro is a scheduling platform only. We do not process payments or host the actual consultations on this website. Once you leave our site for a consultation or to make a payment, our Privacy Policy no longer applies. We are not responsible for the privacy practices or data security of third-party communication or payment apps.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 className="h3" style={{ textAlign: 'left', marginBottom: '15px' }}>4. Data Retention</h2>
        <p className="p" style={{ textAlign: 'left' }}>
          We retain your booking information only as long as necessary to facilitate the scheduled meeting. You may request the deletion of your personal data at any time by contacting us at <strong>astrologysapphire@gmail.com</strong>.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 className="h3" style={{ textAlign: 'left', marginBottom: '15px' }}>5. Cookies</h2>
        <p className="p" style={{ textAlign: 'left' }}>
          Saphire Astro uses cookies to enhance your navigation and remember your booking preferences. You can choose to disable cookies through your individual browser settings.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
