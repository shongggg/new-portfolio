'use client';
import Link from 'next/link';

export default function Footer() {
  const newLocal = <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="3" width="14" height="18" rx="1" />
    <rect x="8" y="6" width="8" height="5" />
    <line x1="8" y1="14" x2="16" y2="14" />
    <line x1="8" y1="17" x2="13" y2="17" />
  </svg>;
  const newLocal_1 = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>;
  return (
    <footer className="footer-inner">
      {/* Portfolio links */}
      <div className="footer-item-group">
        <span style={{ color: '#888', fontSize: '15px', marginRight: '4px' }}>Portfolio:</span>
        <a
          href="https://drive.google.com/drive/folders/1D5ksUQhcv1sGP2PZZOmFjD3bVKV3tRFv?usp=sharing"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 18px',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '8px',
            fontSize: '14px',
            color: '#fff',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        >
          {newLocal}
          Creatives
        </a>
        <a
          href="https://drive.google.com/drive/folders/1xRRAEsHA8BDDXtuzkQHUDhPkGq-Kh_TZ?usp=sharing"
          className="action-link"
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        >
            {newLocal_1}
          Photography
        </a>
      </div>

      {/* Floating contact button */}
      <Link
        href="/contact"
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: '#2a2a2a',
          border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = '#3a3a3a'}
        onMouseLeave={e => e.currentTarget.style.background = '#2a2a2a'}
        title="Contact me"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      </Link>
    </footer>
  );
}
