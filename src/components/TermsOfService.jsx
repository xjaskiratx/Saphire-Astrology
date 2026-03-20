import React from 'react';
import '../styles/Components.css';
import Seo from './Seo.jsx';

const TermsOfService = () => {
  return (
    <div className="container" style={{ padding: '80px 20px', maxWidth: '800px', textAlign: 'left' }}>
      <Seo
        title="Terms of Service"
        description="Review the terms and conditions for using Saphire Astro."
        path="/terms-of-service"
      />
      <h1 className="h1" style={{ borderBottom: '2px solid var(--border)', paddingBottom: '10px', marginBottom: '30px' }}>Terms of Service</h1>
      <p className="p" style={{ textAlign: 'left', marginBottom: '20px' }}>Last updated: March 20, 2026</p>
      
      <p className="p" style={{ textAlign: 'left', marginBottom: '30px' }}>
        Welcome to Saphire Astro. By accessing this website, you agree to be bound by these terms of service and all applicable laws and regulations.
      </p>
      
      <section style={{ marginBottom: '30px' }}>
        <h2 className="h3" style={{ textAlign: 'left', marginBottom: '15px' }}>1. Entertainment Purposes</h2>
        <p className="p" style={{ textAlign: 'left', marginBottom: '15px' }}>
          All consultations, reports, and content provided on this website are for entertainment purposes only. Astrology is a matter of belief and is not a factual or scientific study. 
        </p>
        <p className="p" style={{ textAlign: 'left' }}>
          By using our services, you acknowledge that results are not guaranteed and may vary based on individual interpretation.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 className="h3" style={{ textAlign: 'left', marginBottom: '15px' }}>2. Professional Advice Disclaimer</h2>
        <p className="p" style={{ textAlign: 'left', marginBottom: '15px' }}>
          <strong>Not a Substitute:</strong> Astrological readings and insights are not a substitute for professional legal, financial, or medical advice. 
        </p>
        <p className="p" style={{ textAlign: 'left', marginBottom: '15px' }}>
          <strong>Medical/Mental Health:</strong> We do not provide medical or psychological diagnosis. If you are experiencing a crisis or considering self-harm, please contact emergency services or a mental health professional immediately.
        </p>
        <p className="p" style={{ textAlign: 'left' }}>
          <strong>Financial/Legal:</strong> Astrological predictions should not be used as the basis for investment, legal, or business decisions. Always consult with a qualified professional in these fields.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 className="h3" style={{ textAlign: 'left', marginBottom: '15px' }}>3. Eligibility and Age Restrictions</h2>
        <p className="p" style={{ textAlign: 'left', marginBottom: '15px' }}>
          You must be at least 18 years old to use our paid services. Minors are strictly prohibited from purchasing any consultations or reports.
        </p>
        <p className="p" style={{ textAlign: 'left' }}>
          Parents or legal guardians may request readings regarding their children, provided the contract and communication remain between Saphire Astro and the adult.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 className="h3" style={{ textAlign: 'left', marginBottom: '15px' }}>4. Limitation of Liability</h2>
        <p className="p" style={{ textAlign: 'left', marginBottom: '15px' }}>
          <strong>Intermediary Role:</strong> Saphire Astro acts solely as a scheduling intermediary. We are not responsible for the conduct, content, or quality of consultations that occur off-site. Any disputes regarding the consultation itself must be resolved directly with the consultant.
        </p>
        <p className="p" style={{ textAlign: 'left', marginBottom: '15px' }}>
          <strong>"As Is" Basis:</strong> Our services are provided without any warranties of accuracy, reliability, or fitness for a particular purpose.
        </p>
        <p className="p" style={{ textAlign: 'left' }}>
          <strong>Cap on Damages:</strong> To the maximum extent permitted by law, Saphire Astro's liability for any claim arising from our services is limited to the total amount paid by the user for the specific service in question, or $50, whichever is less.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 className="h3" style={{ textAlign: 'left', marginBottom: '15px' }}>5. Refund and Cancellation Policy</h2>
        <p className="p" style={{ textAlign: 'left', marginBottom: '15px' }}>
          <strong>Off-Site Transactions:</strong> As Saphire Astro does not process payments on-site, all financial transactions are strictly between the user and the consultant. Any requests for refunds or cancellations must be handled directly with the service provider according to their specific terms.
        </p>
        <p className="p" style={{ textAlign: 'left' }}>
          Saphire Astro is not responsible for issuing refunds for off-site transactions. Once a report is generated or a live session begins, the service is considered "consumed."
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 className="h3" style={{ textAlign: 'left', marginBottom: '15px' }}>6. User Conduct and Prohibitions</h2>
        <p className="p" style={{ textAlign: 'left', marginBottom: '15px' }}>
          <strong>Abuse:</strong> We reserve the right to terminate your access immediately if you are abusive, harassing, or use offensive language toward any member of our staff.
        </p>
        <p className="p" style={{ textAlign: 'left' }}>
          <strong>Ethical Standards:</strong> To maintain high ethical standards, we do not respond to questions regarding "black magic," "voodoo," or "death predictions."
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 className="h3" style={{ textAlign: 'left', marginBottom: '15px' }}>7. Accuracy of Information</h2>
        <p className="p" style={{ textAlign: 'left' }}>
          The responsibility for the accuracy of birth data (date, time, and location) lies solely with the user. Saphire Astro is not responsible for incorrect insights or predictions resulting from inaccurate data provided by the user.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 className="h3" style={{ textAlign: 'left', marginBottom: '15px' }}>8. Third-Party Platforms</h2>
        <p className="p" style={{ textAlign: 'left' }}>
          Consultations are conducted via third-party platforms (e.g., WhatsApp, Zoom, Google Meet). By booking, you agree to abide by the terms and privacy policies of those respective platforms. Saphire Astro is not liable for any technical failures, data breaches, or privacy issues occurring on these third-party services.
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
