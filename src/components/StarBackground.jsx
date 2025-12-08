import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import '../styles/index.css';

export function StarBackground() {
  const [init, setInit] = useState(false);
  const [theme] = useTheme();

  // Inicializa o motor gráfico uma única vez
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  let particle_color = '#080c18ff';

  if (theme == 'light') {
    particle_color = '#080c18ff';
    console.log('sexoasasao');
  }

  const options = {
    fpsLimit: 100,
    interactivity: {
      events: {
        onHover: {
          enable: false,
          mode: 'grab'
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        }
      }
    },
    particles: {
      color: {},
      links: {
        color: '#1c1b22',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce'
        },
        random: false,
        speed: 0.2, // Velocidade do movimento natural
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 80 // Quantidade de estrelas
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: 'circle'
      },
      size: {
        value: { min: 1, max: 3 }
      }
    },
    detectRetina: true
  };

  if (init) {
    return <Particles id="tsparticles" options={options} className="background-effects" />;
  }

  return <></>;
}
