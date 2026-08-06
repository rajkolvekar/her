import { motion } from 'framer-motion';

export default function HerEyes() {
  return (
    <section className="eyes">
      <motion.div
        className="eyes-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <p className="small">There was something different...</p>

        <h1>Your Eyes</h1>

        <motion.p
          className="main-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          It wasn't your pictures.
          <br />
          <br />
          It wasn't anything fancy.
          <br />
          <br />
          It was your eyes.
          <br />
          <br />
          They felt honest.
          <br />
          Peaceful.
          <br />
          Real.
        </motion.p>
      </motion.div>
    </section>
  );
}
