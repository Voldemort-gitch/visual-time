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
  <div style={{ backgroundColor: '#020203', color: '#ffffff', padding: '40px', fontFamily: 'sans-serif' }}>
    <div style={{ border: '1px solid rgba(0, 229, 255, 0.2)', padding: '30px', borderRadius: '12px', backgroundColor: '#0A0A0F' }}>
      <h1 style={{ color: '#00E5FF', fontSize: '20px', textAlign: 'center', marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '4px' }}>
        New Corporate/LED Inquiry
      </h1>
      
      <div style={{ marginBottom: '20px' }}>
        <p style={{ color: '#94A3B8', fontSize: '11px', textTransform: 'uppercase', margin: '0 0 5px 0', letterSpacing: '1px' }}>Client Name</p>
        <p style={{ fontSize: '18px', margin: '0', fontWeight: 'bold' }}>{fullName}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p style={{ color: '#94A3B8', fontSize: '11px', textTransform: 'uppercase', margin: '0 0 5px 0', letterSpacing: '1px' }}>Project Type</p>
        <p style={{ fontSize: '18px', margin: '0', color: '#00E5FF' }}>{eventType}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p style={{ color: '#94A3B8', fontSize: '11px', textTransform: 'uppercase', margin: '0 0 5px 0', letterSpacing: '1px' }}>Contact Details</p>
        <p style={{ fontSize: '16px', margin: '0' }}>{email} | {phoneNumber}</p>
      </div>

      {eventDate && (
        <div style={{ marginBottom: '20px' }}>
          <p style={{ color: '#94A3B8', fontSize: '11px', textTransform: 'uppercase', margin: '0 0 5px 0', letterSpacing: '1px' }}>Project Date</p>
          <p style={{ fontSize: '16px', margin: '0' }}>{eventDate}</p>
        </div>
      )}

      <div style={{ marginTop: '30px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px' }}>
        <p style={{ color: '#94A3B8', fontSize: '11px', textTransform: 'uppercase', margin: '0 0 10px 0', letterSpacing: '1px' }}>Message Details</p>
        <p style={{ fontSize: '16px', lineHeight: '1.6', margin: '0', color: '#CBD5E1' }}>{message}</p>
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center', fontSize: '11px', color: '#64748B' }}>
        <p>© 2026 Visual Time | Professional LED & Corporate Production</p>
      </div>
    </div>
  </div>
);
