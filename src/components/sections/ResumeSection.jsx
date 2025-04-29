import React from 'react';
import { motion } from 'framer-motion';

const ResumeSection = ({ title, items, itemType }) => {
  const safeItems = Array.isArray(items) ? items : [];
  return (
    <motion.div 
      className="mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">{title}</h2>
      
      <div className="space-y-8">
      {safeItems.length > 0 ? (
          safeItems.map((item, index) => (
          <motion.div
            key={index}
            className="ml-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >

      <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:rounded-full before:bg-blue-500 before:border-4 before:border-white before:shadow">
                {itemType === 'experience' ? (
                  <>
                    <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold">{item.position}</h3>
                      <span className="text-gray-70">{item.period}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                      <span className="font-medium">{item.company}</span>
                      <span className="text-gray-70">{item.location}</span>
                    </div>
                    <ul className="list-disc ml-5 mt-2 text-white-700">
                      {item.responsibilities.map((resp, idx) => (
                        <li key={idx} className="mb-1">{resp}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold">{item.degree}</h3>
                      <span className="text-gray-100">{item.duration}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                      <span className="font-medium">{item.institution}</span>
                      <span className="text-gray-100">{item.location}</span>
                    </div>
                    <p className="text-yellow-700 mt-2">{item.description}</p>
                  </>
                )}
              </div>
            </motion.div>
          ))
        ) : (
          <p>No items available.</p>
        )}
      </div>
    </motion.div>
  );
};


export default ResumeSection;