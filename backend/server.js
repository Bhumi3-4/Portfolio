// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
  })
);

app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// Message Schema
const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Message = mongoose.model("Message", messageSchema);

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Google App Password
  },
});

// Verify transporter
transporter.verify((err, success) => {
  if (err) {
    console.error("❌ Email transporter error:", err);
  } else {
    console.log("✅ Email server ready");
  }
});

// Function to send email
const sendEmailNotification = async (name, email, message) => {
  console.log("📨 Sending email...");

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: `Portfolio Message from ${name}`,
    html: `
      <h2>New Portfolio Message</h2>

      <p><strong>Name:</strong> ${name}</p>

      <p>
        <strong>Email:</strong>
        <a href="mailto:${email}">
          ${email}
        </a>
      </p>

      <p><strong>Message:</strong></p>

      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent successfully for ${name}`);
  } catch (err) {
    console.error("❌ Email sending failed:", err);
  }
};

// Health check
app.get("/", (req, res) => {
  res.json({
    status: "Backend running",
  });
});

// Contact Route
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "All fields are required",
    });
  }

  try {
    // Save message to MongoDB
    await new Message({
      name,
      email,
      message,
    }).save();

    console.log(`✅ Message saved from ${name}`);

    // Send response immediately
    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

    // Send email in background
    sendEmailNotification(name, email, message);
  } catch (err) {
    console.error("❌ Server error:", err);

    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
