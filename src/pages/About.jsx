import { motion } from 'framer-motion';


const About = () => {
  // Education data
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Gokaraju Rangaraju Institute of Engineering and Technology',
      year: '2018 - 2022',
      description: 'Focused on software engineering, web development, and data structures & algorithms.',
    },
    {
      degree: 'Masters in Computer Science',
      institution: 'Purdue University',
      year: '2022 - 2024',
      description: 'Intensive 2-year program focused on modern web technologies and real-world applications.',
    },
  ];

  // Experience data
  const experience = [
    {
      position: 'Software Developer Intern',
      company: 'CSG Systems Inc.',
      year: 'Feb 2022 - July 2022',
      description: 'Developing responsive web applications using React.js and Node.js. Collaborating with the design team to implement user interfaces and API integrations.',
      responsibilities: [
        'Front-end development with React and Tailwind CSS',
        'Building RESTful APIs with Node.js and Express',
        'Database management with MongoDB and PostgreSQL',
        'Version control with Git and GitHub',
      ],
    },
    {
      position: 'Web Development Intern',
      company: 'Digital Innovators',
      year: '2021 (6 months)',
      description: 'Assisted the development team in building and maintaining client websites. Gained practical experience with HTML, CSS, JavaScript, and WordPress.',
      responsibilities: [
        'Assisted in developing responsive websites',
        'Performed bug fixes and website maintenance',
        'Created interactive UI components',
        'Optimized website performance',
      ],
    },
  ];

  // Skills categorized
  const skills = {
    frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Bootstrap', 'Redux'],
    backend: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'PostgreSQL', 'Firebase'],
    tools: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Webpack', 'npm'],
    other: ['Responsive Design', 'Agile Methodology', 'Unit Testing', 'UI/UX Basics'],
  };

  return (
    <>
      {/* Header Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              About Me
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              My journey, experience, and the skills I've acquired along the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Info Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 lg:mb-0"
            >
              <div className="aspect-w-3 aspect-h-4 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/assets/ProfilePicture.jpg"
                  alt=' '
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                Hello, I'm Shreya Reddy Katanguru!
              </h2>
              <div className="mt-6 text-gray-500 dark:text-gray-400 space-y-6">
                <p>
                  I'm a passionate full-stack web developer with a strong foundation in both front-end and back-end technologies. I love building intuitive, user-friendly applications that solve real-world problems.
                </p>
                <p>
                  My journey into web development began during my computer science studies, where I discovered my passion for creating interactive web experiences. Since then, I've been continuously learning and expanding my skill set to keep up with the ever-evolving tech landscape.
                </p>
                <p>
                  I'm particularly interested in React.js and Node.js ecosystems, and I enjoy working on projects that challenge me to learn new technologies and approaches.
                </p>
                <p>
                  When I'm not coding, you can find me hiking, reading tech articles, or experimenting with new recipes in the kitchen.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
              Skills & Technologies
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
              The tools and technologies I work with
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white capitalize mb-4">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {skillList.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Work Experience
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
              My professional journey so far
            </p>
          </motion.div>

          <div className="mt-12">
            <div className="space-y-12">
              {experience.map((job, index) => (
                <motion.div
                  key={job.position}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {job.position}
                    </h3>
                    <div className="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-medium text-primary">{job.company}</span>
                      <span className="mx-2">•</span>
                      <span>{job.year}</span>
                    </div>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                      {job.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {job.responsibilities.map((item) => (
                        <li key={item} className="flex items-start">
                          <svg className="h-5 w-5 text-primary mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
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
              Education
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
              My academic background and learning path
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {item.degree}
                </h3>
                <div className="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-primary">{item.institution}</span>
                  <span className="mx-2">•</span>
                  <span>{item.year}</span>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;