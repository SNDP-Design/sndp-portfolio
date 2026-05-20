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
        visible: { y: 0 },
        hidden: { y: '-100%' }
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="glass"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '1.25rem 0',
        background: scrolled ? 'var(--glass-bg)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff' }}>
          SNDP.
        </Link>
        
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/" style={{ fontSize: '0.9rem', fontWeight: 500, color: isLinkActive('/') ? '#fff' : 'var(--muted-foreground)' }}>Home</Link>
          <Link to="/about" style={{ fontSize: '0.9rem', fontWeight: 500, color: isLinkActive('/about') ? '#fff' : 'var(--muted-foreground)' }}>About</Link>
          <Link to="/contact" style={{ fontSize: '0.9rem', fontWeight: 500, color: isLinkActive('/contact') ? '#fff' : 'var(--muted-foreground)' }}>Contact</Link>
          <Link to="/contact">
            <Button variant="primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
              Let's Talk
            </Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};
