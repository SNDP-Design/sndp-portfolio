import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';

export const Footer = () => {
  return (
    <footer id="contact" style={{ padding: '6rem 0 3rem 0', background: '#050505', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: '1.5rem' }}>
              Let's create something <br/><span className="text-gradient">amazing together.</span>
            </h2>
            <a 
              href="mailto:hello@sndpdesign.com" 
              style={{ 
                fontSize: '1.5rem', 
                fontWeight: 500, 
                color: 'var(--primary)',
                textDecoration: 'underline',
                textUnderlineOffset: '8px',
                textDecorationColor: 'var(--muted-foreground)'
              }}
            >
              hello@sndpdesign.com
            </a>
          </div>
        </AnimatedSection>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border)',
          color: 'var(--muted-foreground)',
          fontSize: '0.875rem'
        }}>
          <div>
            &copy; {new Date().getFullYear()} Sandeep Rathi. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#">LinkedIn</a>
            <a href="#">Dribbble</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
