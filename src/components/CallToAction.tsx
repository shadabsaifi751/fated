// src/components/CallToAction.tsx
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-purple-900 py-20 md:py-32 text-white text-center">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif mb-8 leading-snug"
        >
          Choose to Match
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-red-500 text-white py-4 px-12 rounded-full text-xl font-extrabold hover:bg-red-600 transition duration-300 shadow-2xl uppercase tracking-wider"
        >
          Download Fated Today
        </motion.button>
      </div>
    </section>
  );
};
export default CallToAction;