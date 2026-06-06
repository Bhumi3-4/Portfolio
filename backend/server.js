// Receives contact form, saves to MongoDB, and emails host via Gmail

const express    = require('express')
const mongoose   = require('mongoose')
const cors       = require('cors')
const nodemailer = require('nodemailer')
require('dotenv').config()

const app  = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' }))
app.use(express.json())

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB error:', err))

// Message Schema
const messageSchema = new mongoose.Schema({
  name:      { type: String, required: true },
  email:     { type: String, required: true },
  message:   { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})
const Message = mongoose.model('Message', messageSchema)

// Nodemailer transporter (Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

// Send email notification
const sendEmailNotification = async (name, email, message) => {
  const mailOptions = {
    from:    process.env.EMAIL_USER,
    to:      process.env.EMAIL_TO,
    subject: `Portfolio Message from ${name}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9f9f9;border-radius:10px;overflow:hidden;">
        <div style="background:#0ea5e9;padding:24px 32px;">
          <h2 style="color:white;margin:0;font-size:1.3rem;">New Message from Your Portfolio</h2>
        </div>
        <div style="padding:32px;background:white;">
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;color:#888;font-size:0.85rem;width:80px;">NAME</td>
              <td style="padding:10px 0;color:#111;font-weight:600;">${name}</td>
            </tr>
            <tr style="border-top:1px solid #f0f0f0;">
              <td style="padding:10px 0;color:#888;font-size:0.85rem;">EMAIL</td>
              <td style="padding:10px 0;"><a href="mailto:${email}" style="color:#0ea5e9;">${email}</a></td>
            </tr>
            <tr style="border-top:1px solid #f0f0f0;">
              <td style="padding:10px 0;color:#888;font-size:0.85rem;vertical-align:top;">MESSAGE</td>
              <td style="padding:10px 0;color:#333;line-height:1.6;">${message}</td>
            </tr>
          </table>
          <div style="margin-top:28px;">
            <a href="mailto:${email}" style="background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;display:inline-block;">
              Reply to ${name}
            </a>
          </div>
        </div>
        <div style="padding:16px 32px;background:#f9f9f9;border-top:1px solid #eee;">
          <p style="color:#aaa;font-size:0.78rem;margin:0;">
            Sent from your portfolio contact form
          </p>
        </div>
      </div>
    `,
  }
  await transporter.sendMail(mailOptions)
  console.log(`Email sent for message from ${name}`)
}

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'Backend running' })
})

// POST /api/contact
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  try {
    // Save to MongoDB
    await new Message({ name, email, message }).save()
    console.log(`Message saved from ${name}`)

    // if sending email fails, message is still saved
    try {
      await sendEmailNotification(name, email, message)
    } catch (emailErr) {
      console.error('Email failed but message was saved:', emailErr.message)
    }

    res.status(200).json({ success: true })

  } catch (err) {
    console.error('Error:', err)
    res.status(500).json({ error: 'Server error' })
  }
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))