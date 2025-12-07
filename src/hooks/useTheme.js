// src/hooks/useTheme.js
import { useEffect, useState } from 'react';

// Chave para salvar no navegador
const THEME_KEY = 'guilherme-theme';

export function useTheme() {
  let theme;
  let setTheme;
  if (localStorage.getItem(THEME_KEY)) {
    [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY));
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    [theme, setTheme] = useState(() => 'light');
  } else {
    [theme, setTheme] = useState(() => 'dark');
  }

  useEffect(() => {
    const root = window.document.body;

    // Remove qualquer classe de tema existente
    root.classList.remove('light-theme', 'dark-theme');

    // Define qual classe aplicar (só aplica 'light-theme' se for light)
    if (theme === 'light') {
      root.classList.add('light-theme');
    }

    // Salva a preferência do usuário
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]); // Roda sempre que o estado 'theme' muda

  // Função para alternar entre os dois modos
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return [theme, toggleTheme];
}
