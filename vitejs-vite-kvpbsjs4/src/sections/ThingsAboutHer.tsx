import { motion } from 'framer-motion';
import { useState } from 'react';

const items = [
  {
    emoji: '💙',
    title: 'Blue',
    message: 'Every shade of blue somehow reminds me of you.',
  },
  {
    emoji: '⚫',
    title: 'Black',
    message: 'Even darkness feels peaceful when it reminds me of you.',
  },
  {
    emoji: '🎵',
    title: 'Sad Songs',
    message: "Some songs aren't sad anymore... because they remind me of you.",
  },
  {
    emoji: '👻',
    title: 'Horror Movies',
    message:
      "You enjoy horror movies... I'd probably end up looking at you instead of the screen 😂",
  },
  {
    emoji: '🇰🇷',
    title: 'K-Drama',
    message: "Maybe that's why you believe beautiful stories can happen.",
  },
  {
    emoji: '🏰',
    title: 'Mysore',
    message: 'One city... where someone very special lives.',
  },
  {
    emoji: '🛕',
    title: 'Kedarnath',
    message: "Maybe one day... we'll stand there together.",
  },
];

export default function ThingsAboutHer() {
  const [selected, setSelected] = useState(items[0]);

  return (
    <section className="things">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        Things That Remind Me Of You
      </motion.h2>

      <div className="things-grid">
        {items.map((item) => (
          <motion.div
            key={item.title}
            className="glass-card"
            whileHover={{
              scale: 1.08,
              y: -8,
            }}
            onClick={() => setSelected(item)}
          >
            <div className="emoji">{item.emoji}</div>

            <h3>{item.title}</h3>
          </motion.div>
        ))}
      </div>

      <motion.div
        key={selected.title}
        className="message-box"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3>
          {selected.emoji} {selected.title}
        </h3>

        <p>{selected.message}</p>
      </motion.div>
    </section>
  );
}
