import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { Button } from '../components/Button';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

const IMG = (path) => `https://framerusercontent.com/images/${path}`;

export const FatcaCrs = () => {
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
              <span className="badge">B2B Fintech App | 4 Weeks</span>
            </div>
            
            <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              FATCA-CRS compliance flow for Tide app
            </h1>
            
            <p style={{ fontSize: '1.35rem', maxWidth: '800px', lineHeight: '1.5', color: '#fff', marginBottom: '1.5rem' }}>
              FATCA (Foreign Account Tax Compliance Act) and CRS (Common Reporting Standard) are international compliance rules that require banks to report account details of customers with ties to the US.
            </p>
            <p style={{ fontSize: '1.35rem', maxWidth: '800px', lineHeight: '1.5', color: '#fff', marginBottom: '3rem' }}>
              Tide needed a secure and simple way to collect this info from users and share it with the US tax authorities while staying compliant.
            </p>

            <div className="hero-image" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <img src={IMG('luSiyMa05IgeA9uZ14JSJ2qHBM.png')} alt="FATCA-CRS Hero" style={{ maxWidth: '100%', height: 'auto', borderRadius: 'var(--radius-lg)' }} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section">
        <div className="container">
          <div className="grid-cols-2">
            <AnimatedSection>
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Project objectives</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: '#fff', marginTop: '0.2rem', shrink: 0 }} />
                  <span>Ensure full compliance with FATCA-CRS regulations by collecting relevant data from Tide users.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: '#fff', marginTop: '0.2rem', shrink: 0 }} />
                  <span>Create a simple, user-friendly flow that minimizes confusion and helps users understand the importance of their responses.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: '#fff', marginTop: '0.2rem', shrink: 0 }} />
                  <span>Maintain a secure and confidential environment for users to provide sensitive information.</span>
                </li>
              </ul>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Understanding the problem</h4>
              <p style={{ marginBottom: '3rem' }}>
                Tide must gather data on whether customers or any of their company’s shareholders have ties to US-based businesses. Many of our users are small business owners with limited knowledge of tax compliance, so the challenge was to create an experience that guides users through the FATCA-CRS process without overwhelming them.
              </p>
              
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>My role</h4>
              <p style={{ marginBottom: '3rem' }}>
                As a Product Designer at Tide, a UK-based fintech company providing business-to-business current accounts, I was tasked with developing a feature that would allow Tide to comply with the FATCA-CRS requirements.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#080808' }}>
        <div className="container">
          <div className="grid-cols-2">
            <AnimatedSection>
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Research</h4>
              <p style={{ marginBottom: '1.5rem' }}>
                Through internal discussions with the compliance team and interviews with a small group of Tide business users, I gained the following insights:
              </p>

              <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '2rem' }}>Key insights from research</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                <div>
                  <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>User Concerns</h5>
                  <p>Many users are not familiar with FATCA or CRS, so clear explanations are necessary.</p>
                </div>
                <div>
                  <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Information Overload</h5>
                  <p>Presenting too much information at once leads to user anxiety and confusion.</p>
                </div>
                <div>
                  <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Trust and Security</h5>
                  <p>Users are highly concerned about sharing sensitive shareholder data, particularly with US tax authorities.</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Challenges</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                <div>
                  <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Clarity</h5>
                  <p>How do we explain FATCA and CRS regulations without overwhelming users with legal jargon?</p>
                </div>
                <div>
                  <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Ease of Use</h5>
                  <p>How do we make the process as straightforward and quick as possible?</p>
                </div>
                <div>
                  <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Trust</h5>
                  <p>How do we ensure users feel confident in sharing sensitive information?</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-cols-2">
            <AnimatedSection>
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>User flow mapping</h4>
              <p style={{ marginBottom: '1.5rem' }}>
                I started by mapping out the entire user journey, from the point where users first encounter the FATCA-CRS request to the completion of the flow. Key moments included:
              </p>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--muted-foreground)', marginBottom: '3rem' }}>
                <li>Introduction and explanation of FATCA and CRS.</li>
                <li>Asking users if they or any shareholders have ties to the US.</li>
                <li>Gathering detailed information if the user answers “yes.”</li>
                <li>Providing a review screen for users to confirm their data before submission.</li>
              </ul>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <h2 style={{ marginBottom: '3rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Interactive prototype</h2>
            <div className="image-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
              <img src={IMG('7bkf5grZUX6o64UImwBIEmfEI0.png')} alt="Screen 1" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
              <img src={IMG('FdB9FKdt6Fof4fWHL687tDxIB0.png')} alt="Screen 2" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
              <img src={IMG('IqLRL8lI5hog6yAHQzkeLl7Ytdo.png')} alt="Screen 3" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
              <img src={IMG('MiMutRkvsodTg2mUjQOtrohyVF0.png')} alt="Screen 4" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
              <img src={IMG('V3W1OoPGWPNoaqZ2459SLPyqxM.png')} alt="Screen 5" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
              <img src={IMG('Vb0DeBDfO9uEklJcmiGSJzIyu0A.png')} alt="Screen 6" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
              <img src={IMG('dOIIXtqUPopjwONLUXcFJRSWEQ.png')} alt="Screen 7" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
              <img src={IMG('euypn6Vo7DwCojyiaiDqSwX0ngg.png')} alt="Screen 8" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
              <img src={IMG('l91VAYn2QVErP0OD6yckIe8c.png')} alt="Screen 9" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
              <img src={IMG('pm0CYKZazhpa0fbDnxeAaRiFwRA.png')} alt="Screen 10" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
              <img src={IMG('qgvWEis0rlEjyUsyDqi1YZhjs.png')} alt="Screen 11" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
              <img src={IMG('rCNwd6DqGz0V71OZ3xezQg6NTg.png')} alt="Screen 12" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
              <img src={IMG('v1OVhFr1fjQssZXm793bDn1GLzA.png')} alt="Screen 13" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
              <img src={IMG('w0777OvwXM6vfwozWPmzMiQ62IA.png')} alt="Screen 14" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
              <img src={IMG('wx0VsbUCuJK7XJODpFJ5Y3VWQ.png')} alt="Screen 15" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section" style={{ background: '#080808' }}>
        <div className="container">
          <div className="grid-cols-2">
            <AnimatedSection>
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Testing & Validation</h4>
              <p style={{ marginBottom: '1.5rem' }}>
                I conducted usability tests with 10 Tide business account users who were unfamiliar with FATCA and CRS and found out some interesting facts about design.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                <div>
                  <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Simplicity</h5>
                  <p>Users appreciated the step-by-step process and found the language clear and non-threatening.</p>
                </div>
                <div>
                  <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Security Messaging</h5>
                  <p>The emphasis on data security helped build trust and reduced user hesitancy.</p>
                </div>
                <div>
                  <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Minor Adjustments</h5>
                  <p>Some users suggested simplifying a few questions, which led to small iterations in the wording.</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Final outcome</h4>
              <p style={{ marginBottom: '2rem' }}>
                The FATCA-CRS flow was rolled out to all Tide business users, and feedback was overwhelmingly positive. The design helped streamline the compliance process while maintaining user trust.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: '#fff', marginTop: '0.2rem', shrink: 0 }} />
                  <span>Of users who started the flow completed</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: '#fff', marginTop: '0.2rem', shrink: 0 }} />
                  <span>Support tickets dropped for FATCA-CRS</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: '#fff', marginTop: '0.2rem', shrink: 0 }} />
                  <span>Satisfaction rate Post-interaction surveys</span>
                </li>
              </ul>
              
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Learnings & Next steps</h4>
              <p style={{ marginBottom: '1.5rem' }}>
                This project taught me the importance of balancing regulatory requirements with user-centered design. By focusing on clear communication, simplicity, and trust-building, I was able to create a feature that met both business and user needs.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Moving forward, we plan to continue iterating based on user feedback and explore ways to further streamline compliance processes in the app.
              </p>
              <p style={{ marginBottom: '3rem' }}>
                This Project highlights how thoughtful design can turn a potentially stressful regulatory requirement into a seamless user experience.
              </p>
              
              <Button href="#" variant="primary" style={{ display: 'inline-flex' }}>Check out FATCA-CRS in action <ArrowRight size={16} /></Button>
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
              
              <Link to="/member-connect" className="glass-card" style={{ padding: '2rem', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <span className="badge"># WebApp</span>
                    <span className="badge"># Fintech</span>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Member Connect</h3>
                  <p style={{ color: 'var(--muted-foreground)', marginBottom: '2rem' }}>A networking platform for Tide users to connect and network</p>
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
