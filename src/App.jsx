import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { StarBackground } from './components/StarBackground';
import { AboutMe } from './pages/AboutMe';
import { BlogHome, BlogPost } from './pages/Blog';
import { Home } from './pages/Home';
import { ProjectsHome } from './pages/Projects';
import './styles/App.css';
import './styles/index.css';

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <StarBackground />

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/posts" element={<BlogHome />} />
        <Route path="/posts/:slug" element={<BlogPost />} />
        <Route path="/projects" element={<ProjectsHome />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
