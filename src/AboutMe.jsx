import {
  AtomIcon,
  CodeIcon,
  DatabaseIcon,
  FileJsIcon,
  FilePyIcon,
  HeadCircuitIcon,
  HeartIcon
} from '@phosphor-icons/react';
import './AboutMe.css';
import Photo1Mari from './assets/Foto1Mari.png';
import Photo2Mari from './assets/Foto2Mari.png';
import { AnimatedSection } from './components/AnimatedSlide';
const DatingYearsMari = new Date().getFullYear() - 2018;
const experiences = [
  {
    date: '2025',
    role: 'IT Intern',
    company: 'Sunter Technology Ltda.',
    description:
      'Development a fullstack web application to manage company deliverys and logistics.' +
      'Designed, developed, and deployed the application using React.js and Django. Also, implemented' +
      'and AI chatbot to assist users with common inquiries and questions.'
  },
  {
    date: '2025',
    role: 'Avionics Summerjob Intern',
    company: 'Embraer S.A.',
    description:
      'Development of the aircraft maintenance system by requirements gathering and testing.' +
      'Worked closely with the engineering team to ensure system reliability and performance.'
  },
  {
    date: '2022 - Present',
    role: 'Stability and Control Leader',
    company: 'Axé Fly UFBA',
    description:
      'Focus in algorithims, data structure, and software development.' +
      'Participated in various projects and hackathons, developing skills in teamwork and problem-solving.' +
      'Completed courses in machine learning, data science, and low-level programming.'
  },
  {
    date: '2022 - Present',
    role: 'Engineer Student',
    company: 'Universidade Federal da Bahia',
    description:
      'Focus in algorithims, data structure, and software development.' +
      'Participated in various projects and hackathons, developing skills in teamwork and problem-solving.' +
      'Completed courses in machine learning, data science, and low-level programming.'
  }
];

export function SkillCard({ skill, level, icon }) {
  const totalLevels = 5;
  const levelMap = {
    Beginner: 1,
    Basic: 2,
    Intermediate: 3,
    Advanced: 4,
    Expert: 5
  };

  const activeLevel = levelMap[level];

  return (
    <div className="skill-card">
      <div className="skill-header">
        {icon}
        <h3>{skill}</h3>
      </div>

      <div className="level-container">
        {[...Array(totalLevels)].map((_, index) => (
          <div key={index} className={`level-dot ${index < activeLevel ? 'filled' : ''}`} />
        ))}
      </div>

      <p className="level-text">{level}</p>
    </div>
  );
}

export function AboutMe() {
  return (
    <div className="about-me-container">
      {/* === Sobre mim === */}
      <AnimatedSection className="about-me-card card" yOffset={-50}>
        <h1>About me</h1>
        <p>
          I'm Guilherme Dórea Almeida. A computer engineering student at the 8° period (4 reamaining), living in
          Salvador, Bahia, Brasil. In my free time I like to study new technologies, and develop my cool personal
          projects.
        </p>
        <p>
          Some of my main projects are a personal blog <a href="https://guidonews.guilhermedorea.com">GuidoNews </a>
          where I share news about engineering and technology that are relevant. And the{' '}
          <a href="https://matricunator.app/">Matricunator</a>, an application that helps UFBA students to build their
          schedules more easily, with a greedy algorithim that optimizes the use of free time between classes.
        </p>
        <p>
          When I'm not coding, I love to spend my time with the ones I love, my family, my friends and my only and
          eternal love, Mariana. I enjoy helping others by education and sharing my knowledge through tutoring and
          mentoring. I also love traveling and exploring new places, which broadens my perspective and inspires my
          creativity.
        </p>
      </AnimatedSection>
      {/* === Minhas habilidades === */}
      <AnimatedSection className="card about-me-container">
        <h2>Main skills</h2>
        <div className="skill-cards-container">
          <SkillCard skill="Algorithms" level="Expert" icon={<CodeIcon size={32} weight="bold" />} />
          <SkillCard skill="AI devOps" level="Expert" icon={<HeadCircuitIcon size={32} weight="bold" />} />
          <SkillCard skill="Python" level="Expert" icon={<FilePyIcon size={32} weight="bold" />} />
          <SkillCard skill="Django" level="Advanced" icon={<DatabaseIcon size={32} weight="bold" />} />
          <SkillCard skill="React.js" level="Advanced" icon={<AtomIcon size={32} weight="bold" />} />
          <SkillCard skill="Js/Ts" level="Intermediate" icon={<FileJsIcon size={32} weight="bold" />} />
        </div>
      </AnimatedSection>
      {/* === Card de experiencia === */}
      <AnimatedSection className="about-me-card card" yOffset={0}>
        <h2>Experience</h2>
        <div className="timeline-container">
          {experiences.map((item) => (
            <AnimatedSection className="timeline-item" yOffset={100}>
              <span className="timeline-date">{item.date}</span>
              <div className="timeline-dot" />
              <h3 className="timeline-role">
                {item.role} - {item.company}
              </h3>
              <p className="timeline-desc">{item.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
      {/* === Loves === */}
      <AnimatedSection className="about-me-card" yOffset={100}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <HeartIcon size={32} weight="bold" />
          My love
        </h2>
        <div className="loves-card">
          <img className="love-pic" src={Photo1Mari} />
          <img className="love-pic" src={Photo2Mari} />
        </div>
        <p>
          Those photos are with Mariana, we've been toghether for {DatingYearsMari} years! We love being toghether an
          she's my main motivation to move on, and be a better person.
        </p>
      </AnimatedSection>
    </div>
  );
}
