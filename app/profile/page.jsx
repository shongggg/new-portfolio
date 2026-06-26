"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const techStack = [
  { name: "Laravel", color: "#FF2D20" },
  { name: "MySQL", color: "#4479A1" },
  { name: "C", color: "#239120" },
  { name: "React", color: "#61DAFB" },
  { name: "Python", color: "#00599C" },
  { name: "Java", color: "#ED8B00" },
  { name: "CSS3", color: "#1572B6" },
  { name: "PHP", color: "#777BB4" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "HTML5", color: "#E34F26" },
  { name: "VS Code", color: "#007ACC" },
  { name: "GitHub", color: "#ffffff" },
];

const creativeStack = [
  "Google Drive",
  "Trello",
  "ClickUp",
  "Figma",
  "PixelLab",
  "Illustrator",
  "Canva",
  "Lightroom",
  "Photoshop",
  "Photopea",
  "Microsoft Office",
  "Microsoft Excel",
  "Microsoft PowerPoint",
  "Microsoft Teams",
  "Capcut",
  "Frame.io",
  "Wireframe.cc",
];

const projects = [
  {
    title: "TBA - Graduate Student Tracker",
    description:
      "An easy-to-use interface that helps keep track of students’ progress toward graduation and milestones.",
    thumbnail: "/images/thumbnails/TBA.png",
    tools: ["Figma", "PixelLab",  "PHP", "Tailwind CSS", "Laravel"],
    link: "https://www.figma.com/design/oNKQzwXv5ElGUmBR6rZE2m/Student-Graduate-Tracker?node-id=1093-196&t=PJWlmr9Kx30hYVB0-1", 
  },
  {
    title: "Ren'Shoe E-commerce",
    description:
      "A sleek, mobile-friendly e-commerce design with intuitive navigation, seamless shopping, and optimized product displays.",
    thumbnail: "/images/thumbnails/Renshoe UI Banner.jpg",
    tools: ["Figma", "PixelLab", "PHP", "Tailwind CSS", "Laravel" ],
    link: "https://www.figma.com/design/NGt4QrUC6grW5WYqANTCLj/Ren-Shoe-Ecommerce?m=auto&t=RXDJQANI1GbtcmNa-1",
  },
  {
    title: "RAKSON Project Management Tool",
    description:
      "A modern project management UI designed to streamline task tracking, collaboration, and team workflows.",
    thumbnail: "/images/thumbnails/rakson111.png",
    tools: ["Figma", "PixelLab", "Illustrator"],
    link: "https://www.figma.com/design/nS9Xl0Zhv1auejSKrAYagG/Rockson---Project-Management-Tool?m=auto&t=7L5olgGHxs1MARWt-1",
  },
  {
    title: "GoActive Mobile Workout Guide",
    description:
      "A clean, mobile-friendly design built to guide users through workouts and track fitness goals.",
    thumbnail: "/images/thumbnails/GoActive .png",
    tools: ["Figma", "PixelLab", "Illustrator"],
    link: "https://www.figma.com/design/Pjnrw7ssuSvCJwB5JWb5Bi/GoActive---Workout-Guide?m=auto&t=pkS0jDVIs9myLiHu-1 ",
  },
  {
    title: "RASKON - System Documentation",
    description:
      "A structured system documentation design for a project management tool, covering architecture diagrams, user flows, and technical specs.",
    thumbnail: "/images/thumbnails/Documentation -  Rockson PMT.jpg",
    tools: ["Figma", "PixelLab", "Illustrator"],
    link: "https://www.figma.com/board/JTgo8tUU4yQCp4iJbMJqlI/Student-Graduate-Tracker-Documentation?node-id=2004-19&t=RWtqMcqcuvwQH07X-1",
  },
  {
    title: "Autrack Workflow",
    description:
      "A structured wireframe workflow for a Room Reservation Management System, illustrating the user interface, navigation flow, and reservation process for both users and administrators.",
    thumbnail: "/images/thumbnails/AutrackWorkflow.png",
    tools: ["Figma", "PixelLab", "Illustrator", "PHP", "Firebase", "Java"],
  },
];

