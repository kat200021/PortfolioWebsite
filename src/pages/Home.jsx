import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDownIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useState, useRef, useEffect } from 'react';


const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

    // Add these hooks at the top of your component function
    const sliderRef = useRef(null);
    const [sliderPosition, setSliderPosition] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    
    const handleScroll = (direction) => {
      const container = sliderRef.current;
      if (!container) return;
    
      const item = container.children[0];
      const itemWidth = item?.offsetWidth || 0;  // Get the width of the first item
      const scrollAmount = itemWidth * 2;  // Scroll by 2 items
    
      const containerWidth = container.offsetWidth;  // Get the width of the container
      const contentWidth = container.scrollWidth;  // Get the total content width
      const maxScroll = -(contentWidth - containerWidth);  // Maximum scroll position
    
      // Calculate the new position based on the direction (left or right)
      let newPosition = sliderPosition + (direction === 'left' ? scrollAmount : -scrollAmount);
      
      // Clamp the position to ensure it's within valid bounds
      newPosition = Math.min(newPosition, 0);
      newPosition = Math.max(newPosition, maxScroll);
    
      // console.log('Calculated Position:', newPosition);  // Log the new position for debugging
    
      // Update the state with the new position
      setSliderPosition(newPosition);
    
      // Update the visibility of scroll buttons based on the new position
      updateScrollButtons(newPosition, maxScroll);
    };
    

    // useEffect(() => {
    //   console.log('Updated sliderPosition:', sliderPosition); // This will log whenever sliderPosition changes
    // }, [sliderPosition]); // Runs whenever sliderPosition changes
    
    

    const updateScrollButtons = (position, maxScroll) => {
      setCanScrollLeft(position < 0);
      setCanScrollRight(position > maxScroll);
    };

    // Add a reference to your container
    useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    const updateOnResize = () => {
      const contentWidth = container.scrollWidth;
      const containerWidth = container.offsetWidth;
      const maxScroll = -(contentWidth - containerWidth);

      // Clamp slider position if necessary
      setSliderPosition((prev) => {
        const clamped = Math.max(Math.min(prev, 0), maxScroll);
        updateScrollButtons(clamped, maxScroll);
        return clamped;
      });
    };

    window.addEventListener('resize', updateOnResize);
    updateOnResize();

    return () => window.removeEventListener('resize', updateOnResize);
  }, []);


  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-50 dark:bg-gray-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <motion.div
              className="lg:col-span-7 xl:col-span-6"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight"
                variants={itemVariants}
              >
                <span className="block">Hi, I'm</span>
                <span className="block text-primary mt-1">Shreya Reddy</span>
              </motion.h1>
              
              <motion.p
                className="mt-6 text-xl text-gray-500 dark:text-gray-400 max-w-3xl"
                variants={itemVariants}
              >
                A passionate full-stack developer specializing in 
                building exceptional digital experiences with modern 
                web technologies.
              </motion.p>
              
              <motion.div 
                className="mt-10 flex flex-wrap gap-4"
                variants={itemVariants}
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  View My Work
                  <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="hidden lg:block lg:col-span-5 xl:col-span-6 mt-12 lg:mt-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Hero Image */}
              {/* <div className="relative w-full h-80 lg:h-full rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20"></div>
                <img
                  src={myPhoto}
                  alt=' '
                  className="w-64 h-64 object-cover object-center rounded-xl"
                />
              </div> */}
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer hidden md:block"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ y: 5 }}
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
        >
          <ArrowDownIcon className="h-8 w-8 text-primary animate-bounce" />
        </motion.div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-16 bg-white dark:bg-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          My Tech Stack
        </h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Technologies I've been working with recently
        </p>
        </motion.div>

        <div className="mt-16 relative">
        {/* Slider container with overflow hidden */}
        <div className="overflow-hidden" ref={sliderRef}>
        <motion.div 
          className="flex transition-transform duration-500 ease-in-out"
          animate={{ x: sliderPosition }}
          style={{ transform: `translateX(${sliderPosition}px)` }}
        >
          {[
            { name: 'React', icon: '⚛️' },
            { name: 'Node.js', icon: '🟢' },
            { name: 'JavaScript', icon: '🔷' },
            { name: 'MongoDB', icon: '🍃' },
            { name: 'Tailwind CSS', icon: '🎨' },
            { name: 'Python', icon: '🚂' },
            { name: 'SQL', icon: '🚂' },
            { name: 'RESTful API', icon: '🚂' },
            { name: 'Git', icon: '🚂' },
          ].map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center mx-8 flex-shrink-0 w-32"
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <div className="text-5xl mb-4">{skill.icon}</div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Navigation Arrows */}
      {canScrollLeft && (
        <button 
          onClick={() => handleScroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md z-10 hover:bg-gray-100 dark:hover:bg-gray-600"
          aria-label="Scroll left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      
      {canScrollRight && (
        <button 
          onClick={() => handleScroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md z-10 hover:bg-gray-100 dark:hover:bg-gray-600"
          aria-label="Scroll right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
          </div>
        </div>
      </section>



      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Some of my recent work
            </p>
          </motion.div>
          
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {[
              {
                title: 'E-commerce Platform',
                description: 'A full-featured e-commerce solution with product catalog, cart, and checkout functionality.',
                tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
              },
              {
                title: 'Task Management App',
                description: 'A Trello-inspired task management application with drag-and-drop functionality.',
                tech: ['React', 'Redux', 'Express', 'MongoDB'],
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700">
                  <img 
                    src={`/api/placeholder/600/300`} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-primary/10 hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              View All Projects
              <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;