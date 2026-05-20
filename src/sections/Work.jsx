import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { CaseStudyCard } from '../components/CaseStudyCard';

export const Work = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Fintech Mobile App Redesign",
      category: "UX/UI Design",
      image: "https://images.unsplash.com/photo-1616077168712-fc6c788db4af?q=80&w=2000&auto=format&fit=crop",
      link: "#"
    },
    {
      id: 2,
      title: "B2B SaaS Dashboard",
      category: "Product Design",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
      link: "#"
    },
    {
      id: 3,
      title: "E-Commerce Experience",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2000&auto=format&fit=crop",
      link: "#"
    }
  ];

  return (
    <section id="work" className="section">
      <div className="container">
        <AnimatedSection>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Selected Work</h2>
              <p style={{ margin: 0, maxWidth: '500px' }}>
                A collection of my recent projects focusing on solving complex problems through user-centered design.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem' 
        }}>
          {caseStudies.map((study, index) => (
            <AnimatedSection key={study.id} delay={index * 0.1}>
              <CaseStudyCard {...study} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
