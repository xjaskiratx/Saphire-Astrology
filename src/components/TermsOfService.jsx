import React from 'react';
import '../styles/Components.css';

const TermsOfService = () => {
  return (
    <div className="container" style={{ padding: '80px 20px', maxWidth: '800px', textAlign: 'left' }}>
      <h1 className="h1" style={{ borderBottom: '2px solid var(--border)', paddingBottom: '10px', marginBottom: '30px' }}>Terms of Service</h1>
      <p className="p" style={{ textAlign: 'left', marginBottom: '20px' }}>Last updated: March 13, 2026</p>
      <p className="p" style={{ textAlign: 'left', marginBottom: '30px' }}>
        Welcome to Saphire Astro. By accessing this website, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
      </p>
      
      <h2 className="h3" style={{ textAlign: 'left', marginBottom: '15px' }}>1. Use License</h2>
      <p className="p" style={{ textAlign: 'left', marginBottom: '30px' }}>
        Permission is granted to temporarily download one copy of the materials (information or software) on Saphire Astro's website for personal, non-commercial transitory viewing only.
      </p>
      
      <h2 className="h3" style={{ textAlign: 'left', marginBottom: '15px' }}>2. Disclaimer</h2>
      <p className="p" style={{ textAlign: 'left', marginBottom: '30px' }}>
        The materials on Saphire Astro's website are provided on an 'as is' basis. Saphire Astro makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
      </p>
      
      <h2 className="h3" style={{ textAlign: 'left', marginBottom: '15px' }}>3. Limitations</h2>
      <p className="p" style={{ textAlign: 'left', marginBottom: '30px' }}>
        In no event shall Saphire Astro or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Saphire Astro's website.
      </p>
      
      <h2 className="h3" style={{ textAlign: 'left', marginBottom: '15px' }}>4. Astral Readings</h2>
      <p className="p" style={{ textAlign: 'left', marginBottom: '30px' }}>
        Astrology readings and insights are for entertainment purposes only and should not be used as a substitute for professional legal, financial, or medical advice.
      </p>
    </div>
  );
};

export default TermsOfService;
