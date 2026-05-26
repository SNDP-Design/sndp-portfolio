import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { Button } from '../components/Button';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

const IMG = (path) => `https://framerusercontent.com/images/${path}`;

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
              <span className="badge">B2B SaaS Webapp | 8 Weeks</span>
            </div>
            
            <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              CliX - A campaign engine for customer engagement & ROI
            </h1>
            
            <p style={{ fontSize: '1.35rem', maxWidth: '800px', lineHeight: '1.5', color: '#fff', marginBottom: '3rem' }}>
              CliX is a marketing automation solution to help brands streamline and run their customer engagement activities.
            </p>
            <div className="hero-image" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <img src={IMG('2oynPfN9JCVFQtPk0Ps1OcrYwJ4.png')} alt="CliX Dashboard" style={{ maxWidth: '100%', height: 'auto', borderRadius: 'var(--radius-lg)' }} />
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
                  <span>Lack of omnichannel engagement</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: '#fff', marginTop: '0.2rem', shrink: 0 }} />
                  <span>Limited automation for engagement</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: '#fff', marginTop: '0.2rem', shrink: 0 }} />
                  <span>No interface for campaign performance insights</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: '#fff', marginTop: '0.2rem', shrink: 0 }} />
                  <span>No digital medium to request ROI reports</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: '#fff', marginTop: '0.2rem', shrink: 0 }} />
                  <span>Lack of an automated quality check process</span>
                </li>
              </ul>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Understanding the problem</h4>
              <p style={{ marginBottom: '3rem' }}>
                This project aimed to create a platform enabling marketing professionals to reach customers through various channels and target the right customers with the correct message.
              </p>
              
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>My role</h4>
              <p style={{ marginBottom: '3rem' }}>
                I was the sole product designer on this project, working closely with a dedicated product manager, marketing manager, data analyst, and a remote development team.
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
                I started with user research, conducting a series of interviews with marketing & campaign managers to better understand the current process, areas of complexity, and frustrations, and simultaneously, I did the market research and explored similar solutions to understand the users’ needs.
              </p>
              <p style={{ marginBottom: '3rem' }}>
                I synthesised all the research findings and then summarised the information I collected.
              </p>

              <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Key insights from research</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                <div>
                  <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Personalization</h5>
                  <p>There was a high demand for more flexible customer segmentation and targeting options.</p>
                </div>
                <div>
                  <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Real-time data</h5>
                  <p>Having immediate access to campaign performance was crucial for making adjustments.</p>
                </div>
                <div>
                  <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Collaboration</h5>
                  <p>Marketers often work together on a single campaign, requiring smoother collaboration features.</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Competitive analysis</h4>
              <p style={{ marginBottom: '3rem' }}>
                With market research, I conducted a competitive analysis of 4 big players HubSpot Marketing Hub, Salesforce Marketing Cloud, Mailchimp, and Zoho Campaigns to identify strengths and weaknesses in existing solutions.
              </p>
              
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Key takeaways</h4>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--muted-foreground)', marginBottom: '3rem' }}>
                <li>Most competitors struggle to balance user-friendly interfaces with deep customization options. While tools like Mailchimp offer ease of use, they often lack advanced segmentation features.</li>
                <li>Platforms like Salesforce Marketing Cloud provide powerful capabilities but have a steep learning curve.</li>
                <li>The ability to customize campaigns, templates, and workflows remains a critical pain point for marketers across platforms.</li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Team brainstorming</h4>
            <p style={{ marginBottom: '2rem' }}>
              For brainstorming, we used Whimsical, as we were all working remotely. Every week we had team meetings to check the progress and decide the future course of the project.
            </p>
            <div className="image-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '4rem' }}>
              <img src={IMG('naYWfBtBpvnsVlKq1ArhC6IBKM.png')} alt="CliX Brainstorming 1" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
              <img src={IMG('0MjINeNLeztRubh9kq04AwHJ4.png')} alt="CliX Brainstorming 2" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 style={{ marginBottom: '3rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Final design</h2>
          </AnimatedSection>
          
          {/* Features */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', marginBottom: '4rem' }}>
            <AnimatedSection>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Personalise every customer interaction within one dashboard</h3>
              <p style={{ marginBottom: '2rem' }}>I envisioned a single platform for teams to view performance across all channels. The dashboard offers detailed insights into campaign engagement rates, ROI, and the effectiveness of different segments.</p>
              <img src={IMG('9UYMaRUj9FIVvbO00ULdkFIPg.png')} alt="CliX Dashboard" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
            </AnimatedSection>
            
            <AnimatedSection>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Automated journey builder to create customer lifecycle</h3>
              <p style={{ marginBottom: '2rem' }}>I focused on automating customer journeys based on predefined lifecycle templates. This feature allowed marketing teams to engage customers at the right time and track the success of each campaign.</p>
              <img src={IMG('tqVUnqqhBJYkjUkhx6OFSDw4LiY.png')} alt="CliX Journey" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
            </AnimatedSection>

            <AnimatedSection>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Track insights & manage all campaigns via a single interface</h3>
              <p style={{ marginBottom: '2rem' }}>With the new interface now, teams can access insights from all customer communication channels and manage them effectively. Campaigns can also be uploaded in bulk to save time and effort.</p>
              <img src={IMG('4uWGbZDQ4RksPq9ioxLy8aKrWs.png')} alt="CliX Campaign" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
            </AnimatedSection>

            <AnimatedSection>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Drag & drop email builder to create professional emails</h3>
              <p style={{ marginBottom: '2rem' }}>With this feature, teams will be able to create professional-looking emails without coding. This feature simplified campaign creation, allowing businesses to focus on messaging rather than technical details.</p>
              <img src={IMG('tlyc8GDcSt1BeUyUiYauefSRX4o.png')} alt="CliX Email Template" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
            </AnimatedSection>

            <AnimatedSection>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Design, code, or use pre-existing templates for your campaign</h3>
              <p style={{ marginBottom: '2rem' }}>Users can use pre-built templates for their campaigns to reduce repetitive manual setup.</p>
              <img src={IMG('nMV5j336apCxSLUUN4Rn5MVtA3k.png')} alt="CliX Template" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#080808' }}>
        <div className="container">
          <div className="grid-cols-2">
            <AnimatedSection>
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Testing & Validation</h4>
              <p style={{ marginBottom: '1.5rem' }}>
                I conducted multiple rounds of usability testing with 6 marketing specialists, focusing on the ease of use and efficiency of the new features.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Feedback was largely positive, with users praising the simplified flow. However, a few areas for improvement were identified:
              </p>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--muted-foreground)', marginBottom: '1.5rem' }}>
                <li>Users requested more flexible templates that could be tailored without leaving the campaign creation page.</li>
                <li>Users wanted push notifications for campaign milestones (when a certain performance threshold was reached).</li>
              </ul>
              <p style={{ marginBottom: '3rem' }}>
                Based on this feedback, I iterated on the designs and shared them with the dev team.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                <div>
                  <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Template customization</h5>
                </div>
                <div>
                  <h5 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Real-time alerts</h5>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Final outcome</h4>
              <p style={{ marginBottom: '2rem' }}>
                The Clix Campaign Engine was successfully launched and adopted by the marketing teams. The automation features reduced campaign setup time by 40%, and the real-time dashboard increased the speed at which marketing teams could optimize their campaigns.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: '#fff', marginTop: '0.2rem', shrink: 0 }} />
                  <span>Massive reduction in overall campaign setup time</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: '#fff', marginTop: '0.2rem', shrink: 0 }} />
                  <span>Improvement in real-time decision making accuracy</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: '#fff', marginTop: '0.2rem', shrink: 0 }} />
                  <span>Positive feedback from users who tested the platform</span>
                </li>
              </ul>
              
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Reflection</h4>
              <p style={{ marginBottom: '3rem' }}>
                This project was a great example of how user-centered design can make a significant impact on a business’s bottom line. By deeply understanding the pain points and goals of the users, we were able to create a product that simplified their workflow, increased productivity, and ultimately drove better results. I learned the importance of flexibility in design, ensuring that the solution could serve both novice and experienced users. Additionally, I realised the value of real-time feedback loops, which enable marketers to continuously optimise their campaigns.
              </p>
              
              <Button href="#" variant="primary" style={{ display: 'inline-flex' }}>Check out CliX in action <ArrowRight size={16} /></Button>
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
              
              <Link to="/member-connect" className="glass-card" style={{ padding: '2rem', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <span className="badge"># WebApp</span>
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
