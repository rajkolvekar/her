import { motion } from 'framer-motion';
import { useState } from 'react';

const memories = [
  {
    title: '⭐',
    text: 'She stayed awake for me.',
  },
  {
    title: '🌙',
    text: 'She always says "Hatt" 😂',
  },
  {
    title: '✨',
    text: 'Those late-night conversations became my favourite part of the day.',
  },
  {
    title: '💙',
    text: 'Somehow... talking to you makes everything quieter.',
  },
];

export default function NightMemories() {
  const [selected, setSelected] = useState('');

  return (
    <section className="night">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        Late Nights
      </motion.h2>

      <p className="night-sub">Every star holds a memory.</p>

      <div className="memory-stars">
        {memories.map((memory, index) => (
          <motion.button
            key={index}
            className="memory-star"
            whileHover={{
              scale: 1.3,
              rotate: 10,
            }}
            whileTap={{
              scale: 0.9,
            }}
            onClick={() => setSelected(memory.text)}
          >
            {memory.title}
          </motion.button>
        ))}
      </div>

      <motion.div
        key={selected}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="memory-card"
      >
        {selected || 'Click a star ✨'}
      </motion.div>
    </section>
  );
}
