import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import { Button } from '../components/Button';
import { ArrowRight, Download } from 'lucide-react';

export const AboutPage = () => {
  const experiences = [
    {
      role: "UX Consultant",
      company: "SNDP Design",
      duration: "Aug 2023 - Present",
      description: "Working closely with startup founders to turn ideas into actionable designs, build design systems, and adapt products as they scale."
    },
    {
      role: "Product Designer",
      company: "Tide Platform",
      duration: "May 2021 - Jul 2023",
      description: "Designed core fintech solutions like Member Connect and FATCA-CRS compliance flows, collaborating with cross-functional product squads."
    },
    {
      role: "Product Designer",
      company: "Easyrewardz",
      duration: "Aug 2019 - Dec 2020",
      description: "Designed customer experience management solutions, focusing on omnichannel campaign dashboards and CRM tools."
    },
    {
      role: "Product Designer",
      company: "Corwhite Solution",
      duration: "Feb 2018 - May 2019",
      description: "Designed interactive web interfaces, landing pages, and responsive mobile layouts for various client services."
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Discovery Call",
      desc: "I start by understanding your users, product goals, and market context. Through stakeholder interviews, user research, and competitor analysis, I gather insights that lay the foundation for strategic design decisions."
    },
    {
      num: "02",
      title: "Strategy & Design",
      desc: "Based on real user needs, I map out user journeys, define information architecture, and create wireframes. This step focuses on designing intuitive, scalable experiences that align with both user behavior and business goals."
    },
    {
      num: "03",
      title: "Prototype & Test",
      desc: "I bring concepts to life with interactive prototypes and validate them through usability testing. This ensures we solve the right problems and refine the experience before investing in development."
    },
    {
      num: "04",
      title: "Handoff & Launch support",
      desc: "I prepare detailed design specs, design systems, and dev-ready assets to ensure smooth handoff. I also collaborate during development to maintain UX quality and provide support post-launch."
    }
  ];

  const reasons = [
    { title: "Collaborative mindset", desc: "I work closely with founders and teams, turning ideas into actionable designs and making feedback central to every step." },
    { title: "Tailored design", desc: "I design products that align with your startup’s mission and adapt as you grow." },
    { title: "User-first approach", desc: "I believe in fast iteration with rapid feedback loops to build what users want." },
    { title: "Scalable & Dev-ready", desc: "I build modern design systems that help your team ship faster and scale smoothly." }
  ];

  return (
    <div className="framer-grid" style={{ paddingTop: '6rem' }}>
      <div className="bg-gradient-glow"></div>
      
      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="grid-cols-2">
            <AnimatedSection>
              <span className="badge" style={{ marginBottom: '1rem' }}>About me</span>
              <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Sandeep Rathi</h1>
              <p style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '1.5rem' }}>
                Hello! I'm Sandeep Rathi, a passionate designer with over 7+ years of experience in creating visually appealing and user-friendly websites, mobile apps, and B2B SaaS applications that are both functional and engaging.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Recently, I've been focused on integrating AI and advanced personalisation into my design process to make digital experiences more intelligent and tailored to individual users.
              </p>
              <p style={{ marginBottom: '2.5rem' }}>
                Think of me as the Sherlock Holmes of user problems, minus the hat but definitely with the magnifying glass. With years of experience making products people want to use. I have a natural gift for spotting things that just aren't aligned (both in design and in life).
              </p>
              <Button href="#" variant="primary" style={{ gap: '0.75rem' }}>
                <Download size={18} /> Download Resume
              </Button>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '100%', minHeight: '420px', background: 'var(--muted)' }}>
                <img
                  src="https://framerusercontent.com/images/vlbWul4UcGklOy7Ck8WjAZbKCoY.png"
                  alt="Sandeep Rathi"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* Tool Grid */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h2 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2rem,4vw,3rem)' }}>Design stack that powers me</h2>
            <div className="tool-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem', justifyItems: 'center' }}>
              <img src="https://framerusercontent.com/images/VYREjSesJFovLQJZLUZLXgEB8.svg" alt="Figma" style={{ width: '80px', height: 'auto' }} />
              <img src="https://framerusercontent.com/images/4QqkF0Ms0htHylFOgdGYEgI3vZU.png" alt="Framer" style={{ width: '80px', height: 'auto' }} />
              <img src="https://framerusercontent.com/images/cu4MfUe9qRDMpZkhNA7m7eIhaM.png" alt="Claude Code" style={{ width: '80px', height: 'auto' }} />
              <img src="https://framerusercontent.com/images/WtN70LuAccwymwP9bpQERp8nUKI.png" alt="Google Antigravity" style={{ width: '80px', height: 'auto' }} />
              <img src="https://framerusercontent.com/images/8BXqYxWCABQYpygsVTmQQol49G4.svg" alt="Adobe Photoshop" style={{ width: '80px', height: 'auto' }} />
              <img src="https://framerusercontent.com/images/ES04aalL1L1mGZxLXAvW4YAm0.svg" alt="Adobe Illustrator" style={{ width: '80px', height: 'auto' }} />
              <img src="https://framerusercontent.com/images/ejlfOzqq3m6pOnRugW5I6hrDnk.svg" alt="Canva" style={{ width: '80px', height: 'auto' }} />
              <img src="https://framerusercontent.com/images/Qkhv72AlYoSCmBh7udmXuCFrE.svg" alt="Google Analytics" style={{ width: '80px', height: 'auto' }} />
            </div>
          </AnimatedSection>
        </div>
      </section>
      {/* Experience Timeline */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div style={{ marginBottom: '4rem' }}>
              <span className="badge" style={{ marginBottom: '1rem' }}>Timeline</span>
              <h2>My work experience</h2>
            </div>
          </AnimatedSection>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px' }}>
            {experiences.map((exp, idx) => (
              <AnimatedSection key={exp.company} delay={idx * 0.1}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.25rem' }}>{exp.role}</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--muted-foreground)', margin: 0 }}>{exp.company}</p>
                  </div>
                  <div style={{ color: 'var(--muted-foreground)', fontSize: '0.95rem' }}>
                    {exp.duration}
                  </div>
                  <div>
                    <p style={{ fontSize: '0.95rem', margin: 0 }}>{exp.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="section" style={{ background: '#080808' }}>
        <div className="container">
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="badge" style={{ marginBottom: '1rem' }}>Methodology</span>
              <h2>My creative workflow</h2>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {steps.map((step, idx) => (
              <AnimatedSection key={step.num} delay={idx * 0.1}>
                <div className="glass-card" style={{ padding: '2rem', height: '100%', border: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--muted-foreground)', marginBottom: '1rem' }}>{step.num}</div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{step.title}</h3>
                  <p style={{ fontSize: '0.95rem', margin: 0 }}>{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Ticker */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h2 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2rem,4vw,3rem)' }}>When I am not working, I am travelling</h2>
            <div className="travel-ticker" style={{ display: 'flex', overflowX: 'auto', gap: '1rem' }}>
              <img src="https://framerusercontent.com/images/iZPui1eFM6kgyvVNoLggi27xbk.png" alt="Ubud Bali Waterfall" style={{ height: '80px', borderRadius: '0.5rem' }} />
              <img src="https://framerusercontent.com/images/0NzwlpVm1URAdNdzsuhiK00MnPA.png" alt="Best Pho Soup, Vietnam" style={{ height: '80px', borderRadius: '0.5rem' }} />
              <img src="https://framerusercontent.com/images/tqK0TtcRNCjyQjnHlXzmUsOMv4Q.png" alt="SNDP Kuta, Bali" style={{ height: '80px', borderRadius: '0.5rem' }} />
              <img src="https://framerusercontent.com/images/8uiXBudGvmSvipjnRv83jb6EbA.png" alt="Kelingking Beach, Bali" style={{ height: '80px', borderRadius: '0.5rem' }} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="section" style={{ background: '#080808' }}>
        <div className="container">
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="badge" style={{ marginBottom: '1rem' }}>Partnership</span>
              <h2>Why work with me</h2>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {reasons.map((reason, idx) => (
              <AnimatedSection key={reason.title} delay={idx * 0.1}>
                <div className="glass-card" style={{ padding: '2rem', height: '100%' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{reason.title}</h3>
                  <p style={{ fontSize: '0.95rem', margin: 0 }}>{reason.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
