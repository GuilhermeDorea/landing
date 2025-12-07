import { ArticleIcon, FoldersIcon, HouseIcon, MoonIcon, SunIcon, UserIcon } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme'; // Importe o hook
import '../styles/Nav.css';

export function Navbar() {
  const [theme, toggleTheme] = useTheme();
  return (
    <nav className="navbar">
      <button
        onClick={toggleTheme}
        className="theme-toggle-button"
        aria-label={`Alternar para modo ${theme === 'dark' ? 'claro' : 'escuro'}`}
      >
        {theme === 'dark' ? <SunIcon size={24} weight="fill" /> : <MoonIcon size={24} weight="fill" />}
      </button>

      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          <HouseIcon size={20} weight="fill" />
          Home
        </NavLink>
        <NavLink to="/aboutme" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          <UserIcon size={20} weight="fill" />
          About me
        </NavLink>
        <NavLink to="/posts" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          <ArticleIcon size={20} weight="fill" />
          Posts
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
          <FoldersIcon size={20} weight="fill" />
          Projects
        </NavLink>
      </div>
    </nav>
  );
}
