import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { Button } from '../components/Button';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

export const Home = () => {
  const caseStudies = [
    {
      id: "clix",
      title: "CliX",
      subtitle: "A unified campaign engine to drive customer engagement & ROI",
      tags: ["#SaaS", "#B2B", "#CRM"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "fatca-crs",
      title: "FATCA-CRS",
      subtitle: "A mechanism for users to share FATCA-CRS related information",
      tags: ["#App", "#Fintech"],
      image: "https://images.unsplash.com/photo-1616077168712-fc6c788db4af?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "member-connect",
      title: "Member Connect",
      subtitle: "A networking platform for Tide users to connect and network",
      tags: ["#WebApp"],
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1200&auto=format&fit=crop",
    }
  ];

  const tools = [
    "Figma", "Framer", "Claude Code", "Google Antigravity",
    "Adobe Photoshop", "Adobe Illustrator", "Canva", "Google Analytics"
  ];

  const services = [
    {
      title: "UI/UX design",
      description: "I design clean interfaces that make your product easy to use and visually engaging, across web, mobile, or SaaS platforms."
    },
    {
      title: "Marketing design",
      description: "From landing pages and print design to social media creatives, I create marketing assets that look great and drive results."
    },
    {
      title: "Pitch decks",
      description: "I craft clear Pitch decks that show what your product does and why it matters, great for launches, demos, or investor pitches."
    }
  ];

  const faqs = [
    {
      question: "What type of websites do you design?",
      answer: "I specialize in Plug N Play Websites, custom landing pages, marketing websites, and high-performance Framer websites tailored for startups to drive conversions and growth."
    },
    {
      question: "Do you only design or also build the website?",
      answer: "I do both! As a full-stack designer, I design the user interface and user experience, and then build it out fully in Framer, HTML/CSS, or React depending on your team's needs."
    },
    {
      question: "How long does a typical website project take?",
      answer: "A standard landing page or marketing site takes about 2 to 4 weeks from initial strategy call to delivery, including design and development."
    },
    {
      question: "What do you need from me to get started?",
      answer: "I'll need an initial discovery call, any brand guidelines or assets you have, and your core business goals. We'll collaborate closely throughout."
    },
    {
      question: "Do you help with website content and copy?",
      answer: "Yes, I help structure and refine copywriting to ensure that the layout and messaging align perfectly to speak to your target audience."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Absolutely. I analyze your existing site's analytics and user pain points to redesign a modern, fast, and high-converting version."
    },
    {
      question: "How do we communicate during the project?",
      answer: "We'll communicate through Slack for daily updates and async feedback, and jump on quick Google Meet or Zoom syncs for key milestone approvals."
    }
  ];

  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div className="framer-grid">
      <div className="bg-gradient-glow"></div>
      
      {/* Hero Section */}
      <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <AnimatedSection>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '2rem', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.03)', marginBottom: '2rem', fontSize: '0.875rem', fontWeight: 500, color: 'var(--muted-foreground)' }}>
              <Sparkles size={14} className="text-gradient-purple" /> Hi, Sandeep here
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 style={{ maxWidth: '900px', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
              A creative <span className="text-gradient">full-stack designer</span> who solves business problems through design
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p style={{ maxWidth: '600px', fontSize: '1.25rem', marginBottom: '3rem' }}>
              I help startups enhance their product UX, visuals, and marketing design for growth. Over 7+ years of experience crafting seamless user flows and landing pages.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="#work" variant="primary">View Case Studies</Button>
              <Button href="#contact" variant="glass">Let's Talk <ArrowRight size={16} /></Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="section">
        <div className="container">
          <AnimatedSection>
            <div style={{ marginBottom: '4rem' }}>
              <span className="badge" style={{ marginBottom: '1rem' }}>Selected Work</span>
              <h2>Detailed projects with Case Studies</h2>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
            {caseStudies.map((study, idx) => (
              <AnimatedSection key={study.id} delay={idx * 0.1}>
                <Link to={`/${study.id}`} className="glass-card" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', padding: '2rem', overflow: 'hidden', minHeight: '400px', textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      {study.tags.map(t => <span key={t} className="badge">{t}</span>)}
                    </div>
                    <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{study.title}</h3>
                    <p style={{ marginBottom: '2rem' }}>{study.subtitle}</p>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: '#fff' }}>
                      View case study <ArrowRight size={16} />
                    </span>
                  </div>
                  <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '100%', minHeight: '300px', background: `url(${study.image}) center/cover no-repeat` }}></div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="grid-cols-2">
            <AnimatedSection>
              <span className="badge" style={{ marginBottom: '1rem' }}>About Me</span>
              <h2 style={{ marginBottom: '1.5rem' }}>A designer with founder's mindset</h2>
              <p style={{ marginBottom: '2rem' }}>
                I’m a full-stack designer who loves to handle everything design-related from start to finish for startups. I cover A to Z design needs for startups so they don’t have to worry about hiring multiple designers or agencies.
              </p>
              <p style={{ marginBottom: '2.5rem' }}>
                Whether it’s UX, UI, branding, pitch decks, product demo videos, social media, or marketing designs.
              </p>
              <Link to="/about">
                <Button variant="outline">Know More <ArrowRight size={16} /></Button>
              </Link>
            </AnimatedSection>

            <div>
              <AnimatedSection delay={0.2}>
                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Design stack that powers me</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                  {tools.map(tool => (
                    <div key={tool} className="glass" style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', fontSize: '0.95rem', fontWeight: 500 }}>
                      {tool}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '1rem' }}>Services</span>
              <h2>What I offer</h2>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {services.map((service, idx) => (
              <AnimatedSection key={service.title} delay={idx * 0.1}>
                <div className="glass-card" style={{ padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{service.title}</h3>
                  <p style={{ margin: 0 }}>{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            <AnimatedSection>
              <span className="badge" style={{ marginBottom: '1rem' }}>FAQs</span>
              <h2 style={{ marginBottom: '1.5rem' }}>Questions & Answers</h2>
              <p>Everything you need to know about working together to bring your designs to life.</p>
            </AnimatedSection>

            <div>
              <AnimatedSection delay={0.2}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {faqs.map((faq, idx) => {
                    const isOpen = activeFaq === idx;
                    return (
                      <div key={idx} style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                        <button onClick={() => setActiveFaq(isOpen ? null : idx)} style={{ width: '100%', background: 'none', border: 'none', color: '#fff', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer' }}>
                          <span>{faq.question}</span>
                          <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                            <ChevronDown size={18} />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} style={{ overflow: 'hidden' }}>
                              <p style={{ margin: '0.5rem 0 1rem 0', fontSize: '1rem', lineHeight: '1.6' }}>
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
