import { FaMapMarkerAlt, FaUniversity, FaCode, FaLightbulb } from 'react-icons/fa'

const highlights = [
  { icon: <FaUniversity />, label: 'B.Tech CSE',    sub: 'G H Raisoni College of Engineering and Management' },
  { icon: <FaMapMarkerAlt />, label: 'Jalgaon',   sub: 'Maharashtra, India' },
  { icon: <FaCode />,        label: 'MERN Stack', sub: 'Full Stack Dev' },
  { icon: <FaLightbulb />,   label: 'DSA',        sub: 'Problem Solving' },
]

function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container">

        <h2 className="section-heading">About <span className="highlight">Me</span></h2>

        <div className="row align-items-center g-5">

          {/* Left — Bio */}
          <div className="col-lg-6 about-text">
            <p>
              I'm a B.Tech Computer Science Engineering student from Jalgaon, Maharashtra, passionate about web development and software engineering.
            </p>
            <p>
                  Currently, I'm focused on <span style={{ color: 'var(--primary)' }}>full-stack web development</span>{' '} with the MERN Stack, enjoying both building responsive user interfaces and developing efficient backend systems. Alongside this, I'm strengthening my problem-solving skills through  <span style={{ color: '#e5e5e5' }}>Data Structures &amp; Algorithms</span>{' '}
              </p>

              <p>
                I enjoy learning by building projects, exploring new technologies, and turning ideas into user-friendly web applications. I'm actively seeking <span style={{ color: 'var(--primary)' }}>internship opportunities</span> where I can learn, contribute, and grow as a developer.

              </p>
            
          </div>

          {/* Right — Highlight Cards */}
          <div className="col-lg-6">
            <div className="row g-3">
              {highlights.map((item, i) => (
                <div className="col-6" key={i}>
                  <div className="about-card">
                    <div className="about-card-icon">{item.icon}</div>
                    <div className="about-card-title">{item.label}</div>
                    <div className="about-card-sub">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About