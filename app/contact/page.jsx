export const metadata = {
  title: "Let's Connect — Therenz Jaromohom",
};

export default function Contact() {
  return (
    <div className="page-wrapper" style={{
      minHeight: 'calc(80vh - 200px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
    }}>
      {/* Background watermark */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        userSelect: 'none',
        overflow: 'hidden',
      }}>
        <img src="/images/299492764_738251620614221_7798118274339425308_n.jpg" alt="" style={{ objectFit: 'cover', opacity: 0.06 }}/>
      </div>

      <div className="contact-content">
        <h1 style={{
          fontSize: 'clamp(56px, 10vw, 120px)',
          fontWeight: '900',
          color: '#fff',
          lineHeight: '0.9',
          letterSpacing: '-0.02em',
          fontFamily: "'Rametto One'",
          textTransform: 'uppercase',
          marginBottom: '32px',
          marginTop: 'clamp(80px, 18vw, 170px)',
        }}>
          LET'S CONNECT
        </h1>

        <p style={{
          fontSize: '16px',
          color: '#aaa',
          lineHeight: '1.7',
          maxWidth: '800px',
          margin: '0 auto 40px',
        }}>
          I'd love to hear from you! Whether you have a project in mind, a job opportunity,
          a collaboration idea, or simply want to say hello, feel free to reach out. I'm always
          open to meaningful conversations and new opportunities. Let's connect and create
          something great together.
        </p>

        <div className="contact-meta">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.79a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.05z"/>
            </svg>
            <span style={{ color: '#fff', fontSize: '15px' }}>+63 968-2021-257</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <a            
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jaromohomrenze231@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            style={{ color: '#fff', fontSize: '15px' }}>
              jaromohomrenze231@gmail.com
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span style={{ color: '#fff', fontSize: '15px' }}>Cebu, Philippines</span>
          </div>
        </div>

        <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=jaromohomrenze231@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}
