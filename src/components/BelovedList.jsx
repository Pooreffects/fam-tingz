import { motion } from 'framer-motion';
export default function BelovedList({ name, love }) {
  return (
    <motion.li
      initial={{ opacity: 0, translateX: '10' }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ delay: 2, duration: 0.5, ease: 'easeIn' }}
      className="flex flex-col items-center gap-4"
    >
      <p className="font-secondary tracking-wide text-xl font-semibold text-slate-300">
        {name}
      </p>
      <p className="font-secondary tracking-wide text-3xl font-bold text-red-400">
        {love}
      </p>
    </motion.li>
  );
}
