// import { motion, useScroll } from 'framer-motion';

// export default function ScrollProgress() {
//   const { scrollYProgress } = useScroll();

//   return (
//     <motion.div
//       className="progress"
//       style={{
//         scaleX: scrollYProgress,
//         transformOrigin: 'left',
//       }}
//     />
//   );
// }
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const fill = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);
  const clipPath = useMotionTemplate`inset(${fill} 0 0 0)`;

  const glow = useTransform(
    scrollYProgress,
    [0, 1],
    ['0 0 10px rgba(255,255,255,.25)', '0 0 40px rgba(255,40,80,.8)']
  );

  return (
    <motion.div
      className="heart-progress"
      style={{ boxShadow: glow }}
      animate={{
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: 1.4,
        repeat: Infinity,
      }}
    >
      <span className="heart-outline">🤍</span>

      <motion.span className="heart-fill" style={{ clipPath }}>
        ❤️
      </motion.span>
    </motion.div>
  );
}
