import { motion } from 'framer-motion';

export default function Moon() {
  return (
    <motion.div
      className="moon"
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
      }}
    />
  );
}
