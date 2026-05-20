import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import { Button } from '../components/Button';
import { Mail, Calendar, Sparkles, MessageCircle, Heart } from 'lucide-react';

export const ContactPage = () => {
  const benefits = [
    {
      title: "Bespoke Design",
      desc: "Every project is unique, and I tailor my approach to fit your specific needs and goals.",
      icon: <Sparkles size={20} />
    },
    {
      title: "Clear Communication",
      desc: "I keep you informed at every stage of the process and provide you regular updates.",
      icon: <MessageCircle size={20} />
    },
    {
      title: "After Support",
      desc: "My commitment to your success doesn't end at launch. I provide after launch support.",
      icon: <Heart size={20} />
    }
  ];

  return (
    <div className="framer-grid" style={{ paddingTop: '6rem', minHeight: '100vh' }}>
      <div className="bg-gradient-glow"></div>
      
      <section className="section">
        <div className="container">
          <div className="grid-cols-2">
            <AnimatedSection>
              <span className="badge" style={{ marginBottom: '1rem' }}>Get in touch</span>
              <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Let’s turn your ideas into reality</h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)', marginBottom: '3rem' }}>
                Building founders' vision, from idea to MVP. Reach out to discuss design consultations, full product redesigns, or marketing campaigns.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: 'var(--muted)', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justify: 'center', border: '1px solid var(--border)' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '0.9rem', color: 'var(--muted-foreground)', textTransform: 'uppercase' }}>Email me</h4>
                    <a href="mailto:hello@sndpdesign.com" style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff' }}>hello@sndpdesign.com</a>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: 'var(--muted)', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justify: 'center', border: '1px solid var(--border)' }}>
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '0.9rem', color: 'var(--muted-foreground)', textTransform: 'uppercase' }}>Book a sync</h4>
                    <a href="#" style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff' }}>Book a call on Calendly</a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <div>
              <AnimatedSection delay={0.2}>
                <h3 style={{ marginBottom: '2rem', fontSize: '1.75rem' }}>What to expect</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {benefits.map(b => (
                    <div key={b.title} style={{ display: 'flex', gap: '1.25rem' }}>
                      <div style={{ background: 'var(--muted)', border: '1px solid var(--border)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justify: 'center', shrink: 0, color: '#fff' }}>
                        {b.icon}
                      </div>
                      <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>{b.title}</h4>
                        <p style={{ fontSize: '0.95rem', margin: 0 }}>{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
