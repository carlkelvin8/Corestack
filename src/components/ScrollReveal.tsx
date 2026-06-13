'use client';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export function ScrollReveal({ children, className = '', index = 0 }: ScrollRevealProps) {
  const delay = Math.min(index * 0.1, 0.5); // cap stagger delay

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, margin: "50px" }}
      transition={{ 
        duration: 0.7, 
        ease: "easeOut",
        delay: delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
