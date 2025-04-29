import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle }) => {
  return (
    <motion.div 
      className="mb-12 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
    </motion.div>
  );
};

export default PageHeader;