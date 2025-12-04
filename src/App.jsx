import { ArrowSquareOutIcon, GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import fotoPerfil from './assets/guilhermedorea.png';
import { ContactForm } from './components/ContactForm';
import { StarBackground } from './components/StarBackground';
import { Curriculo } from './Curriculo';
import './index.css';

function GoToButton({ label, link, icon }) {
  const navigate = useNavigate(); // Hook para navegação via código
  function handleClick() {
    navigate(link);
  }
  return (
    <button className="MyButton" onClick={handleClick}>
      {icon}
      {label}
    </button>
  );
}

function App() {
  return (
    <>
      <StarBackground />
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
        <div className="card">
          <img className="avatar" src={fotoPerfil} />
          <h1>Guilherme Dórea Almeida</h1>
          <h2>Graduando em Engenharia da Computação</h2>
          <div>
            <GoToButton label="Curriculo" link="/cv" />
          </div>
          <div style={{ marginTop: '20px' }}>
            <a href="https://github.com/GuilhermeDorea" target="_blank" className="social-icon">
              <GithubLogoIcon size={64} />
            </a>
            <a href="https://linkedin.com/in/guilhermedorea/" target="_blank" className="social-icon">
              <LinkedinLogoIcon size={64} />
            </a>
          </div>
        </div>

        <section className="content-section">
          <h2>Projetos em Destaque</h2>
          <div className="projects-grid">
            {/* Cartão do Projeto 1 */}
            <div className="project-card">
              <h4>Matricunator</h4>
              <p>
                Ferramenta para definir grade curricular da UFBA, com opção de otimização automática baseada nas vagas e
                matérias do usuário.
              </p>
              <GoToButton
                label="Acessar site"
                link="https://matricunator.app/"
                external={true}
                icon={<ArrowSquareOutIcon size={20} />}
              />
            </div>
          </div>
        </section>
        <section className="card">
          <h2>Contate-me</h2>
          <ContactForm />
        </section>
      </div>
    </>
  );
}

export default App;
