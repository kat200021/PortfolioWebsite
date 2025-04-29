import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  const socialPlatforms = [
    { name: 'GitHub', icon: <Github className="w-6 h-6" />, url: 'https://github.com/yourusername' },
    { name: 'LinkedIn', icon: <Linkedin className="w-6 h-6" />, url: 'https://linkedin.com/in/yourusername' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { scale: 0.8, opacity: 0 },
    show: { scale: 1, opacity: 1 }
  };

  return (
    <motion.div 
      className="flex justify-center space-x-6 mt-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {socialPlatforms.map((platform) => (
        <motion.a
          key={platform.name}
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gray-100 hover:bg-blue-600 text-gray-700 hover:text-white rounded-full shadow-md hover:shadow-xl ring-2 ring-transparent hover:ring-blue-500 transition-all"
          variants={item}
          whileHover={{ scale: 1.2 }}
        >
          <span className="text-2xl" aria-label={platform.name}>{platform.icon}</span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;