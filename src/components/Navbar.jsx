import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from './Button';

export const Navbar = () => {
  const { scrollY } = useScroll();
  const location = useLocation();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const isLinkActive = (path) => location.pathname === path;

  return (
    <motion.nav
      variants={{
        visible: { y: 0, x: '-50%' },
        hidden: { y: '-150%', x: '-50%' }
      }}
      initial="visible"
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        top: '1.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 50,
        padding: '0.6rem 0.6rem 0.6rem 2rem',
        background: scrolled ? 'rgba(15, 15, 15, 0.85)' : 'rgba(20, 20, 20, 0.6)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '9999px',
        width: 'auto',
        minWidth: 'min(90vw, 800px)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
    >
      <Link to="/" style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff' }}>
        sndp.
      </Link>
      
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Link to="/" style={{ fontSize: '0.9rem', fontWeight: 500, color: isLinkActive('/') ? '#fff' : 'var(--muted-foreground)' }}>Home</Link>
          <Link to="/about" style={{ fontSize: '0.9rem', fontWeight: 500, color: isLinkActive('/about') ? '#fff' : 'var(--muted-foreground)' }}>About</Link>
          <Link to="/contact" style={{ fontSize: '0.9rem', fontWeight: 500, color: isLinkActive('/contact') ? '#fff' : 'var(--muted-foreground)' }}>Contact</Link>
          <a href="#" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--muted-foreground)' }}>Resume</a>
        </div>
        <Link to="/contact">
          <Button variant="primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem', background: '#fff', color: '#000', borderRadius: '9999px' }}>
            Let's Talk
          </Button>
        </Link>
      </div>
    </motion.nav>
  );
};
