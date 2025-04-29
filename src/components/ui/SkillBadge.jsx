import React from 'react';
import { motion } from 'framer-motion';

const SkillBadge = ({ skill, level }) => {
  // Calculate visual indicator based on level (1-5)
  const getColorByLevel = () => {
    switch (level) {
      case 5: return 'bg-blue-600';
      case 4: return 'bg-blue-500';
      case 3: return 'bg-blue-400';
      case 2: return 'bg-blue-300';
      case 1: return 'bg-blue-200';
      default: return 'bg-gray-200';
    }
  };

  return (
    <motion.div
      className={`px-4 py-2 rounded-full text-blue-900 ${getColorByLevel()} shadow-sm`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      {skill}
    </motion.div>
  );
};

export default SkillBadge;