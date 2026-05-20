import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { Button } from '../components/Button';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

export const MemberConnect = () => {
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
              <span className="badge">#WebApp</span>
              <span className="badge">#Fintech</span>
            </div>
            
            <h1 style={{ marginBottom: '2rem', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Member Connect — A platform for Tide users to network
            </h1>
            
            <p style={{ fontSize: '1.35rem', maxWidth: '800px', lineHeight: '1.5', color: '#fff', marginBottom: '3rem' }}>
              Connecting small business owners, sole traders, and freelancers directly inside the Tide app to help them list services and source local suppliers.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
              <div>
                <h4 style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Role</h4>
                <p style={{ fontSize: '1.05rem', color: '#fff' }}>UX / Lead Product Designer</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Timeline</h4>
                <p style={{ fontSize: '1.05rem', color: '#fff' }}>6 Weeks (B2B App Integration)</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Target Audience</h4>
                <p style={{ fontSize: '1.05rem', color: '#fff' }}>SMEs & Sole Traders</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Problem */}
      <section className="section">
        <div className="container">
          <div className="grid-cols-2">
            <AnimatedSection>
              <h2 style={{ marginBottom: '1.5rem' }}>The Opportunity & Challenge</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                We identified a clear gap in the market. While massive professional networks like LinkedIn exist, there is no dedicated, trusted, transaction-friendly platform where small business owners can seamlessly showcase their services and transact with peers.
              </p>
              <p>
                SMEs and MSMEs struggle with discoverability, marketing budget limitations, and establishing initial credibility. The challenge was to design a mobile-first networking suite directly inside the Tide banking app to empower entrepreneurs.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Core Audience Pain Points</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: '#fff', marginTop: '0.2rem', shrink: 0 }} />
                  <span><strong>Limited Marketing Budgets:</strong> Small businesses lack the capital to run aggressive lead-gen campaigns.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: '#fff', marginTop: '0.2rem', shrink: 0 }} />
                  <span><strong>Complex General Networks:</strong> Platforms like LinkedIn are often noisy and not optimized for direct small-business sourcing.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: '#fff', marginTop: '0.2rem', shrink: 0 }} />
                  <span><strong>Lack of Verified Trust:</strong> Transacting with external freelancers involves security risks that an integrated, KYC-verified banking platform resolves.</span>
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section" style={{ background: '#080808' }}>
        <div className="container">
          <AnimatedSection>
            <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}>Tailored Feature Suite</h2>
            <p style={{ marginBottom: '4rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
              We built features specifically focused on lead generation, service listing, and simple networking.
            </p>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { title: "Business Profiles", desc: "Showcase services, portfolios, certifications, and verified client reviews." },
              { title: "Service Listings", desc: "Easy templates to quickly list services with tags and categories." },
              { title: "Smart Networking", desc: "Filter connections by industry, business needs, and location." },
              { title: "Lead Generation", desc: "Post requests for quotes directly to other members in the network." }
            ].map((feat, index) => (
              <AnimatedSection key={feat.title} delay={index * 0.1}>
                <div className="glass-card" style={{ padding: '2rem', height: '100%' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{feat.title}</h3>
                  <p style={{ fontSize: '0.95rem', margin: 0 }}>{feat.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Usability & Reflection */}
      <section className="section">
        <div className="container">
          <div className="grid-cols-2">
            <AnimatedSection>
              <h2 style={{ marginBottom: '1.5rem' }}>Design Process & Testing</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                We ran collaborative FigJam brainstorming sessions with cross-functional product squads. The critical challenge was balancing powerful features with the restricted real estate of a mobile banking app.
              </p>
              <p>
                We conducted multiple rounds of mobile usability tests to streamline the listing and messaging flows. We simplified the layout, prioritized local results, and created a quick quote request template.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Impact & Reflection</h3>
                <p style={{ marginBottom: '1rem' }}>
                  The beta launch was received with high enthusiasm. Key takeaways included:
                </p>
                <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem' }}>
                  <li>Increased local peer-to-peer business networking.</li>
                  <li>Higher quote turnaround times due to verified profile credibility.</li>
                  <li>Positive feedback regarding the app's clean navigation.</li>
                </ul>
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
            <h2 style={{ marginBottom: '2.5rem' }}>CliX Campaign Engine</h2>
            <Link to="/clix">
              <Button variant="primary">Next Project <ArrowRight size={16} /></Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};
