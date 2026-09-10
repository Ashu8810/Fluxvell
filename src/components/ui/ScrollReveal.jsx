import React from 'react';
import { motion } from 'framer-motion';

export const ScrollReveal = ({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  direction = 'up',
  className = '',
  style = {},
  once = true,
  amount = 0.2
}) => {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once, amount }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98] // Out-cubic easing for a premium feel
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};
