import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'DevForge',
    description: 'Developed DevForge, a full-stack MERN collaboration platform with JWT authentication, real-time Socket.io chat, Kanban-based task management, and team recruitment workflows, deployed using Vercel, Render, and MongoDB Atlas.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Socket.io],
    github: 'https://github.com/Bhumi3-4/DevForge',
    live: 'https://dev-forge-delta.vercel.app/',
    // featured: true,
  },
  {
    title: 'Airbnb Clone',
    description: 'A complete Airbnb Clone project utilizing the MERN Stack which includes User Authentication, Property Listing CRUD functionality, and Review Management for improved user engagement experience.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/Bhumi3-4/Wanderlust',
    // live: 'https://your-live-link.com',
    // featured: true,
  },
  {
    title: 'GitHub Clone',
    description: 'A web portal for students to check their exam results. Built with Node.js backend and MongoDB. Admin can upload results via CSV.',
    tech: ['Node.js', 'Express', 'MongoDB', 'HTML/CSS', 'JavaScript'],
    github: 'https://github.com/Bhumi3-4/GitHub-backend',
    // live: null,
    // featured: true,
  },
  {
    title: 'Portfolio Website',
    description: "This portfolio you're looking at right now! Built with React and Bootstrap. Fully responsive across all devices.",
    tech: ['React', 'Bootstrap', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Bhumi3-4',
    live: ' https://portfolio-mu-seven-i363fpbw94.vercel.app/',
    // featured: false,
  },

]

function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container">

        <h2 className="section-heading">My <span className="highlight">Projects</span></h2>
        <p className="section-sub">Things I've built so far</p>

        <div className="row g-4">
          {projects.map((project, i) => (
            <div className="col-md-6" key={i}>
              <div className="proj-card">

                {project.featured && (
                  <div><span className="feat-badge">★ Featured</span></div>
                )}

                <h4 className="proj-title">{project.title}</h4>
                <p className="proj-desc mb-3">{project.description}</p>

                {/* Tech tags */}
                <div className="mb-2">
                  {project.tech.map((t, j) => (
                    <span className="tech-tag" key={j}>{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="proj-links-row d-flex gap-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="proj-link">
                    <FaGithub /> Code
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="proj-link">
                      <FaExternalLinkAlt size={11} /> Live Demo
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* GitHub button */}
        <div className="text-center mt-5">
          <a
            href="https://github.com/Bhumi3-4/"
            target="_blank"
            rel="noreferrer"
            className="btn-outline-custom d-inline-flex align-items-center gap-2"
          >
            <FaGithub /> See more on GitHub
          </a>
        </div>

      </div>
    </section>
  )
}

export default Projects
