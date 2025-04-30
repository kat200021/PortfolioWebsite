import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import ContactForm from '../components/sections/ContactForm';
import SocialLinks from '../components/ui/SocialLinks';
import { Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (formData) => {
    // If this is just a reset request, clear the states
    if (formData.resetOnly) {
      setSubmitSuccess(false);
      setSubmitError(null);
      return;
    }
  
    setSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);
    
    try {
      // Send to Formspree
      const response = await fetch('https://formspree.io/f/mqaqedlp', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Form submission failed');
      }
      
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error.message || 'Failed to send message. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
    exit: { opacity: 0, y: -20 }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'katangurushreya@gmail.com',
      link: 'mailto:katangurushreya@gmail.com'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Austin, TX',
      link: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Availability',
      value: 'Open to opportunities',
      link: null
    }
  ];

  return (
    <motion.section 
      className="py-12 px-4 md:px-8 max-w-6xl mx-auto"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <PageHeader 
        title="Get In Touch" 
        subtitle="I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision." 
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-8">
        <div className="lg:col-span-2">
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
          
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-medium">{item.title}</h4>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      className="text-blue-600 hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-600">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
            <SocialLinks />
          </div>
        </div>
        
        <div className="lg:col-span-3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-gray-600 font-bold mb-6">Send Me a Message</h3>
            
            <ContactForm 
              onSubmit={handleSubmit}
              isSubmitting={submitting}
              submitSuccess={submitSuccess}
              submitError={submitError}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;


// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import PageHeader from '../components/ui/PageHeader';
// import ContactForm from '../components/sections/ContactForm';
// import SocialLinks from '../components/ui/SocialLinks';
// import { Mail, MapPin, Clock } from 'lucide-react';

// const Contact = () => {
//   const [submitting, setSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);
//   const [submitError, setSubmitError] = useState(null);

//   const handleSubmit = async (formData) => {
//     // If this is just a reset request, clear the states
//     if (formData.resetOnly) {
//       setSubmitSuccess(false);
//       setSubmitError(null);
//       return;
//     }
  
//     setSubmitting(true);
//     setSubmitSuccess(false);
//     setSubmitError(null);
    
//     try {
//       // Specify the full URL to your backend server
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify(formData),
//         credentials: 'omit' // Don't send cookies with the request
//       });

//       console.log('Response status:', response.status);
//       console.log('Response ok?', response.ok);

//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(`Server responded with ${response.status}: ${errorText || response.statusText}`);
//       }
      
//       // const data = await response.json();
//       setSubmitSuccess(true);
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setSubmitError(error.message || 'Failed to send message. Please try again later.');
//     } finally {
//       setSubmitting(false);
//     }
//   };


//   const pageVariants = {
//     initial: { opacity: 0, y: 20 },
//     animate: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.6 }
//     },
//     exit: { opacity: 0, y: -20 }
//   };

//   const contactInfo = [
//     {
//       icon: <Mail className="w-6 h-6" />,
//       title: 'Email',
//       value: 'katangurushreya@gmail.com',
//       link: 'mailto:katangurushreya@gmail.com'
//     },
//     {
//       icon: <MapPin className="w-6 h-6" />,
//       title: 'Location',
//       value: 'Austin, TX',
//       link: null
//     },
//     {
//       icon: <Clock className="w-6 h-6" />,
//       title: 'Availability',
//       value: 'Open to opportunities',
//       link: null
//     }
//   ];

//   return (
//     <motion.section 
//       className="py-12 px-4 md:px-8 max-w-6xl mx-auto"
//       variants={pageVariants}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//     >
//       <PageHeader 
//         title="Get In Touch" 
//         subtitle="I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision." 
//       />
      
//       <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-8">
//         <div className="lg:col-span-2">
//           <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
          
//           <div className="space-y-6">
//             {contactInfo.map((item, index) => (
//               <div key={index} className="flex items-start">
//                 <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
//                   {item.icon}
//                 </div>
//                 <div>
//                   <h4 className="font-medium">{item.title}</h4>
//                   {item.link ? (
//                     <a 
//                       href={item.link} 
//                       className="text-blue-600 hover:underline"
//                     >
//                       {item.value}
//                     </a>
//                   ) : (
//                     <p className="text-gray-600">{item.value}</p>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <div className="mt-10">
//             <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
//             <SocialLinks />
//           </div>
//         </div>
        
//         <div className="lg:col-span-3">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-xl text-gray-600 font-bold mb-6">Send Me a Message</h3>
            
//             <ContactForm 
//               onSubmit={handleSubmit}
//               isSubmitting={submitting}
//               submitSuccess={submitSuccess}
//               submitError={submitError}
//             />
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Contact;

