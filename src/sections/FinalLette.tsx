import { motion } from 'framer-motion';

export default function FinalLette() {
  return (
    <section className="letter">
      <motion.div
        className="book"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
      >
        <h2>A Letter</h2>

        <p>
          We've never met.
          <br />
          <br />
          Yet.
          <br />
          <br />
          Somehow...
          <br />
          <br />
          You've become one of my favourite parts of every day.
          <br />
          <br />
          I don't know where this story goes.
          <br />
          <br />
          But...
          <br />
          <br />
          I'm really glad our paths crossed.
          <br />
          <br />
          Maybe... one day... this website won't just tell a story.
          <br />
          <br />
          It'll remind us where everything began.
        </p>
      </motion.div>
    </section>
  );
}
