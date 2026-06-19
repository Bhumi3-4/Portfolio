import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const navLinks = [
  { label: 'About',    to: 'about'    },
  { label: 'Skills',   to: 'skills'   },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact',  to: 'contact'  },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar navbar-expand-md fixed-top navbar-custom ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">

        <a className="navbar-brand navbar-brand-custom">&lt;Bhumi Patil /&gt;</a>

        {/* Mobile hamburger button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto align-items-md-center gap-md-3 gap-2 mt-3 mt-md-0 ">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-64}
                  className="nav-link-custom text-decoration-none"
                  data-bs-toggle="collapse"
                  data-bs-target="#navMenu"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="nav-item mb-2 mb-md-0">
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-resume text-decoration-none">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
