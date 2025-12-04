import { motion } from 'framer-motion';

export function AnimatedSection({ children, className, yOffset = 100, duration = 0.5 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-100px' }}
      transition={{ duration: duration, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
