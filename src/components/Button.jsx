import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({ children, onClick, href, variant = 'primary', className = '' }) => {
  const baseStyle = {
    padding: '0.75rem 1.5rem',
    borderRadius: '2rem',
    fontWeight: '500',
    fontSize: '1rem',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    border: 'none',
    outline: 'none',
    textDecoration: 'none',
  };

  const variants = {
    primary: {
      background: 'var(--primary)',
      color: 'var(--primary-foreground)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--primary)',
      border: '1px solid var(--border)',
    },
    glass: {
      background: 'var(--glass-bg)',
      color: 'var(--primary)',
      border: '1px solid var(--glass-border)',
      backdropFilter: 'blur(12px)',
    }
  };

  const Component = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick };

  return (
    <Component
      {...props}
      style={{ ...baseStyle, ...variants[variant] }}
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      {children}
    </Component>
  );
};
