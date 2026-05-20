import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const CaseStudyCard = ({ title, category, image, link }) => {
  return (
    <motion.a 
      href={link}
      className="glass-card"
      style={{
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
        overflow: 'hidden',
        position: 'relative',
        height: '400px',
      }}
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          background: `url(${image}) center/cover no-repeat`,
        }}
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1.05 }
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '2rem',
          background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <div>
          <p style={{ color: 'var(--muted-foreground)', marginBottom: '0.5rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {category}
          </p>
          <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{title}</h3>
        </div>
        <motion.div
          variants={{
            initial: { opacity: 0, x: -10, y: 10 },
            hover: { opacity: 1, x: 0, y: 0 }
          }}
          transition={{ duration: 0.2 }}
          style={{
            background: 'var(--primary)',
            color: 'var(--primary-foreground)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ArrowUpRight size={20} />
        </motion.div>
      </motion.div>
    </motion.a>
  );
};
