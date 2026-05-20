import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import { Button } from '../components/Button';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="section" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="bg-gradient-glow"></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <AnimatedSection>
          <div style={{ 
            display: 'inline-block',
            padding: '0.5rem 1rem',
            borderRadius: '2rem',
            border: '1px solid var(--glass-border)',
            background: 'var(--glass-bg)',
            marginBottom: '2rem',
            fontSize: '0.875rem',
            fontWeight: 500,
            color: 'var(--muted-foreground)'
          }}>
            👋 Hi, I'm Sandeep Rathi
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h1 style={{ maxWidth: '800px', marginBottom: '1.5rem' }}>
            Crafting digital products that drive <span className="text-gradient">growth</span>.
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p style={{ maxWidth: '600px', fontSize: '1.25rem', marginBottom: '2.5rem' }}>
            A UX/Product designer with 7+ years of experience creating user-friendly websites, mobile apps & B2B SaaS applications for startups.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button href="#work" variant="primary">
              View Case Studies
            </Button>
            <Button href="#contact" variant="glass">
              Get in touch <ArrowRight size={18} />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
