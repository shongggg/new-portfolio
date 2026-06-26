import Link from 'next/link';

export default function Home() {
  return (
    <div className="page-wrapper" style={{
      minHeight: 'calc(80vh - 104px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background watermark signature */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        userSelect: 'none',
      }}>
        <img src="/images/299492764_738251620614221_7798118274339425308_n.jpg" alt="" style={{ objectFit: 'cover', opacity: 0.06 }}/>
      </div>

      {/* Main hero text */}
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <h1 style={{
          fontSize: 'clamp(64px, 12vw, 140px)',
          fontWeight: '800',
          lineHeight: '0.9',
          letterSpacing: '-0.02em',
          color: '#ffffff',
          fontFamily: "'Rametto One'",
          textTransform: 'uppercase',
          marginTop: '80px',
          marginBottom: '10px',
        }}>
          THERENZ<br />JAROMOHOM
        </h1>

        <p style={{
          fontSize: '14px',
          letterSpacing: '0.3em',
          color: '#888888',
          textTransform: 'uppercase',
          fontWeight: '400',
        }}>
          Interface Designer &nbsp;|&nbsp; Logo Designer
        </p>
      </div>
    </div>
  );
}
