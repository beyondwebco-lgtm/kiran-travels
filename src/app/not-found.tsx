import React from 'react';
import Link from 'next/link';
import { Home, MessageCircle, Phone, ArrowLeft, Car } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/travelData';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 20px 60px 20px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '560px',
          background: 'rgba(13, 21, 40, 0.85)',
          border: '1px solid rgba(247, 185, 40, 0.3)',
          borderRadius: '24px',
          padding: '40px 24px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            padding: '6px 14px',
            background: 'rgba(247, 185, 40, 0.1)',
            border: '1px solid rgba(247, 185, 40, 0.3)',
            borderRadius: '9999px',
            fontSize: '0.8rem',
            fontWeight: 800,
            color: '#FACC15',
            marginBottom: '16px',
            letterSpacing: '0.1em',
          }}
        >
          PAGE NOT FOUND (404)
        </div>

        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            fontWeight: 900,
            color: '#FFFFFF',
            marginBottom: '12px',
            lineHeight: 1.2,
          }}
        >
          Looking for a Route with <span style={{ color: '#FACC15' }}>Kiran Travels?</span>
        </h1>

        <p
          style={{
            fontSize: '0.95rem',
            color: '#94A3B8',
            lineHeight: 1.6,
            marginBottom: '28px',
          }}
        >
          The page or route you are trying to reach does not exist or has moved. Return to our homepage to explore popular outstation routes, view our Swift Dzire &amp; Ertiga fleet, or contact us directly on WhatsApp.
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <Link
            href="/"
            className="btn btn-primary"
            style={{ padding: '12px 24px' }}
          >
            <Home size={18} />
            <span>Return to Homepage</span>
          </Link>

          <a
            href={BUSINESS_INFO.whatsappUrl(BUSINESS_INFO.templates.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ padding: '12px 24px' }}
          >
            <MessageCircle size={18} />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>
      </div>
    </div>
  );
}
