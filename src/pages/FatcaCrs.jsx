import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { Button } from '../components/Button';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

export const FatcaCrs = () => {
  return (
    <div className="framer-grid" style={{ paddingTop: '6rem' }}>
      <div className="bg-gradient-glow"></div>
      
      {/* Header */}
      <section className="section" style={{ borderBottom: '1px solid var(--border)', paddingBottom: '4rem' }}>
        <div className="container">
          <AnimatedSection>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted-foreground)', marginBottom: '3rem', fontSize: '0.95rem' }}>
              <ArrowLeft size={16} /> Back to projects
            </Link>
            
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <span className="badge">#App</span>
              <span className="badge">#Fintech</span>
            </div>
            
            <h1 style={{ marginBottom: '2rem', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              FATCA-CRS Compliance Flow for Tide App
            </h1>
            
            <p style={{ fontSize: '1.35rem', maxWidth: '800px', lineHeight: '1.5', color: '#fff', marginBottom: '3rem' }}>
              Designing a secure and simple mechanism to gather regulatory tax residency data from Tide’s small business owners while maintaining high trust.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
              <div>
                <h4 style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Role</h4>
                <p style={{ fontSize: '1.05rem', color: '#fff' }}>Product Designer (Tide)</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Timeline</h4>
                <p style={{ fontSize: '1.05rem', color: '#fff' }}>4 Weeks (B2B Fintech App)</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Core Challenge</h4>
                <p style={{ fontSize: '1.05rem', color: '#fff' }}>Simplifying Complex Legal Jargon</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Challenge */}
      <section className="section">
        <div className="container">
          <div className="grid-cols-2">
            <AnimatedSection>
              <h2 style={{ marginBottom: '1.5rem' }}>Understanding the Challenge</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                FATCA (Foreign Account Tax Compliance Act) and CRS (Common Reporting Standard) are international regulations requiring banks and fintechs to report account details of customers with ties to the US.
              </p>
              <p>
                Tide needed a secure and simple way to collect this information from users and share it with tax authorities. Many Tide users are busy small business owners with limited tax compliance knowledge, so the challenge was to create an experience that guides them without generating anxiety or leading to support calls.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Research Insights</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: '#fff', marginTop: '0.2rem', shrink: 0 }} />
                  <span><strong>Terminology:</strong> Users get intimidated by tax jargon. Clear, plain-language explanations are vital.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: '#fff', marginTop: '0.2rem', shrink: 0 }} />
                  <span><strong>Security Concerns:</strong> Sharing sensitive shareholder info, SSNs, or EINs requires reassuring security prompts.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: '#fff', marginTop: '0.2rem', shrink: 0 }} />
                  <span><strong>Information Overload:</strong> Presenting too much text at once causes drop-offs. A step-by-step approach is optimal.</span>
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* User Flow / Steps */}
      <section className="section" style={{ background: '#080808' }}>
        <div className="container">
          <AnimatedSection>
            <h2 style={{ marginBottom: '3rem', textAlign: 'center' }}>The User Journey</h2>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              { step: "01", name: "In-App Prompt", desc: "User receives a clear prompt on their Profile or Account screen." },
              { step: "02", name: "FATCA-CRS Intro", desc: "Educating users on why this reporting is required in simple terms." },
              { step: "03", name: "US Person Check", desc: "Determining if they or shareholders have ties to the US." },
              { step: "04", name: "Data Collection", desc: "Gathering SSN/EIN details with secure text fields." },
              { step: "05", name: "Review & Terms", desc: "Verifying details and submitting securely." }
            ].map((flow, index) => (
              <AnimatedSection key={flow.step} delay={index * 0.1}>
                <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', height: '100%' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'rgba(255,255,255,0.05)', marginBottom: '0.5rem' }}>{flow.step}</div>
                  <h4 style={{ marginBottom: '0.5rem' }}>{flow.name}</h4>
                  <p style={{ fontSize: '0.9rem', margin: 0 }}>{flow.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Usability & Outcome */}
      <section className="section">
        <div className="container">
          <div className="grid-cols-2">
            <AnimatedSection>
              <h2 style={{ marginBottom: '1.5rem' }}>Testing & Validation</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                We conducted usability tests with 10 Tide business owners who had no prior compliance knowledge.
              </p>
              <p>
                Users praised the progressive disclosure structure. Reassuring security icons and transparent data usage descriptions significantly reduced user hesitancy around entering taxpayer identification numbers.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="glass-card" style={{ padding: '3rem', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Outcomes & Metrics</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  <div>
                    <h4 style={{ fontSize: '2.5rem', color: '#fff' }}>94%</h4>
                    <p style={{ fontSize: '0.875rem', margin: 0 }}>Completion Rate</p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '2.5rem', color: '#fff' }}>-60%</h4>
                    <p style={{ fontSize: '0.875rem', margin: 0 }}>Drop in Support Tickets</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Next */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <AnimatedSection>
            <p style={{ marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Explore Next Project</p>
            <h2 style={{ marginBottom: '2.5rem' }}>Member Connect</h2>
            <Link to="/member-connect">
              <Button variant="primary">Next Project <ArrowRight size={16} /></Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};
