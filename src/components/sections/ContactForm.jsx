import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mqaqedlp");
  
  if (state.succeeded) {
    return (
      <motion.div 
        className="text-center py-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <h3 className="text-2xl font-bold text-green-600 mb-2">Message Sent!</h3>
        <p className="mb-4">Thank you for reaching out. I'll get back to you soon.</p>
        <button 
          onClick={() => window.location.reload()}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="bg-white rounded-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border text-gray-800 rounded focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border rounded text-gray-800 focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full p-2 border rounded text-gray-800 focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          />
          <ValidationError 
            prefix="Subject" 
            field="subject"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full p-2 border rounded text-gray-800 focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          ></textarea>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>
        
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-colors"
        >
          {state.submitting ? 'Sending...' : 'Send Message'}
        </button>
        
        <ValidationError 
          errors={state.errors}
          className="text-red-500 mt-4"
        />
      </form>
    </motion.div>
  );
};

export default ContactForm;


// import { useState } from 'react';
// import { motion } from 'framer-motion';

// const ContactForm = ({ onSubmit, isSubmitting, submitSuccess, submitError }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Send form data to parent component which handles the API call
//     onSubmit(formData);
//   };

//   const resetForm = () => {
//     setFormData({ name: '', email: '', subject: '', message: '' });
//     // This assumes your parent component has a way to reset success state
//     onSubmit({ resetOnly: true });
//   };

//   return (
//     <motion.div 
//       className="bg-white rounded-lg"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7 }}
//     >
//       {submitSuccess ? (
//         <motion.div 
//           className="text-center py-8"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//         >
//           <h3 className="text-2xl font-bold text-green-600 mb-2">Message Sent!</h3>
//           <p className="mb-4">Thank you for reaching out. I'll get back to you soon.</p>
//           <button 
//             onClick={resetForm} 
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             Send another message
//           </button>
//         </motion.div>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-2 border text-gray-800 rounded focus:border-blue-500 focus:ring focus:ring-blue-200"
//               required
//             />
//           </div>
          
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-2 border rounded text-gray-800 focus:border-blue-500 focus:ring focus:ring-blue-200"
//               required
//             />
//           </div>
          
//           <div className="mb-4">
//             <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
//             <input
//               type="text"
//               id="subject"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               className="w-full p-2 border rounded text-gray-800 focus:border-blue-500 focus:ring focus:ring-blue-200"
//               required
//             />
//           </div>
          
//           <div className="mb-4">
//             <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows="5"
//               className="w-full p-2 border rounded text-gray-800 focus:border-blue-500 focus:ring focus:ring-blue-200"
//               required
//             ></textarea>
//           </div>
          
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-colors"
//           >
//             {isSubmitting ? 'Sending...' : 'Send Message'}
//           </button>
          
//           {submitError && (
//             <p className="text-red-500 mt-4">{submitError}</p>
//           )}
//         </form>
//       )}
//     </motion.div>
//   );
// };

// export default ContactForm;