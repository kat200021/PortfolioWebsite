import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const { title, description, githubUrl, category } = project;

  return (
    <motion.div 
      className="bg-teal-200 rounded-lg overflow-hidden shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -5 }}
    >
      <div className="h-35 overflow-hidden">
        {/* <img 
          src={image || '/api/placeholder/400/200'} 
          alt={title} 
          className="w-full h-full object-cover"
        /> */}
      </div>
      
      <div className="p-6">
        <h3 className="text-gray-600 underline font-bold mb-5">{title}</h3>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-4">
          <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
            {category}
          </span>
        </div>

        
        <div className="flex space-x-3">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 rounded hover:bg-gray-800 text-white font-thin px-2 py-1 "
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;