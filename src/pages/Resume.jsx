import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import ResumeSection from '../components/sections/ResumeSection';
import SkillBadge from '../components/ui/SkillBadge';
import DownloadButton from '../components/ui/DownloadButton';

const Resume = () => {
  const workExperience = [
    {
      id: 3,
      position: 'Software Developer Intern',
      company: 'CSG Systems, Inc.',
      location: 'Bangalore, KA',
      period: 'Feb 2022 - July 2022',
      responsibilities: [
        'Developed and optimized customer-facing web applications using Angular.js, JavaScript, .NET, reducing page load times by 40% and enhancing UX.',
        'Participated in code reviews, debugging, and system design discussions, ensuring maintainability and fault tolerance, which led to a 20% reduction in post-deployment issues.',
        'Optimized relational (MySQL) and NoSQL (MongoDB) queries, improving indexing and execution times by 30% for high-traffic applications.',
        'Designed and implemented RESTful APIs and microservices, integrating AWS S3 and DynamoDB for scalable data retrieval.'
      ]
    },
    {
      id: 2,
      position: 'Front End Developer',
      company: 'Elevance Health',
      location: 'Indianapolis, IN',
      period: 'Jan 2024 - Dec 2024',
      responsibilities: [
        'Led development of Elevance Health member portal and provider tools, migrating legacy systems to a React-based micro-frontend architecture and optimizing APIs with GraphQL to improve scalability and performance.',
        'Implemented shared component libraries, CI/CD pipelines, and automated testing frameworks to accelerate delivery speed and reduce time-to-market by 30%.',
        'Assisted in architecture reviews and partnered with product and UX teams to deliver scalable, high-quality solutions.'
      ]
    },
    {
      id: 1,
      position: 'Full stack Developer',
      company: 'Apple',
      location: 'Austin, TX',
      period: 'Jan 2025 - present',
      responsibilities: [
        'Engineered scalable, high-performance web applications for Apple’s digital platforms, utilizing React, TypeScript, and modern frontend frameworks to create seamless, user-centric experiences.',
        'Partnered with cross-functional teams to implement responsive, WCAG-compliant interfaces, and optimized frontend performance for global, high-traffic platforms under tight timelines.',
        'Led peer code reviews and drove continuous improvements in frontend architecture, integrating emerging technologies and best practices to maintain Apples standards for excellence.',
      ]
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'Master of Science in Computer Science',
      institution: 'Purdue University',
      location: 'West Lafayete, IN',
      duration: '2022 - 2024',
      description: 'Specialized in Web Technoloogies, Information Security and Data Privacy. Graduated with honors.'
    },
    {
      id: 2,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Gokaraju Rangaraju Institute of Engineering and Technology',
      location: 'Hyderabad, TS, India',
      duration: '2018 - 2022',
      description: 'Specialized in Dynamic Programming and Data Structures and Algorithms.'
    }
  ];

  const skills = {
    technical: [
      'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Vue.js',
      'Node.js', '.NET Core', 'MongoDB', 'PostgreSQL', 'NoSQL', 'Java', 'Python',
      'AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'VS Code', 'Linux',
      'HTML5', 'CSS3', 'Tailwind CSS'
    ],
    soft: [
      'Project Management', 'Team Leadership', 'Problem Solving',
      'Communication', 'Agile Methodology'
    ]
  };

  const certifications = [
    {
      id: 1,
      name: 'AWS Certified Cloud Solutions',
      issuer: 'Amazon Web Services',
      date: 'Jan 2022'
    },
    {
      id: 2,
      name: 'Google Professional Cloud Developer',
      issuer: 'Google Cloud',
      date: 'Nov 2021',
      url: 'https://cloud.google.com/certification/cloud-developer'
    },
    {
      id: 3,
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: 'Mar 2020',
      url: 'https://university.mongodb.com/certification'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
      <PageHeader 
        title="My Resume" 
        subtitle="Professional experience and qualifications" 
      />
      
      <div className="flex justify-between items-center mt-8 mb-12">
        <h2 className="text-xl font-semibold">Professional Overview</h2>
        <DownloadButton link="/assets/ShreyaReddy.pdf" text="Download PDF" />
      </div>
      
      <motion.div
        className="space-y-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Work Experience Section */}
        <motion.div variants={itemVariants}>
          <ResumeSection 
            title="Work Experience" 
            items={workExperience} 
            itemType="experience"
          />
        </motion.div>
       
        
        {/* Education Section */}
        <motion.div variants={itemVariants}>
          <ResumeSection 
            title="Education" 
            items={education} 
            itemType="education"
          />
        </motion.div>
        
        {/* Skills Section */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-semibold mb-6">Skills</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-lg font-medium mb-4">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} type="technical" />
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} type="soft" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Certifications Section */}
        {/* <motion.div variants={itemVariants}>
          <h3 className="text-xl font-semibold mb-6">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map(cert => (
              <div key={cert.id} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-medium text-black text-lg">{cert.name}</h4>
                <p className="text-gray-600">{cert.issuer}</p>
                <p className="text-gray-500 text-sm mt-1">{cert.date}</p>
                {cert.url && (
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 text-sm hover:underline mt-2 inline-block"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default Resume;