import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { Button } from '../components/Button';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

const IMG = (path) => `https://framerusercontent.com/images/${path}`;

export const MemberConnect = () => {
  return (
    <div className="framer-grid" style={{ paddingTop: '6rem' }}>
      <div className="bg-gradient-glow"></div>
      
      {/* Case Study Header */}
      <section className="section" style={{ borderBottom: '1px solid var(--border)', paddingBottom: '4rem' }}>
        <div className="container">
          <AnimatedSection>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted-foreground)', marginBottom: '3rem', fontSize: '0.95rem' }}>
              <ArrowLeft size={16} /> Back to projects
            </Link>
            
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <span className="badge">B2B Fintech App | 6 Weeks</span>
            </div>
            
            <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Member Connect - A platform for Tide users to network
            </h1>
            
            <p style={{ fontSize: '1.35rem', maxWidth: '800px', lineHeight: '1.5', color: '#fff', marginBottom: '3rem' }}>
              Member Connect, where SMEs can list their services, connect with potential clients, and establish a strong B2B network.
            </p>

            <div className="hero-image" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <img src={IMG('esewzOyQAK1jQiKmZbeVNLSojPI.png')} alt="Member Connect Hero" style={{ maxWidth: '100%', height: 'auto', borderRadius: 'var(--radius-lg)' }} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section">
        <div className="container">
          <div className="grid-cols-2">
            <AnimatedSection>
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Understanding the problem</h4>
              <p style={{ marginBottom: '1.5rem' }}>
                We identified a gap in the market. While there are plenty of platforms for professionals (e.g. LinkedIn), there isn’t a dedicated platform where small businesses can showcase their services and connect with other business owners. SMEs and MSMEs often struggle with visibility, attracting new clients, and growing their businesses.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>The challenge</h4>
              <p style={{ marginBottom: '3rem' }}>
                The challenge was to design a user-friendly platform that catered to small businesses to showcase their services and connect with other businesses, providing them with the tools they needed to thrive in a competitive B2B environment.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#080808' }}>
        <div className="container">
          <div className="grid-cols-2">
            <AnimatedSection>
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Research & Discovery</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                <div>
                  <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Target Audience</h5>
                  <p>Sole traders and small registered company entrepreneurs</p>
                </div>
                <div>
                  <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Primary Needs</h5>
                  <p>Visibility: A platform to showcase their services, products, and expertise.<br/>Networking: The ability to connect with other entrepreneurs for partnerships, collaborations, and sales.</p>
                </div>
                <div>
                  <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Pain Points</h5>
                  <p>Limited Resources: Unlike larger companies, SMEs and MSMEs often have limited marketing budgets and resources.<br/>Complexity of Existing Platforms: Current platforms like LinkedIn are often too complex or not tailored for B2B networking among smaller businesses.</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Key insights from research</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                <div>
                  <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Easy to use</h5>
                  <p>The platform needed to be intuitive, simple, and provide an efficient, seamless experience for all users.</p>
                </div>
                <div>
                  <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Useful features</h5>
                  <p>The platform should help lead generation, service listing, and essential small business features.</p>
                </div>
                <div>
                  <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Credibility</h5>
                  <p>Trust-building features were essential to businesses to establish credibility in the marketplace.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Brainstorming Session</h4>
            <p style={{ marginBottom: '2rem' }}>
              For brainstorming, we used FigJam since we were all working remotely. Each week, we held team meetings to review progress and determine the next steps for the project.
            </p>
            <div className="image-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '4rem' }}>
              <img src={IMG('0IRQwCGUds2PVi4ZslpATZhe6I.png')} alt="Brainstorming 1" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
              <img src={IMG('3cZAybG6zi8dzM9hWlmqEFmfA.png')} alt="Brainstorming 2" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>User Flows</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem' }}>
              <div>
                <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Onboarding Flow</h5>
                <p>Built a simple onboarding so users swiftly set up essential business profiles.</p>
              </div>
              <div>
                <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Service Listing Flow</h5>
                <p>Streamlined service listing allowed businesses to categorize, describe, and price offerings effectively.</p>
              </div>
              <div>
                <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Connection Flow</h5>
                <p>Built feature enabling users to connect by industry, business needs, or location.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 style={{ marginBottom: '3rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Features</h2>
          </AnimatedSection>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', marginBottom: '4rem' }}>
            <AnimatedSection>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Business Profiles</h3>
              <p style={{ marginBottom: '2rem' }}>Comprehensive profiles that allow businesses to showcase their services, certifications, portfolios, and customer reviews.</p>
              <img src={IMG('CjT8qDkTDcCOYR5dc5sAwpBjhBM.png')} alt="Business Profiles" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
            </AnimatedSection>
            
            <AnimatedSection>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Service Listings</h3>
              <p style={{ marginBottom: '2rem' }}>Easy-to-use templates for listing services, with options to categorize and tag services for better discoverability.</p>
              <img src={IMG('DxGixgZn6fys0nxFqd2VAPbfSAU.png')} alt="Service Listings" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
            </AnimatedSection>

            <AnimatedSection>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Networking & Connections</h3>
              <p style={{ marginBottom: '2rem' }}>A simplified connection feature, allowing businesses to network based on industry, geographic location, and business needs. In-platform messaging for seamless communication between businesses.</p>
              <img src={IMG('GJ7SaIpKYvgG5s9lilNdFTI88.png')} alt="Networking" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
            </AnimatedSection>

            <AnimatedSection>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Lead Generation</h3>
              <p style={{ marginBottom: '2rem' }}>A feature where businesses can post service requests and solicit quotes from other businesses.</p>
              <img src={IMG('GUj29nkDrCgoam7QlhrvnQI7ATE.png')} alt="Lead Generation" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
            </AnimatedSection>

            <AnimatedSection>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>List your services</h3>
              <p style={{ marginBottom: '2rem' }}>A feature where businesses can post services and solicit offerings of their businesses. Share the basic information about the business and its offerings.</p>
              <img src={IMG('JACa9SZhl4xuhWUOjcV9vNdLXU.png')} alt="List services" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#080808' }}>
        <div className="container">
          <div className="grid-cols-2">
            <AnimatedSection>
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Challenges & Solutions</h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                <div>
                  <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Balancing simplicity with functionality</h5>
                  <p>Challenge: Ensuring the platform was simple enough for time-strapped business owners while still offering powerful features.</p>
                  <p>Solution: Conducted multiple rounds of usability testing and prioritized features based on user feedback.</p>
                </div>
                <div>
                  <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Mobile Usability</h5>
                  <p>Challenge: Ensuring the platform worked seamlessly on mobile devices.</p>
                  <p>Solution: Designed a mobile-first experience, prioritizing key actions and reducing unnecessary steps in the mobile interface.</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Outcome & Impact</h4>
              <p style={{ marginBottom: '2rem' }}>
                The platform launched successfully and continues to evolve based on ongoing user feedback, with plans to introduce additional features like AI-driven recommendations and expanded analytics. The final product was well-received by the beta users. Key outcomes included:
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: '#fff', marginTop: '0.2rem', shrink: 0 }} />
                  <span>Increased Visibility: Users reported higher engagement and better lead generation compared to other platforms.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: '#fff', marginTop: '0.2rem', shrink: 0 }} />
                  <span>Positive Feedback: Users appreciated the platform’s simplicity and the tailored features that catered to their needs.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: '#fff', marginTop: '0.2rem', shrink: 0 }} />
                  <span>Network Growth: Businesses were able to expand networks, resulting in new partnerships.</span>
                </li>
              </ul>
              
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Reflection</h4>
              <p style={{ marginBottom: '1.5rem' }}>
                Designing a B2B platform for SMEs and MSMEs required a deep understanding of the unique challenges and needs of small businesses. By focusing on simplicity, trust-building, and usability, we were able to create a platform that empowers these businesses to connect, grow, and succeed in the competitive B2B marketplace.
              </p>
              <p style={{ marginBottom: '3rem' }}>
                The project highlighted the importance of user-centered design and iterative testing in creating products that truly meet the needs of their users.
              </p>
              
              <Button href="#" variant="primary" style={{ display: 'inline-flex' }}>Check out Member Connect in action <ArrowRight size={16} /></Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Explore Next */}
      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <AnimatedSection>
            <h2 style={{ marginBottom: '3rem', textAlign: 'center' }}>Explore next projects​</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <Link to="/clix" className="glass-card" style={{ padding: '2rem', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <span className="badge"># SaaS</span>
                    <span className="badge"># B2B</span>
                    <span className="badge"># CRM</span>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>CliX</h3>
                  <p style={{ color: 'var(--muted-foreground)', marginBottom: '2rem' }}>A unified campaign engine to drive customer engagement & ROI</p>
                </div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>View case study <ArrowRight size={16} /></span>
              </Link>
              
              <Link to="/fatca-crs" className="glass-card" style={{ padding: '2rem', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <span className="badge"># App</span>
                    <span className="badge"># Fintech</span>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>FATCA-CRS</h3>
                  <p style={{ color: 'var(--muted-foreground)', marginBottom: '2rem' }}>A mechanism for users to share FATCA-CRS related information</p>
                </div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>View case study <ArrowRight size={16} /></span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};
