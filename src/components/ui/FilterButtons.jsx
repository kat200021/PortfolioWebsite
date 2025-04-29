import { motion } from 'framer-motion';

const FilterButtons = ({ categories, activeCategory, onFilterChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-4 py-2 rounded-full ${
            activeCategory === category 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default FilterButtons;