function AutoCarousel({ items, renderItem, direction = "left", speed = 40 }) {
  const doubled = [...items, ...items];

  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      {/* Left fade */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "60px",
          zIndex: 2,
          background: "linear-gradient(to right, #0a0a0a, transparent)",
          pointerEvents: "none",
        }}
      />
      {/* Right fade */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "60px",
          zIndex: 2,
          background: "linear-gradient(to left, #0a0a0a, transparent)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "12px",
          width: "max-content",
          animation: `scroll-${direction} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <div key={i} style={{ flexShrink: 0 }}>
            {renderItem(item)}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

function ProjectCarousel({ projects, onOpen }) {
  const ref = useRef(null);
  const scroll = (dir) => {
    if (ref.current)
      ref.current.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => scroll(-1)} style={arrowBtn("left")}>
        ‹
      </button>
      <div
        ref={ref}
        style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          scrollbarWidth: "none",
          paddingBottom: "4px",
        }}
      >
        {projects.map((project, i) => (
          <div key={i} style={{ flexShrink: 0, width: "280px" }}>
            <ProjectCard project={project} onOpen={onOpen} />
          </div>
        ))}
      </div>
      <button onClick={() => scroll(1)} style={arrowBtn("right")}>
        ›
      </button>
    </div>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <div
      onClick={() => onOpen(project)}
      style={{
        height: "170px",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
        cursor: "pointer",
        position: "relative",
        background: "#1a1a1a",
        transition: "border-color 0.2s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")
      }
    >
      <Image
        src={project.thumbnail}
        alt={project.title}
        fill
        style={{ objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "12px",
          left: "14px",
          right: "14px",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            fontWeight: "700",
            color: "#fff",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          {project.title}
        </p>
      </div>
    </div>
  );
}

function Modal({ project, onClose }) {
  if (!project) return null;
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '24px',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: '#181818', borderRadius: '16px',
        border: '1px solid rgba(255,255,255,0.1)', maxWidth: '560px', width: '100%', overflow: 'hidden',
      }}>
        <div style={{ position: 'relative', height: '260px', background: '#111' }}>
          <Image src={project.thumbnail} alt={project.title} fill style={{ objectFit: 'cover' }} />
          <button onClick={onClose} style={{
            position: 'absolute', top: '12px', right: '12px',
            width: '32px', height: '32px', borderRadius: '50%',
            background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.15)',
            color: '#fff', fontSize: '18px', display: 'flex', alignItems: 'center',
            justifyContent: 'center', cursor: 'pointer', lineHeight: 1,
          }}>×</button>
        </div>
        <div style={{ padding: '24px' }}>

          {/* Title row with external link */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#fff', margin: 0 }}>{project.title}</h2>
            {project.link && (
              
              <a href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '28px', height: '28px', borderRadius: '6px', flexShrink: 0,
                  background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            )}
          </div>

          <p style={{ fontSize: '14px', color: '#aaa', lineHeight: '1.7', marginBottom: '20px' }}>{project.description}</p>
          <p style={{ fontSize: '12px', color: '#555', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px', fontWeight: '600' }}>Tools Used</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.tools.map((tool) => (
              <span key={tool} style={{
                padding: '5px 12px', background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', fontSize: '13px', color: '#ccc',
              }}>{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


function arrowBtn(side) {
  return {
    position: "absolute",
    [side]: "-20px",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    background: "#2a2a2a",
    border: "1px solid rgba(255,255,255,0.15)",
    color: "#fff",
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    lineHeight: 1,
  };
}

export default function Profile() {
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsIsCarousel = projects.length > 4;

  const renderTechItem = (tech) => (
    <span
      style={{
        padding: "8px 14px",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "8px",
        fontSize: "13px",
        color: tech.color,
        fontWeight: "500",
        whiteSpace: "nowrap",
        display: "inline-block",
      }}
    >
      {tech.name}
    </span>
  );

  const renderCreativeItem = (tool) => (
    <span
      style={{
        padding: "8px 14px",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "8px",
        fontSize: "13px",
        color: "#ccc",
        fontWeight: "500",
        whiteSpace: "nowrap",
        display: "inline-block",
      }}
    >
      {tool}
    </span>
  );

  return (
    <>
      <Modal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <div
        style={{ padding: "48px 48px 0", maxWidth: "1200px", margin: "0 auto" }}
      >
        {/* Bio section */}
        <div
          style={{
            display: "flex",
            gap: "64px",
            marginBottom: "64px",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              width: "220px",
              height: "220px",
              flexShrink: 0,
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              position: "relative",
            }}
          >
            <img
              src="/images/2x2 EDITED.png"
              alt="Therenz Jaromohom"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "28px 80px",
              flex: 1,
              paddingTop: "16px",
            }}
          >
            {[
              { label: "Name:", value: "Therenz Andulana Jaromohom" },
              {
                label: "Niche:",
                value: "Text Logo Design & User-Centered UI/UX Solutions",
              },
              { label: "Email:", value: "jaromohomrenze231@gmail.com" },
              {
                label: "Education:",
                value: "Bachelor of Science in Information Technology - 2026",
              },
              { label: "Address:", value: "Mandaue City, Cebu, Philippines" },
              {
                label: "Certifications:",
                value: "Computer Systems Servicing National Certificate II",
              },
            ].map((item) => (
              <div key={item.label}>
                <span
                  style={{
                    color: "#888",
                    fontSize: "14px",
                    display: "block",
                    marginBottom: "4px",
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{ color: "#fff", fontSize: "14px", lineHeight: "1.5" }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack + Creative Stack */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            marginBottom: "64px",
          }}
        >
          <div style={{ minWidth: 0 }}>
            <h2
              style={{
                fontSize: "16px",
                fontWeight: "700",
                marginBottom: "24px",
                color: "#fff",
              }}
            >
              Tech Stack
            </h2>
            <AutoCarousel
              items={techStack}
              renderItem={renderTechItem}
              direction="left"
              speed={30}
            />
          </div>
          <div style={{ minWidth: 0 }}>
            <h2
              style={{
                fontSize: "16px",
                fontWeight: "700",
                marginBottom: "24px",
                color: "#fff",
              }}
            >
              Creative Management Stack
            </h2>
            <AutoCarousel
              items={creativeStack}
              renderItem={renderCreativeItem}
              direction="right"
              speed={25}
            />
          </div>
        </div>

        {/* Projects */}
        <div style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "16px",
              fontWeight: "700",
              marginBottom: "24px",
              color: "#fff",
            }}
          >
            Projects
          </h2>
          {projectsIsCarousel ? (
            <ProjectCarousel projects={projects} onOpen={setSelectedProject} />
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${projects.length}, 1fr)`,
                gap: "20px",
              }}
            >
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  onOpen={setSelectedProject}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
