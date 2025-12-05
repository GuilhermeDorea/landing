import { GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react';
import '../styles/Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-copy">
        <p>Guilherme Dórea Almeida &copy; {currentYear}</p>
      </div>
      <div className="footer-socials">
        <a href="https://github.com/GuilhermeDorea" target="_blank" rel="noreferrer" aria-label="GitHub">
          <GithubLogoIcon size={24} />
        </a>
        <a href="https://linkedin.com/in/guilhermedorea/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedinLogoIcon size={24} />
        </a>
      </div>
    </footer>
  );
}
