import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { StarBackground } from './components/StarBackground';
import { AboutMe } from './pages/AboutMe';
import { BlogHome, BlogPost } from './pages/Blog';
import { Home } from './pages/Home';
import { Project, ProjectsHome } from './pages/Projects';
import './styles/App.css';
import './styles/index.css';

function App() {
  return (
    <>
      <StarBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/posts" element={<BlogHome />} />
        <Route path="/posts/:slug" element={<BlogPost />} />
        <Route path="/projects" element={<ProjectsHome />} />
        <Route path="/projects/:slug" element={<Project />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
