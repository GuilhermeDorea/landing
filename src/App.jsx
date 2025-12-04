import { GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import fotoPerfil from './assets/guilhermedorea.png';
import { ContactForm } from './components/ContactForm';
import { Navbar } from './components/Navbar';
import { StarBackground } from './components/StarBackground';
import { Curriculo } from './Curriculo';
import './index.css';

function ProjectCard({ children, link, fotoPerfil }) {
  return (
    <Link to={link} className="card-link">
      <img className="proj-pic" src={fotoPerfil} />
      <div className="project-text">{children}</div>
    </Link>
  );
}

function App() {
  return (
    <>
      <StarBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<Curriculo />} />
      </Routes>
    </>
  );
}

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="card starter-card">
          <div className="left-starter-decor">
            <h2>Guilherme Dórea Almeida</h2>
            <h4 className="starter-text">
              Hello, I'm a brazilian undergratuated student at <a href="https://www.ufba.br/">Ufba</a>. I have 2 years
              of experience in developmente, and have great interest in software engineering, web development and data
              science.
            </h4>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <a href="https://github.com/GuilhermeDorea" target="_blank" rel="noreferrer" className="social-link">
                <GithubLogoIcon size={24} weight="bold" />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/guilhermedorea/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <LinkedinLogoIcon size={24} weight="bold" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="right-starter-decor">
            <img className="avatar" src={fotoPerfil} />
          </div>
        </div>

        <div className="content-section">
          <h2>Featured projects</h2>
          <div className="projects-grid">
            <ProjectCard link="https://matricunator.app/" fotoPerfil="src/assets/MatricunatorLogo.png">
              <h3>Matricunator</h3>
              <p>
                Tool to assist students in planning their academic trajectory, helping them choose the best courses to
                take each semester based on their preferences and academic history.
              </p>
            </ProjectCard>
            <ProjectCard link="https://matricunator.app/" fotoPerfil="src/assets/MatricunatorLogo.png">
              <h3>Matricunator</h3>
              <p>
                Tool to assist students in planning their academic trajectory, helping them choose the best courses to
                take each semester based on their preferences and academic history.
              </p>
            </ProjectCard>
          </div>
        </div>
        <div className="card">
          <h2>Contact me</h2>
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default App;
