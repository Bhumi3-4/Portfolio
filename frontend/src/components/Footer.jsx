import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="container">
        <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3">
          <span className="footer-brand">&lt;Bhumi Patil /&gt; · Built with React + Bootstrap</span>
          <span className="footer-copy">© {year} · All rights reserved</span>
          <div className="d-flex gap-3">
            <a href="https://github.com/Bhumi3-4"   target="_blank" rel="noreferrer" className="footer-social"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/bhumi-patil-a711b1287/" target="_blank" rel="noreferrer" className="footer-social"><FaLinkedin /></a>
            {/* <a href="https://www.geeksforgeeks.org/profile/bhumipafk7q"  target="_blank" rel="noreferrer" className="footer-social"><faG /></a> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer