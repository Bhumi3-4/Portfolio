import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi'
import {SiLeetcode} from 'react-icons/si';

function Hero() {
  return (
    <section id="hero">
      <div className="hero-grid" />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center min-vh-100 py-5">

          <div className="col-lg-6 order-2 order-lg-1 mt-4 mt-lg-0">

            <div className="badge-open fade-in-1">
              <span className="green-dot" />
              Open to internships &amp; opportunities
            </div>

            <h1 className="hero-title fade-in-2">
              Hi,<br />
              I'm <span className="highlight">Bhumi Patil</span><br />
              <span className="hero-role"><p class="fs-5" >Aspiring Software Engineer &nbsp;·&nbsp; MERN Stack Developer &nbsp;·&nbsp; Problem Solver</p></span>
            </h1>

            <p className="hero-desc my-4 fade-in-3">
              I'm a 3rd-year CSE student from Jalgaon, Maharashtra who loves building
              real-world web apps. Currently sharpening my DSA skills and looking for
              opportunities to grow.
            </p>

            <div className="d-flex flex-wrap gap-3 mb-4 fade-in-4">
              <Link to="projects" smooth={true} duration={500} offset={-64}>
                <button className="btn-primary-custom">View Projects</button>
              </Link>
              <Link to="contact" smooth={true} duration={500} offset={-64}>
                <button className="btn-outline-custom">Contact Me</button>
              </Link>
            </div>

            <div className="d-flex gap-4 fade-in-5">
              <a href="https://github.com/Bhumi3-4"   target="_blank" rel="noreferrer" className="social-link"><FaGithub size={20} /></a>
              <a href="https://www.linkedin.com/in/bhumi-patil-a711b1287/" target="_blank" rel="noreferrer" className="social-link"><FaLinkedin size={20} /></a>
              <a href="https://leetcode.com/u/3H81LRUnJl/"  target="_blank" rel="noreferrer" className="social-link"><SiLeetcode size={20} /></a>
            </div>

          </div>

          <div className="col-lg-6 order-1 order-lg-2 d-flex justify-content-center fade-in-2">
            <div className="hero-blob-wrapper">
              <div className="hero-blob" />
              <img
                src="/photo2.png"
                alt="Bhumi Patil"
                className="hero-blob-photo"
                onContextMenu={(e) => e.preventDefault()}  // blocks right-click
                onDragStart={(e) => e.preventDefault()}    // blocks drag to save
                draggable={false}
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="hero-blob-placeholder" style={{ display: 'none' }}>
                <div style={{ textAlign: 'center', color: '#888', fontSize: '0.85rem' }}>
                  📷<br />Add profile.jpg<br />to /public folder
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* Scroll arrow */}
      <Link
        to="about" smooth={true} duration={500} offset={-64}
        style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', cursor: 'pointer', zIndex: 2 }}
      >
        <HiArrowDown size={22} className="social-link" />
      </Link>
    </section>
  )
}

export default Hero