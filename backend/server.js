// File: server.js - Main Express server setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { check, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

// Load environment variables
dotenv.config();

const app = express();

// Basic CORS setup - apply to all routes
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Parse JSON bodies
app.use(bodyParser.json());

// Create email transporter
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Contact form endpoint with validation
app.post('/api/contact', [
  check('name').trim().not().isEmpty().withMessage('Name is required'),
  check('email').isEmail().withMessage('Please provide a valid email'),
  check('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters long')
], async (req, res) => {
  // Check for validation errors
  console.log('Received a POST request to /api/contact');
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const { name, email, subject = 'New Contact Form Submission', message, phone = 'Not provided' } = req.body;
    
    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER, // Fallback to sender email if receiver not specified
      subject: `Contact Form: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h4>Message:</h4>
        <p>${message}</p>
      `
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    
    // Log the submission (optional)
    console.log('Contact form submission:', { name, email, subject, message });
    
    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully!'
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// // File: server.js - Main Express server setup
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const { check, validationResult } = require('express-validator');
// const nodemailer = require('nodemailer');

// // Load environment variables
// dotenv.config();

// const app = express();

// // CORS Configuration - explicitly allow requests from your frontend
// const corsOptions = {
//   origin: 'http://localhost:3000', // Your React app's URL
//   methods: ['GET', 'POST', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// };

// // app.use(cors({
// //   origin: '*',
// //   methods: ['GET', 'POST', 'OPTIONS'],
// //   allowedHeaders: ['Content-Type', 'Authorization']
// // }));

// // app.use(cors({ origin: 'http://localhost:3000' }));
// app.use(cors(corsOptions));  // Use CORS with the defined options
// // app.options('/api/contact', cors(corsOptions));
// // app.options('*', cors(corsOptions));  // Handle preflight OPTIONS requests

// // Middleware
// app.use(bodyParser.json());

// // Create email transporter
// const transporter = nodemailer.createTransport({
//   service: process.env.EMAIL_SERVICE || 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS
//   }
// });

// // Contact form endpoint with validation
// app.post('/api/contact', [
//   check('name').trim().not().isEmpty().withMessage('Name is required'),
//   check('email').isEmail().withMessage('Please provide a valid email'),
//   check('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters long')
// ], async (req, res) => {
//   // Check for validation errors
//   console.log('Received a POST request to /api/contact');
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ success: false, errors: errors.array() });
//   }

//   try {
//     const { name, email, subject = 'New Contact Form Submission', message, phone = 'Not provided' } = req.body;

//     // Email options
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.RECEIVER_EMAIL,      // Your email from the frontend
//       subject: `Contact Form: ${subject}`,
//       html: `
//         <h3>New Contact Form Submission</h3>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Subject:</strong> ${subject}</p>
//         <h4>Message:</h4>
//         <p>${message}</p>
//       `
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);
    
//     // Log the submission (optional)
//     console.log('Contact form submission:', { name, email, subject, message });
    
//     // Return success response
//     return res.status(200).json({ 
//       success: true, 
//       message: 'Your message has been sent successfully!' 
//     });
    
//   } catch (error) {
//     console.error('Contact form error:', error);
//     return res.status(500).json({ 
//       success: false, 
//       message: 'Failed to send message. Please try again later.' 
//     });
//   }
// });

// // Health check endpoint
// app.get('/api/health', (req, res) => {
//   res.status(200).json({ status: 'ok' });
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });