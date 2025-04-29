// File: simple-server.js
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

// Create Express app
const app = express();

// Basic middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}));

// Create email transporter
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-password'
  }
});

// Simple contact endpoint without validation
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email and message are required' 
      });
    }

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: 'katangurushreya@gmail.com',
      subject: `Contact Form: ${subject || 'New Contact Form Submission'}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'Not provided'}</p>
        <h4>Message:</h4>
        <p>${message}</p>
      `
    };

    // Log for debugging
    console.log('Attempting to send email:', mailOptions);
    
    // Comment out actual email sending for initial testing
    // await transporter.sendMail(mailOptions);
    
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

// Test route
app.get('/api/test', (req, res) => {
  res.json({ status: 'ok', message: 'Test endpoint working' });
});

// Start server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});