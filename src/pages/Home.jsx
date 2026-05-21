import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { Button } from '../components/Button';
import { ArrowRight, ChevronDown, Sparkles, ExternalLink } from 'lucide-react';

const IMG = (path) => `https://framerusercontent.com/images/${path}`;

export const Home = () => {
  const caseStudies = [
    {
      id: 'clix',
      title: 'CliX',
      subtitle: 'A unified campaign engine to drive customer engagement & ROI',
      tags: ['# SaaS', '# B2B', '# CRM'],
      image: IMG('2oynPfN9JCVFQtPk0Ps1OcrYwJ4.png'),
    },
    {
      id: 'fatca-crs',
      title: 'FATCA-CRS',
      subtitle: 'A mechanism for users to share FATCA-CRS related information',
      tags: ['# App', '# Fintech'],
      image: IMG('luSiyMa05IgeA9uZ14JSJ2qHBM.png'),
    },
    {
      id: 'member-connect',
      title: 'Member Connect',
      subtitle: 'A networking platform for Tide users to connect and network',
      tags: ['# WebApp'],
      image: IMG('esewzOyQAK1jQiKmZbeVNLSojPI.png'),
    },
  ];

  const plugNPlay = [
    { name: 'Raymo', url: 'https://raymo.framer.website/', img: IMG('BmF0jDLuM54wujBCskg9M8nGsjU.png') },
    { name: 'Monzaa', url: 'https://monzaa.framer.website/', img: IMG('aqgdjIh3RbyijlEg8FfnRir1Uo.png') },
    { name: 'Tresky', url: 'https://tresky.framer.website/', img: IMG('tKtPKKJJVwWccjQZtkv0SSC3RA.png') },
  ];

  const portfolioCategories = {
    'Websites Design': [
      { title: 'Marvelous Interior', img: IMG('RRz1IvyDEmfjHklC0tJpc6g.png') },
      { title: 'Finance', img: IMG('cy2sSPXW69Jg6PimptURjAZSaE.png') },
      { title: 'Zeepay Payment', img: IMG('bAzmR9yTBtIaCsE20YeaokcCBHg.png') },
      { title: 'Payment Gateway', img: IMG('VYv1BQ9usZUikJ5y37gkHVtbaWE.png') },
      { title: 'Interior', img: IMG('ZT7HnFHbRUnjSXSVxCWNcx2VRV0.png') },
      { title: 'QuikTax', img: IMG('Griv68dOZ1ZoRia61WV3y81IBJI.png') },
    ],
    'Mobile Apps Design': [
      { title: 'Covid Onboarding', img: IMG('ubthHrEL4eid83iKwnyhwSZgM5Y.png') },
      { title: 'Login Screens', img: IMG('HrDMqq8s43PNoHKSeyp19ewpsBA.png') },
      { title: 'Movie Booking', img: IMG('NEXSkieqmFpOZX5NG2SiRS4ITng.png') },
      { title: 'Payment App', img: IMG('DeYmypbxykQi3KHDGQNHVyb7tA.png') },
      { title: 'Campaign Manager', img: IMG('SvQHWl1m4ViqRu1Bm8dMHEu3Y.png') },
      { title: 'Onboarding Screens', img: IMG('uPDHLYSQyVJKJxNbsoQKqWrblQ.png') },
      { title: 'Crypto App', img: IMG('xJcCISzoPj5XL4BjtpnY19sPTRk.png') },
      { title: 'Shopping App', img: IMG('HwVZO3H30xwbOyLbZNnv5nOmP2g.png') },
    ],
    'B2B SaaS Apps Design': [
      { title: 'Kazarion Cloud', img: IMG('ApAMQ6gWXAYWOl63RLNxJByZ9xY.png') },
      { title: 'Gonzore PM', img: IMG('Cf1R7b600hhaXf1FE4lTeGbo2yw.png') },
      { title: 'Morcloud', img: IMG('PnOM3zOUo3CCDWATOmXDUhk8.png') },
      { title: 'Beetrack PM', img: IMG('KC7oiegkavZGJ6vC1vOhNRX0k.png') },
      { title: 'Dochub Clinic', img: IMG('gfOLQ97HaYauq0PAkGSdkPZRos.png') },
      { title: 'Marcello CRM', img: IMG('4YE2F4e2OM7DGJ0STRFWY4OAVVw.png') },
    ],
  };

  const tools = [
    { name: 'Figma', img: IMG('VYREjSesJFovLQJZLUZLXgEB8.svg') },
    { name: 'Framer', img: IMG('4QqkF0Ms0htHylFOgdGYEgI3vZU.png') },
    { name: 'Claude Code', img: IMG('cu4MfUe9qRDMpZkhNA7m7eIhaM.png') },
    { name: 'Google Antigravity', img: IMG('WtN70LuAccwymwP9bpQERp8nUKI.png') },
    { name: 'Adobe Photoshop', img: IMG('8BXqYxWCABQYpygsVTmQQol49G4.svg') },
    { name: 'Adobe Illustrator', img: IMG('ES04aalL1L1mGZxLXAvW4YAm0.svg') },
    { name: 'Canva', img: IMG('ejlfOzqq3m6pOnRugW5I6hrDnk.svg') },
    { name: 'Google Analytics', img: IMG('Qkhv72AlYoSCmBh7udmXuCFrE.svg') },
  ];

  const services = [
    {
      title: 'UI/UX design',
      description: 'I design clean interfaces that make your product easy to use and visually engaging, across web, mobile, or SaaS platforms.',
    },
    {
      title: 'Marketing design',
      description: 'From landing pages and print design to social media creatives, I create marketing assets that look great and drive results.',
    },
    {
      title: 'Pitch decks',
      description: 'I craft clear Pitch decks that show what your product does and why it matters, great for launches, demos, or investor pitches.',
    },
  ];

  const faqs = [
    {
      question: 'What type of websites do you design?',
      answer: 'I specialize in Plug N Play Websites, custom landing pages, marketing websites, and high-performance Framer websites tailored for startups to drive conversions and growth.',
    },
    {
      question: 'Do you only design or also build the website?',
      answer: "I do both! As a full-stack designer, I design the user interface and user experience, and then build it out fully in Framer, HTML/CSS, or React depending on your team's needs.",
    },
    {
      question: 'How long does a typical website project take?',
      answer: 'A standard landing page or marketing site takes about 2 to 4 weeks from initial strategy call to delivery, including design and development.',
    },
    {
      question: 'What do you need from me to get started?',
      answer: "I'll need an initial discovery call, any brand guidelines or assets you have, and your core business goals. We'll collaborate closely throughout.",
    },
    {
      question: 'Do you help with website content and copy?',
      answer: 'Yes, I help structure and refine copywriting to ensure that the layout and messaging align perfectly to speak to your target audience.',
    },
    {
      question: 'Can you redesign my existing website?',
      answer: "Absolutely. I analyze your existing site's analytics and user pain points to redesign a modern, fast, and high-converting version.",
    },
    {
      question: 'How do we communicate during the project?',
      answer: "We'll communicate through Slack for daily updates and async feedback, and jump on quick Google Meet or Zoom syncs for key milestone approvals.",
    },
  ];

  const [activeFaq, setActiveFaq] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Websites Design');

  return (
    <div className="framer-grid" style={{ position: 'relative' }}>
      <div className="bg-gradient-glow"></div>

      {/* ─── HERO ─── */}
      <section className="section" style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <AnimatedSection>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '2rem', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.03)', marginBottom: '2rem', fontSize: '0.875rem', fontWeight: 500, color: 'var(--muted-foreground)' }}>
              <img
                src={IMG('KRORLOhqrNYQyVZH9EqFlzNdKg.png')}
                alt="SNDP Memoji"
                style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <Sparkles size={14} style={{ color: '#a78bfa' }} />
              <span>Hi, Sandeep here</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 style={{ maxWidth: '900px', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
              A creative <span className="text-gradient">full-stack designer</span> who solves business problems through design
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p style={{ maxWidth: '600px', fontSize: '1.25rem', marginBottom: '3rem' }}>
              I'm Sandeep Rathi, a UX/Product designer with 7+ years of experience creating user-friendly websites, mobile apps &amp; B2B SaaS applications. I help startups enhance their product UX, visuals, and marketing design for growth.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="#work" variant="primary">View Case Studies</Button>
              <Button href="/contact" variant="glass">Let's Talk <ArrowRight size={16} /></Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SELECTED WORK / CASE STUDIES ─── */}
      <section id="work" className="section">
        <div className="container">
          <AnimatedSection>
            <div style={{ marginBottom: '4rem' }}>
              <span className="badge" style={{ marginBottom: '1rem' }}>Case Studies</span>
              <h2>Detailed projects with Case Studies</h2>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }}>
            {caseStudies.map((study, idx) => (
              <AnimatedSection key={study.id} delay={idx * 0.1}>
                <Link
                  to={`/${study.id}`}
                  className="glass-card"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    padding: '2rem',
                    overflow: 'hidden',
                    minHeight: '380px',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                      {study.tags.map(t => <span key={t} className="badge">{t}</span>)}
                    </div>
                    <h3 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>{study.title}</h3>
                    <p style={{ marginBottom: '2rem' }}>{study.subtitle}</p>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>
                      View case study <ArrowRight size={16} />
                    </span>
                  </div>
                  <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', minHeight: '260px', background: `url(${study.image}) center/cover no-repeat` }}></div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PLUG N PLAY WEBSITES ─── */}
      <section id="plug-n-play" className="section" style={{ background: '#080808' }}>
        <div className="container">
          <AnimatedSection>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span className="badge" style={{ marginBottom: '1rem' }}>Ready-made Templates</span>
                <h2>Plug N Play Websites</h2>
              </div>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {plugNPlay.map((item, idx) => (
              <AnimatedSection key={item.name} delay={idx * 0.1}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card"
                  style={{ display: 'block', padding: '0', overflow: 'hidden', textDecoration: 'none', color: 'inherit' }}
                >
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                    />
                  </div>
                  <div style={{ padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>{item.name}</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--muted-foreground)', border: '1px solid var(--border)', padding: '0.35rem 0.75rem', borderRadius: '2rem' }}>
                      Buy Now <ExternalLink size={12} />
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO CATEGORIES ─── */}
      <section id="portfolio" className="section">
        <div className="container">
          <AnimatedSection>
            <div style={{ marginBottom: '3rem' }}>
              <span className="badge" style={{ marginBottom: '1rem' }}>Portfolio</span>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                {Object.keys(portfolioCategories).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      padding: '0.6rem 1.25rem',
                      borderRadius: '2rem',
                      background: activeCategory === cat ? 'rgba(255,255,255,0.12)' : 'transparent',
                      border: `1px solid ${activeCategory === cat ? 'rgba(255,255,255,0.25)' : 'var(--border)'}`,
                      color: activeCategory === cat ? '#fff' : 'var(--muted-foreground)',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: activeCategory === cat ? 600 : 400,
                      transition: 'all 0.2s ease',
                      fontFamily: 'inherit',
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}
          >
            {portfolioCategories[activeCategory].map((item, idx) => (
              <div
                key={item.title}
                className="glass-card"
                style={{ padding: '0', overflow: 'hidden' }}
              >
                <div style={{ height: '180px', overflow: 'hidden', background: '#111' }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '1rem 1.25rem' }}>
                  <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600 }}>{item.title}</h4>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── ABOUT ME ─── */}
      <section id="about" className="section" style={{ background: '#080808' }}>
        <div className="container">
          <div className="grid-cols-2">
            <AnimatedSection>
              <span className="badge" style={{ marginBottom: '1rem' }}>About Me</span>
              <h2 style={{ marginBottom: '1.5rem' }}>A designer with founder's mindset</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                I'm a full-stack designer who loves to handle everything design-related from start to finish for startups. I cover A to Z design needs for startups so they don't have to worry about hiring multiple designers or agencies.
              </p>
              <p style={{ marginBottom: '2.5rem' }}>
                Whether it's UX, UI, branding, pitch decks, product demo videos, social media, or marketing designs.
              </p>
              <Link to="/about">
                <Button variant="outline">Know More <ArrowRight size={16} /></Button>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Design stack that powers me</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                  {tools.map(tool => (
                    <div
                      key={tool.name}
                      className="glass"
                      style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
                    >
                      <img src={tool.img} alt={tool.name} style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
                      <span style={{ fontSize: '0.7rem', color: 'var(--muted-foreground)', textAlign: 'center', fontWeight: 500, lineHeight: 1.3 }}>{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── MY SERVICES ─── */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '1rem' }}>My Services</span>
              <h2>What I offer</h2>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {services.map((service, idx) => (
              <AnimatedSection key={service.title} delay={idx * 0.1}>
                <div className="glass-card" style={{ padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
                    {idx === 0 ? '✦' : idx === 1 ? '◈' : '◇'}
                  </div>
                  <h3 style={{ marginBottom: '1rem', fontSize: '1.4rem' }}>{service.title}</h3>
                  <p style={{ margin: 0, lineHeight: 1.7 }}>{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQs ─── */}
      <section className="section" style={{ background: '#080808' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            <AnimatedSection>
              <span className="badge" style={{ marginBottom: '1rem' }}>FAQs</span>
              <h2 style={{ marginBottom: '1.5rem' }}>Questions &amp; Answers</h2>
              <p>Everything you need to know about working together to bring your designs to life.</p>
            </AnimatedSection>

            <div>
              <AnimatedSection delay={0.2}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {faqs.map((faq, idx) => {
                    const isOpen = activeFaq === idx;
                    return (
                      <div key={idx} style={{ borderBottom: '1px solid var(--border)' }}>
                        <button
                          onClick={() => setActiveFaq(isOpen ? null : idx)}
                          style={{
                            width: '100%',
                            background: 'none',
                            border: 'none',
                            color: '#fff',
                            textAlign: 'left',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '1.25rem 0',
                            fontSize: '1rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            fontFamily: 'inherit',
                            gap: '1rem',
                          }}
                        >
                          <span>{faq.question}</span>
                          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ flexShrink: 0 }}>
                            <ChevronDown size={18} />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              style={{ overflow: 'hidden' }}
                            >
                              <p style={{ margin: '0 0 1.25rem 0', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--muted-foreground)' }}>
                                {faq.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
