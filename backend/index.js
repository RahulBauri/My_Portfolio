import express from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Email sending endpoint
app.post('/send-email', async (req, res) => {
  const { senderEmail, emailSubject, emailBody } = req.body;

  // Set up transporter with your email service credentials
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your app password
    },
  });

  // Email options
  let mailOptions = {
    from: senderEmail, // Use your email address to avoid issues with Gmail policies
    to: process.env.RECEIVER_EMAIL,
    subject: emailSubject,
    text: emailBody, // body of the email
    replyTo: senderEmail, // This allows you to reply directly to the sender's email
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email', error });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
