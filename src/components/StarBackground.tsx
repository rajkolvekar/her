import { motion } from 'framer-motion';

export default function StarBackground() {
  const stars = Array.from({ length: 80 });

  return (
    <div className="stars">
      {stars.map((_, index) => (
        <motion.div
          key={index}
          className="star"
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}
