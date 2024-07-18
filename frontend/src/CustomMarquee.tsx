import { motion } from 'framer-motion';
import './index.css';

const marqueeVariants = {
  animate: {
    x: [0, -1036],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 5,
        ease: 'linear',
      },
    },
  },
};

const CustomMarquee = () => {
  return (
    <div>
      <div className="marquee">
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
          <h1>Comming Soon...</h1>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomMarquee;
