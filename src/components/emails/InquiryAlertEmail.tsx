import * as React from 'react';

interface InquiryAlertEmailProps {
  fullName: string;
  email: string;
  phoneNumber: string;
  eventType: string;
  eventDate?: string;
  message: string;
}

export const InquiryAlertEmail = ({
  fullName,
  email,
  phoneNumber,
  eventType,
  eventDate,
  message,
}: InquiryAlertEmailProps) => (
  <div style={{ backgroundColor: '#030304', color: '#ffffff', padding: '40px', fontFamily: 'serif' }}>
    <div style={{ border: '1px solid #D4AF37', padding: '30px', borderRadius: '12px' }}>
      <h1 style={{ color: '#D4AF37', fontSize: '24px', textAlign: 'center', marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '4px' }}>
        New Luxury Inquiry
      </h1>
      
      <div style={{ marginBottom: '20px' }}>
        <p style={{ color: '#A0A0A0', fontSize: '12px', textTransform: 'uppercase', margin: '0 0 5px 0' }}>Client Name</p>
        <p style={{ fontSize: '18px', margin: '0' }}>{fullName}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p style={{ color: '#A0A0A0', fontSize: '12px', textTransform: 'uppercase', margin: '0 0 5px 0' }}>Event Type</p>
        <p style={{ fontSize: '18px', margin: '0', color: '#D4AF37' }}>{eventType}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p style={{ color: '#A0A0A0', fontSize: '12px', textTransform: 'uppercase', margin: '0 0 5px 0' }}>Contact Details</p>
        <p style={{ fontSize: '16px', margin: '0' }}>{email} | {phoneNumber}</p>
      </div>

      {eventDate && (
        <div style={{ marginBottom: '20px' }}>
          <p style={{ color: '#A0A0A0', fontSize: '12px', textTransform: 'uppercase', margin: '0 0 5px 0' }}>Requested Date</p>
          <p style={{ fontSize: '16px', margin: '0' }}>{eventDate}</p>
        </div>
      )}

      <div style={{ marginTop: '30px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
        <p style={{ color: '#A0A0A0', fontSize: '12px', textTransform: 'uppercase', margin: '0 0 10px 0' }}>Message</p>
        <p style={{ fontSize: '16px', lineHeight: '1.6', margin: '0' }}>{message}</p>
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center', fontSize: '12px', color: '#A0A0A0' }}>
        <p>© 2026 Visual Time | Elevating moments into timeless memories.</p>
      </div>
    </div>
  </div>
);
