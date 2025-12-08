import { DownloadIcon, EnvelopeIcon, GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import GuidoNews from '../assets/imgs/guidonews.png';
import fotoPerfil from '../assets/imgs/guilhermedorea.png';
import matricunatorImagem from '../assets/imgs/MatricunatorLogo.png';
import resume from '../assets/pdfs/Resume_GuilhermeDoreaAlmeida.pdf';
import { ContactForm } from '../components/ContactForm';
import { ProjectCard } from '../pages/Projects';
import '../styles/Home.css';
import '../styles/index.css';
import '../styles/Projects.css';

export function Home() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <div className="container">
        <div className="starter-card">
          <div className="left-starter-decor">
            <h2 style={{ margin: '0px 0px 0em 0px' }}>
              Hi, I'm{' '}
              <Link className="myname" to="/aboutme" data-tooltip="About me">
                Guilherme Dórea Almeida{' '}
              </Link>{' '}
              <a
                target="_blank"
                className="aviao"
                href="https://www.instagram.com/axeflyaerodesign/"
                data-tooltip="Axé Fly team Instagram"
              >
                ✈️{' '}
              </a>
            </h2>
            <h4 style={{ margin: '0px 0px 0px 0px' }}>Computer engineer student 🇧🇷</h4>
            <p className="starter-text">
              I have 2 years of experience in software development. I mainly work with software engineering, aeronautic
              engineering, data science and fullstack web development.
            </p>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <a href="https://github.com/GuilhermeDorea" target="_blank" className="social-link">
                <GithubLogoIcon size={24} weight="bold" />
                <span>GitHub</span>
              </a>

              <a href="https://linkedin.com/in/guilhermedorea/" target="_blank" className="social-link">
                <LinkedinLogoIcon size={24} weight="bold" />
                <span>LinkedIn</span>
              </a>
              <a download={true} href={resume} style={{ cursor: 'pointer' }} target="_blank" className="social-link">
                <DownloadIcon size={24} weight="bold" />
                <span>Resume</span>
              </a>
              <a style={{ cursor: 'pointer' }} onClick={scrollToContact} target="_blank" className="social-link">
                <EnvelopeIcon size={24} weight="bold" />
                <span>Mail me</span>
              </a>
            </div>
          </div>
          <div className="right-starter-decor">
            <img className="avatar" src={fotoPerfil} />
          </div>
        </div>

        <div className="container">
          <h2 style={{ marginBottom: '3rem' }}>Projects</h2>
          <div className="projects-grid">
            <ProjectCard
              link="https://matricunator.app/"
              projectPicture={matricunatorImagem}
              tags={['React', 'Django', 'Python']}
            >
              <h3>Matricunator</h3>
              <p>
                Tool to assist students in planning their academic trajectory, helping them choose the best courses to
                take each semester based on their preferences and academic history.
              </p>
            </ProjectCard>
            <ProjectCard link="/posts" projectPicture={GuidoNews} newtag={false} tags={['React', 'UI/UX']}>
              <h3>GuidoNews</h3>
              <p> A blog with news about technology and my personal projects</p>
            </ProjectCard>
          </div>
        </div>
        <div className="container contact-container" id="contact">
          <h2>Contact me</h2>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
