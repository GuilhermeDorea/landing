import {
  ArticleIcon,
  DownloadSimpleIcon,
  GithubLogoIcon,
  HouseIcon,
  LinkedinLogoIcon,
  UserIcon
} from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';
import fotoPerfil from '../assets/imgs/GD.svg';
import resume from '../assets/pdfs/Resume_GuilhermeDoreaAlmeida.pdf';
import '../styles/Nav.css';

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img className="logo" src={fotoPerfil} />
      </div>

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

        <a href={resume} download={true} className="nav-item">
          <DownloadSimpleIcon size={20} />
          Resume pt-BR
        </a>
      </div>
      <div className="navbar-social">
        <a href="https://github.com/GuilhermeDorea" target="_blank" rel="noreferrer">
          <GithubLogoIcon size={24} />
        </a>
        <a href="https://linkedin.com/in/guilhermedorea/" target="_blank" rel="noreferrer">
          <LinkedinLogoIcon size={24} />
        </a>
      </div>
    </nav>
  );
}
