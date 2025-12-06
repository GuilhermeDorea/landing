import { Link } from 'react-router-dom';
import matricunatorImagem from '../assets/imgs/MatricunatorLogo.png';
import '../styles/Projects.css';
import '../styles/index.css';

function ProjectCard({ children, link, projectPicture }) {
  return (
    <Link to={link} className="project-card">
      <img className="project-pic" src={projectPicture} />
      <div className="project-text">{children}</div>
    </Link>
  );
}

export function ProjectsHome() {
  return (
    <div className="projects-home">
      <h1>Projects</h1>
      <div className="projects-grid">
        <ProjectCard link="https//google.com" projectPicture={matricunatorImagem}>
          <h3>Matricunator</h3>
          <p>
            Tool to assist students in planning their academic trajectory, helping them choose the best courses to take
            each semester based on their preferences and academic history.
          </p>
        </ProjectCard>
        <ProjectCard link="https//google.com" projectPicture={matricunatorImagem}>
          <h3>Tech</h3>
          <p> A blog with news about technology and my personal projects</p>
        </ProjectCard>
      </div>
    </div>
  );
}

export function Project() {
  return <></>;
}
