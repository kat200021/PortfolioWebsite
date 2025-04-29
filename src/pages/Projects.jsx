import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ui/ProjectCard';
import PageHeader from '../components/ui/PageHeader';
import FilterButtons from '../components/ui/FilterButtons';

const projectsData = [
  // {
  //   id: 1,
  //   title: 'E-commerce Platform',
  //   description: 'A full-stack e-commerce solution built with MERN stack featuring user authentication, payment processing, and admin dashboard.',
  //   technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
  //   githubUrl: 'https://github.com/yourusername/ecommerce-project',
  //   liveUrl: 'https://ecommerce-project.vercel.app',
  //   category: 'Fullstack'
  // },
  // {
  //   id: 2,
  //   title: 'Weather Dashboard',
  //   description: 'Interactive weather application that displays forecast data based on user location or search. Features a responsive design and dynamic data visualization.',
  //   technologies: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
  //   githubUrl: 'https://github.com/yourusername/weather-dashboard',
  //   liveUrl: 'https://weather-dash.netlify.app',
  //   category: 'Frontend'
  // },
  {
    id: 3,
    title: 'Personal Finance Management System',
    description: 'RESTful API for task management with user authentication, task CRUD operations, and team collaboration features.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
    githubUrl: 'https://github.com/yourusername/task-api',
    liveUrl: null,
    category: 'Backend'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Personal portfolio website showcasing projects and skills. Features responsive design, animations, and contact form.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://yourportfolio.dev',
    category: 'Frontend'
  }
];

const Projects = () => {
  // Sample project data - replace with your actual projects

  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');
  const categories = ['All', 'Frontend', 'Backend', 'Fullstack', 'Mobile'];

  useEffect(() => {
    // Filter projects based on selected category
    if (filter === 'All') {
      setProjects(projectsData);
    } else {
      const filtered = projectsData.filter(project => project.category === filter);
      setProjects(filtered);
    }
  }, [filter]);

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
      <PageHeader 
        title="My Projects" 
        subtitle="A collection of my work and side projects" 
      />
      
      <FilterButtons 
        categories={categories} 
        activeFilter={filter} 
        onFilterChange={handleFilterChange} 
      />
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.length > 0 ? (
          projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500 py-8">
            No projects found in this category.
          </p>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;