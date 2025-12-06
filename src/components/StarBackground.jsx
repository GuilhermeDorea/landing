import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useState } from 'react';

export function StarBackground() {
  const [init, setInit] = useState(false);

  // Inicializa o motor gráfico uma única vez
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = {
    background: {
      color: { value: '#080c18ff' }
    },

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
      color: {
        value: '#ffffff'
      },
      links: {
        color: '#ffffff',
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
        speed: 0.1, // Velocidade do movimento natural
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
