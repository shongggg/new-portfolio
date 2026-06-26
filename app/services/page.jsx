import Link from 'next/link';

export const metadata = {
  title: 'Services — Therenz Jaromohom',
};

const services = [
  {
    title: 'Logo Designing',
    description: "Create impactful and memorable text-based logos that capture your brand's personality, values, and identity.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
        <path d="M2 2l7.586 7.586"/>
        <circle cx="11" cy="11" r="2"/>
      </svg>
    ),
  },
  {
    title: 'UI / UX Designing',
    description: 'Delivering sleek, intuitive designs that enhance user experience and make your digital platforms truly unique.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="3" width="6" height="6" rx="3"/>
        <rect x="6" y="9" width="6" height="6" rx="3"/>
        <path d="M6 18a3 3 0 0 1 3-3h3v3a3 3 0 1 1-6 0z"/>
        <rect x="12" y="3" width="6" height="6" rx="3"/>
        <circle cx="15" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    title: 'Photography',
    description: 'From stunning edits to capturing special events and products, I bring your vision to life through the lens.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
        <circle cx="12" cy="13" r="4"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <div className="page-wrapper">
      <div className="services-hero">
        <div className="services-hero-text">
          <h1 style={{ fontSize: '36px', fontWeight: '700', color: '#fff', marginBottom: '16px' }}>Services</h1>
          <p style={{ color: '#888', fontSize: '15px', lineHeight: '1.7' }}>
            Combining creativity, functionality, and attention to detail to bring your vision to life.
            My services are designed to help businesses build a strong identity, engage their audience,
            and create lasting impressions.
          </p>
        </div>
        <Link href="/contact" className="services-cta" style={{
          flexShrink: 0, padding: '14px 28px', background: '#fff', color: '#000',
          borderRadius: '10px', fontSize: '15px', fontWeight: '600', display: 'inline-block',
        }}>
          Get Started
        </Link>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <div className="service-icon">
              {service.icon}
            </div>
            <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#fff', marginBottom: '12px', }}>
              {service.title}
            </h3>
            <p style={{ fontSize: '14px', color: '#888', lineHeight: '1.7', }} >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
