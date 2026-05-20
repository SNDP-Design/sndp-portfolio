import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';

export const About = () => {
  const skills = [
    "Product Strategy", "User Research", "Wireframing", "Prototyping",
    "UI Design", "Design Systems", "Web Apps", "Mobile Apps"
  ];

  return (
    <section id="about" className="section" style={{ background: '#0f0f0f' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '4rem' 
        }}>
          <div>
            <AnimatedSection>
              <h2 style={{ marginBottom: '2rem' }}>About Me</h2>
              <p>
                I help startups enhance their product UX, visuals, and marketing design for growth. Over the past 7+ years, I have collaborated with cross-functional teams to deliver end-to-to product experiences.
              </p>
              <p>
                My expertise spans across designing intuitive B2B SaaS applications, engaging mobile experiences, and conversion-optimized websites.
              </p>
            </AnimatedSection>
          </div>
          
          <div>
            <AnimatedSection delay={0.2}>
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--foreground)' }}>Core Capabilities</h3>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.75rem' 
              }}>
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    style={{
                      padding: '0.5rem 1rem',
                      background: 'var(--muted)',
                      border: '1px solid var(--border)',
                      borderRadius: '2rem',
                      fontSize: '0.875rem',
                      color: 'var(--foreground)'
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
