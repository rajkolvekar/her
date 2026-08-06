import { motion } from 'framer-motion';
import { useState } from 'react';

const memories = [
  {
    front: '📅 19 July',
    back: '9:10 PM.\nA simple message that slowly became one of my favorite parts of the day.',
  },
  {
    front: '🛵 23 July',
    back: 'You got your new scooty. I was genuinely happy for you.',
  },
  {
    front: '🌙 Stayed Awake',
    back: 'You stayed awake for me.\nThat little gesture meant more than you probably know.',
  },
  {
    front: '😂 Hatt',
    back: "Every time you say 'Hatt'... I can't help but smile.",
  },
  {
    front: '🫶 4 August',
    back: 'The night of your accident.\nAll I wished was that you were okay.',
  },
  {
    front: '👀 Your Eyes',
    back: "It wasn't just your photos.\nIt was your eyes that stayed in my mind.",
  },
];

export default function MemoryWall() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="memory-wall">
      <h2>Our Little Memories</h2>

      <div className="memory-grid">
        {memories.map((memory, index) => (
          <motion.div
            key={index}
            className="memory-card-flip"
            whileHover={{ scale: 1.05 }}
            onClick={() => setActive(active === index ? null : index)}
          >
            <div className="memory-inner">
              <div className="memory-front">{memory.front}</div>

              <div className={`memory-back ${active === index ? 'show' : ''}`}>
                {memory.back}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
