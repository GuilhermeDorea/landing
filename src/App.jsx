import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Curriculo } from './Curriculo';

function GoToButton({ label, link }) {
  const navigate = useNavigate(); // Hook para navegação via código
  function handleClick() {
    navigate(link);
  }
  return (
    <button className="MyButton" onClick={handleClick}>
      {label} {link ? '' : '(sem link)'}
    </button>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cv" element={<Curriculo />} />
    </Routes>
  );
}

function Home() {
  return (
    <>
      <div className="card">
        <h1>Guilherme Dórea Almeida</h1>
        <h2>Graduando em Engenharia da Computação</h2>
        <div>
          <GoToButton label="Curriculo" link="/cv" />
        </div>
        <div>
          <GoToButton label="Matricunator" link="https://matricunator.app/" />
        </div>
      </div>
    </>
  );
}

export default App;
