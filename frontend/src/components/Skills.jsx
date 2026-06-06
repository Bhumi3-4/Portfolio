const skillGroups = [
  {
    category: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Bootstrap'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js','JWT Auth'],
  },
  {
    category: 'Database',
    skills: ['MongoDB', 'Mongoose', 'MongoDB Atlas'],
  },
  {
    category: 'Languages & CS',
    skills: ['Basic Java', 'Data Structures', 'Algorithms (Basic)', 'OOP Concepts'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git & GitHub', 'VS Code'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container">

        <h2 className="section-heading">Tech <span className="highlight">Skills</span></h2>
        <p className="section-sub">What I work with</p>

        <div className="row g-4">
          {skillGroups.map((group, i) => (
            <div className="col-sm-6 col-lg-4" key={i}>
              <div className="skill-card">
                <div className="skill-cat">{group.category}</div>
                <div>
                  {group.skills.map((skill, j) => (
                    <span className="skill-tag" key={j}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-5" style={{ color: '#444', fontFamily: 'monospace', fontSize: '0.85rem' }}>
          // always learning, always building
        </p>
      </div>
    </section>
  )
}

export default Skills