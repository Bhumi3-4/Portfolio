import { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status,   setStatus]   = useState('')
  const [loading,  setLoading]  = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section-pad">
      <div className="container">

        <h2 className="section-heading">Get In <span className="highlight">Touch</span></h2>
        <p className="section-sub">I’m currently open to internships, collaborations, and exciting project opportunities.</p>

        <div className="row g-5">

          {/* Left — Info */}
          <div className="col-lg-5">
            <p style={{ color: '#777', lineHeight: '1.8', fontSize: '0.95rem' }}> Whether you have an internship opportunity, want to collaborate on a project, or just want to connect — feel free to reach out.
            </p>

            <div className="mt-4">
              <div className="contact-info-item">
                <HiLocationMarker className="contact-icon" />
                Jalgaon, Maharashtra, India
              </div>
              <a href="bhumipatil013@gmail.com" className="contact-info-item">
                <FaEnvelope className="contact-icon" />
                bhumipatil013@gmail.com 
              </a>
              <a href="https://www.linkedin.com/in/bhumi-patil-a711b1287/" target="_blank" rel="noreferrer" className="contact-info-item">
                <FaLinkedin className="contact-icon" />
                www.linkedin.com/in/bhumi-patil-a711b1287/
              </a>
              <a href="https://github.com/Bhumi3-4" target="_blank" rel="noreferrer" className="contact-info-item">
                <FaGithub className="contact-icon" />
                https://github.com/Bhumi3-4 
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="col-lg-7">
            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="contact-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="xyz"
                  className="form-control contact-input"
                />
              </div>

              <div className="mb-3">
                <label className="contact-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="xyz@example.com"
                  className="form-control contact-input"
                />
              </div>

              <div className="mb-3">
                <label className="contact-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Hi! I wanted to talk about..."
                  className="form-control contact-input"
                  style={{ resize: 'none' }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary-custom w-100"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-center mt-3" style={{ color: '#4ade80', fontSize: '0.875rem' }}>
                  ✓ Message sent! I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-center mt-3" style={{ color: '#f87171', fontSize: '0.875rem' }}>
                  ✗ Something went wrong. Try emailing me directly!
                </p>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact