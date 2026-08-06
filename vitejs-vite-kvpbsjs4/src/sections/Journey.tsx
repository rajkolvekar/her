import { motion } from 'framer-motion';

const steps = [
  'Random Chat App',
  'Instagram',
  'WhatsApp',
  'Soon...',
  'Real Life ❤️',
];

export default function Journey() {
  return (
    <section className="journey">
      <h2>Our Journey</h2>

      {steps.map((step, index) => (
        <motion.div
          key={step}
          className="timeline-item"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.3 }}
          viewport={{ once: true }}
        >
          <div className="dot" />
          <p>{step}</p>
        </motion.div>
      ))}
    </section>
  );
}
