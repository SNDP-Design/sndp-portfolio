import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { Button } from '../components/Button';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

export const CliX = () => {
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
              <span className="badge">#SaaS</span>
              <span className="badge">#B2B</span>
              <span className="badge">#CRM</span>
            </div>
            
            <h1 style={{ marginBottom: '2rem', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              CliX — A campaign engine for customer engagement & ROI
            </h1>
            
            <p style={{ fontSize: '1.35rem', maxWidth: '800px', lineHeight: '1.5', color: '#fff', marginBottom: '3rem' }}>
              CliX is a marketing automation solution designed to help brands streamline, execute, and monitor their customer engagement activities across multiple channels.
            </p>
            
            {/* Meta Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
              <div>
                <h4 style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Role</h4>
                <p style={{ fontSize: '1.05rem', color: '#fff' }}>Sole Product Designer</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Timeline</h4>
                <p style={{ fontSize: '1.05rem', color: '#fff' }}>8 Weeks (B2B SaaS Webapp)</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Collaborators</h4>
                <p style={{ fontSize: '1.05rem', color: '#fff' }}>PM, Marketing Manager, Data Analyst, Dev Team</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview & Problem */}
      <section className="section">
        <div className="container">
          <div className="grid-cols-2">
            <AnimatedSection>
              <h2 style={{ marginBottom: '1.5rem' }}>Understanding the Problem</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                This project aimed to create a platform enabling marketing professionals to reach customers through various communication channels, ensuring the right message reaches the right segment at the optimal time.
              </p>
              <p>
                Before CliX, brands faced major bottlenecks: fragmented systems, lack of personalization metrics, complex workflows, and no automated feedback loops.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Key Project Objectives</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: '#fff', marginTop: '0.2rem', shrink: 0 }} />
                  <span>Solve the **lack of omnichannel engagement** across platforms.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: '#fff', marginTop: '0.2rem', shrink: 0 }} />
                  <span>Address the **limited automation** options for engagement lifecycle workflows.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: '#fff', marginTop: '0.2rem', shrink: 0 }} />
                  <span>Deliver an **interface for real-time campaign performance insights**.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: '#fff', marginTop: '0.2rem', shrink: 0 }} />
                  <span>Design a **digital medium to request automated ROI reports**.</span>
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Research & Competitive Analysis */}
      <section className="section" style={{ background: '#080808' }}>
        <div className="container">
          <AnimatedSection>
            <h2 style={{ marginBottom: '3rem' }}>Research & Competitive Landscape</h2>
          </AnimatedSection>
          
          <div className="grid-cols-2" style={{ marginBottom: '4rem' }}>
            <AnimatedSection>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Key Insights from User Interviews</h3>
              <p style={{ marginBottom: '1rem' }}>
                I synthesized findings from deep-dive interviews with marketing & campaign managers:
              </p>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--muted-foreground)' }}>
                <li><strong>Granular Targeting:</strong> High demand for more flexible customer segmentation and targeting options.</li>
                <li><strong>Real-time loops:</strong> Immediate access to campaign performance metrics was crucial to making adjustments.</li>
                <li><strong>Collaborative workspaces:</strong> Marketers often work together on a single campaign, requiring smoother workflows.</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Competitive Takeaways</h3>
              <p style={{ marginBottom: '1rem' }}>
                I audited 4 key players: <strong>HubSpot Marketing Hub, Salesforce Marketing Cloud, Mailchimp, and Zoho Campaigns</strong>:
              </p>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--muted-foreground)' }}>
                <li>Most competitors struggle to balance user-friendly UI with deep customization.</li>
                <li>Tools like Mailchimp are easy to use but lack advanced custom segmentation.</li>
                <li>Enterprise platforms like Salesforce offer power but have a very steep learning curve.</li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final Design & Features */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h2 style={{ marginBottom: '1rem' }}>The Final Product</h2>
            <p style={{ marginBottom: '4rem', maxWidth: '600px' }}>
              We crafted an interface that merges power with simple, drag-and-drop operations, reducing manual work for marketing teams.
            </p>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <AnimatedSection>
              <div className="glass-card" style={{ padding: '2rem', height: '100%' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Unified Campaign Dashboard</h3>
                <p style={{ fontSize: '0.95rem' }}>Personalize every customer interaction within one dashboard. Track insights & manage all campaigns via a single interface.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="glass-card" style={{ padding: '2rem', height: '100%' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Automated Journey Builder</h3>
                <p style={{ fontSize: '0.95rem' }}>Automate customer journeys based on predefined lifecycle templates. Create customer life cycle paths without complex logic.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="glass-card" style={{ padding: '2rem', height: '100%' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Drag & Drop Email Builder</h3>
                <p style={{ fontSize: '0.95rem' }}>Design, code, or use pre-existing templates for your campaign. Create professional emails without writing a line of code.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testing & Validation */}
      <section className="section" style={{ background: '#080808' }}>
        <div className="container">
          <div className="grid-cols-2">
            <AnimatedSection>
              <h2 style={{ marginBottom: '1.5rem' }}>Testing & Validation</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                I conducted multiple rounds of usability testing with 6 marketing specialists, focusing on workflow efficiency and layout clarity.
              </p>
              <p>
                Feedback was overwhelmingly positive, but users wanted more flexible templates inline, leading to designs that allow editing without leaving the main campaign builder. We also added real-time alerts for campaign milestones.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '4.5rem', color: '#fff', marginBottom: '0.5rem' }}>-40%</h3>
                <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted-foreground)', marginBottom: '1.5rem' }}>Campaign Setup Time</h4>
                <p style={{ fontSize: '1rem', margin: 0 }}>
                  Successfully rolled out to marketing teams. Users praised the real-time feedback loops and simplified creation wizard.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Explore Next */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <AnimatedSection>
            <p style={{ marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Explore Next Project</p>
            <h2 style={{ marginBottom: '2.5rem' }}>FATCA-CRS Compliance Flow</h2>
            <Link to="/fatca-crs">
              <Button variant="primary">Next Project <ArrowRight size={16} /></Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};
