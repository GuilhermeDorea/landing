import { Link } from 'react-router-dom';
import matricunatorImagem from '../assets/imgs/MatricunatorLogo.png';
import blogImagem from '../assets/imgs/guidonews.png';
import { Tag } from '../components/Tags';

import '../styles/Projects.css';
import '../styles/index.css';

export function ProjectCard({ children, link, projectPicture, tags }) {
  return (
    <Link to={link} className="project-card">
      <img className="project-pic" src={projectPicture} />
      <div className="project-text">
        {children}
        <Tag tags={tags}></Tag>
      </div>
    </Link>
  );
}

export function ProjectsHome() {
  return (
    <div className="container">
      <h1>Projects</h1>
      <div className="projects-grid">
        <ProjectCard
          link="https://matricunator.app/"
          projectPicture={matricunatorImagem}
          tags={['React', 'Django', 'Python']}
        >
          <h3>Matricunator</h3>
          <p>
            Tool to assist students in planning their academic trajectory, helping them choose the best courses to take
            each semester based on their preferences and academic history.
          </p>
        </ProjectCard>
        <ProjectCard link="/posts" projectPicture={blogImagem} tags={['React', 'UI/UX']}>
          <h3>GuidoNews</h3>
          <p> A blog with news about technology and my personal projects</p>
        </ProjectCard>
      </div>
    </div>
  );
}
