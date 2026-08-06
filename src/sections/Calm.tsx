import { motion } from 'framer-motion';

export default function Calm() {
  return (
    <section className="calm">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <h2>The Calm</h2>

        <p>
          Life gets noisy.
          <br />
          <br />
          Some days become exhausting.
          <br />
          <br />
          Somehow...
          <br />
          <br />
          Talking to you makes everything quieter.
        </p>
      </motion.div>
    </section>
  );
}
