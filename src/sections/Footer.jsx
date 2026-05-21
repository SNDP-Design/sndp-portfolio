import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';

export const Footer = () => {
  return (
    <footer style={{ padding: '6rem 0 3rem 0', background: '#050505', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <AnimatedSection>
          <div style={{ marginBottom: '4rem' }}>
            <p style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted-foreground)', marginBottom: '1.5rem' }}>Have Project in Mind?</p>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Let's turn your ideas into reality
            </h2>
            <a
              href="mailto:hello@sndpdesign.com"
              style={{
                fontSize: '1.5rem',
                fontWeight: 500,
                color: 'var(--primary)',
                textDecoration: 'underline',
                textUnderlineOffset: '8px',
                textDecorationColor: 'rgba(255,255,255,0.3)',
              }}
            >
              hello@sndpdesign.com
            </a>
          </div>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', paddingTop: '3rem', borderTop: '1px solid var(--border)', marginBottom: '4rem' }}>
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', marginBottom: '1rem' }}>SNDP.</div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '260px' }}>
              A full-stack designer helping startups build their products from idea to MVP.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted-foreground)', marginBottom: '1.25rem', fontWeight: 600 }}>Work</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link to="/clix" style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem' }}>CliX Case Study</Link>
              <Link to="/fatca-crs" style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem' }}>FATCA-CRS</Link>
              <Link to="/member-connect" style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem' }}>Member Connect</Link>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted-foreground)', marginBottom: '1.25rem', fontWeight: 600 }}>Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <span style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem' }}>Websites</span>
              <span style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem' }}>Mobile Apps</span>
              <span style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem' }}>B2B SaaS Apps</span>
              <span style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem' }}>Case Studies</span>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted-foreground)', marginBottom: '1.25rem', fontWeight: 600 }}>Connect</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="https://www.linkedin.com/in/sndpdesign/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem' }}>LinkedIn</a>
              <a href="https://x.com/sndpdesign" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem' }}>X (Twitter)</a>
              <a href="https://www.instagram.com/sndp.rathi/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem' }}>Instagram</a>
            </div>
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border)',
          color: 'var(--muted-foreground)',
          fontSize: '0.875rem',
        }}>
          <div>©{new Date().getFullYear()} SNDP Design. All Rights Reserved.</div>
          <Link to="/about" style={{ color: 'var(--muted-foreground)' }}>About</Link>
        </div>
      </div>
    </footer>
  );
};
