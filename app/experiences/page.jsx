export const metadata = {
  title: 'Experiences — Therenz Jaromohom',
};

const experiences = [
  {
    role: 'Logo Designer | Freelance ( 2020 - 2021 )',
    bullets: [
      'Delivered 20+ logo and brand identity projects, improving client brand recognition and achieving 95% client satisfaction.',
      'Designed logos and visual identities tailored to client industries, ensuring consistency across digital and print platforms.',
      'Collaborated directly with clients to gather requirements, iterate designs, and deliver high-quality assets on time.',
    ],
  },
  {
    role: 'Junior Photographer | Renzu Shots ( 2022 - 2025 )',
    bullets: [
      'Completed 30+ photo shoots with on-time delivery, maintaining consistent positive client feedback and repeat bookings.',
      'Captured and edited high-quality images for events, products, and promotional materials using industry-standard tools.',
      'Managed end-to-end shoot processes including planning, lighting setup, and post-production editing.',
    ],
  },
  {
    role: 'UI / UX Designer | RAK SON OPC ( Jan - May 2026 )',
    bullets: [
      'Improved user engagement by 40% through user-centered design and usability enhancements.',
      'Designed wireframes, prototypes, and responsive interfaces for web applications using modern design tools.',
      'Conducted user research and usability testing to refine workflows and improve overall user experience.',
    ],
  },
];

export default function Experiences() {
  return (
    <div className="page-wrapper">
      <h1 className="page-header" style={{
        fontSize: '36px',
        fontWeight: '700',
        color: '#fff',
        marginBottom: '48px',
      }}>
        Experiences
      </h1>

      {/* Timeline */}
      <div className="timeline-container">
        {/* Vertical line */}
        <div className="timeline-line" />

        {experiences.map((exp, i) => (
          <div key={i} className="timeline-item">
            {/* Circle marker */}
            <div className="timeline-marker" />

            {/* Role title */}
            <h3 className="timeline-role" style={{
              fontSize: '16px',
              fontWeight: '500',
              color: '#fff',
              marginBottom: '16px',
              lineHeight: '1.4',
            }}>
              {exp.role}
            </h3>

            {/* Bullets */}
            <ul className="timeline-bullets">
              {exp.bullets.map((bullet, j) => (
                <li key={j}>
                  <span>•</span>
                  <span style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.6' }}>
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
