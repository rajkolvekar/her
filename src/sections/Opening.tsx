import { motion } from 'framer-motion';

export default function Opening() {
  return (
    <section className="opening">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        19 July
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          delay: 1,
        }}
      >
        9:10 PM
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 2,
          delay: 2,
        }}
      >
        A normal conversation...
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          delay: 4,
        }}
      >
        that became an unexpected story.
      </motion.h2>
    </section>
  );
}
