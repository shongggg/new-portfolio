'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/profile', label: 'Profile' },
    { href: '/experiences', label: 'Experiences' },
    { href: '/services', label: 'Services' },
  ];

  const socialLinks = [
    {
      href: 'https://drive.google.com/file/d/1WR0cLTtbXkM1eMinoHOK09bDVs2rolwB/view?usp=drive_link',
      label: 'Resume',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      ),
    },
    {
      href: 'https://www.instagram.com/st.togen',
      label: 'Instagram',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
    },
    {
      href: 'https://www.facebook.com/itsbasyonggg.fk',
      label: 'Facebook',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
    },
    {
      href: 'https://www.linkedin.com/in/rinsuuu11/',
      label: 'LinkedIn',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
    },
  ];

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/images/20241007_195710.png" alt="Therenz" width={65} height={65} style={{ objectFit: 'cover' }} />
      </Link>

      {/* Nav links */}
      <div className="nav-links">
        {navLinks.map((link) => (
<Link
  key={link.href}
  href={link.href}
  style={{
    fontSize: '15px',
    fontWeight: pathname === link.href ? '600' : '400',
    color: pathname === link.href ? '#ffffff' : '#888888',
    transition: 'all 0.2s ease',
    letterSpacing: '0.01em',
  }}
  onMouseEnter={(e) => {
    if (pathname !== link.href) {
      e.currentTarget.style.color = '#ffffff';
    }
  }}
  onMouseLeave={(e) => {
    if (pathname !== link.href) {
      e.currentTarget.style.color = '#888888';
    }
  }}
>
  {link.label}
</Link>
        ))}

        {/* Social icons */}
        <div className="social-links">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
