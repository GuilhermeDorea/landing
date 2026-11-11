// All page copy, in both languages. Keys must match between `en` and `pt`.
export const copy = {
  en: {
    nav: { prod: 'In production', shop: 'Workshop', record: 'Record', contact: 'Contact' },
    motive: ['I like software best when someone ', 'depends on it', ". I'm looking for a team where that is the job."],
    stamp: ['Open', 'to work'],
    spec: {
      title: 'Spec',
      rows: [
        ['Wants', 'Internship or junior role in software engineering'],
        ['Now', 'Computer Engineering, UFBA, 10th semester'],
        ['Stack', 'Python · Django · React · SQL · C'],
        ['Worked', 'Sunter Technology · Embraer']
      ],
      cta: 'Get in touch'
    },
    prod: {
      title: 'In production',
      note: 'Deployed, with real users',
      matricunator: {
        tag: 'Live · matricunator.app ↗',
        text: 'UFBA students use it to build their semester. A greedy algorithm arranges the classes around their free time.'
      },
      jurasolvo: {
        tag: 'In use at a law firm · private code',
        text: 'Watches four court systems, classifies every case movement and tells the firm what it still has to post.'
      }
    },
    shop: {
      title: 'Team workshop',
      note: 'Axé Fly UFBA · internal tools, code not public',
      intro: [
        "I lead Stability and Control on UFBA's SAE AeroDesign team. Three programs I build and maintain decide the aircraft we fly each year. ",
        'The code stays inside the team',
        ", and I'm glad to walk through it in an interview."
      ],
      steps: [
        ['Size it', 'A genetic algorithm searches for the geometry with the best competition score.', 'Axé Frontier · Python'],
        ['Check it', 'RANS simulation of the wing confirms the lift the optimiser promised.', 'CFDX · OpenFOAM'],
        ['Fly it', 'A 6-DoF flight-dynamics model trims the aircraft and runs manoeuvres before it exists.', 'AxeSim · Simulink']
      ],
      tunnel: {
        aoa: 'Angle of attack',
        cl: 'Lift coefficient',
        note: 'Try it: potential flow around a Joukowski airfoil, solved in your browser. A sketch; the real runs are RANS in OpenFOAM.'
      }
    },
    record: {
      title: 'Service record',
      note: 'Experience and education',
      jobs: [
        {
          org: 'Sunter Technology',
          role: 'IT Intern',
          when: '2025',
          where: '',
          points: [
            "Designed, built and deployed the full-stack web application that manages the company's deliveries and logistics, in React and Django.",
            "Added an AI chatbot that answers users' most common questions."
          ]
        },
        {
          org: 'Embraer',
          role: 'Summer Intern, Avionics',
          when: 'Jan – Mar 2025',
          where: 'São José dos Campos, SP',
          points: [
            'Defined the software requirements of a maintenance system in the defence area.',
            'Specified the logic that triggers each maintenance message and updates its variables.'
          ]
        },
        {
          org: 'Axé Fly UFBA',
          role: 'Technical Lead, Stability and Control',
          when: 'Apr 2022 – today',
          where: 'Salvador, BA',
          points: [
            "Led the architecture and development of the team's 6-DoF flight simulation, implementing control algorithms and analysing flight data to improve performance.",
            'Led the Stability and Control report ranked 1st at SAE Aerodesign East 2023.'
          ]
        },
        {
          org: 'UFBA',
          role: 'B.Eng. Computer Engineering',
          when: '2022 – today',
          where: 'Salvador, BA',
          points: [
            '10th semester. Data structures and algorithms, databases, machine learning, embedded systems, statistics.',
            'Also: Machine Learning, Stanford / DeepLearning.AI (2025), and a data engineering bootcamp (2025).'
          ]
        }
      ],
      winsTitle: 'Team results with Axé Fly',
      wins: [
        ['2025', '1st overall, SAE Aerodesign West'],
        ['2024', '1st overall, SAE Aerodesign East'],
        ['2022–24', '1st overall, SAE Brasil Aerodesign'],
        ['2023', '1st place, Stability and Control report, SAE Aerodesign East'],
        ['2022–23', 'Embraer Design Excellence Trophy']
      ]
    },
    end: {
      title: ['Put me', 'to work'],
      sub: 'Open to internships and junior roles',
      resume: 'Résumé PDF',
      form: {
        email: 'Your e-mail',
        emailHint: 'you@company.com',
        message: 'Message',
        send: 'Send message',
        sending: 'Sending…',
        thanks: "Thank you. I'll reply soon."
      }
    }
  },
  pt: {
    nav: { prod: 'Em produção', shop: 'Oficina', record: 'Histórico', contact: 'Contato' },
    motive: ['Gosto de software quando alguém ', 'depende dele', '. Procuro um time onde esse seja o trabalho.'],
    stamp: ['Aberto a', 'propostas'],
    spec: {
      title: 'Ficha',
      rows: [
        ['Busca', 'Estágio ou vaga júnior em engenharia de software'],
        ['Hoje', 'Engenharia de Computação, UFBA, 10º semestre'],
        ['Stack', 'Python · Django · React · SQL · C'],
        ['Passou', 'Sunter Technology · Embraer']
      ],
      cta: 'Fale comigo'
    },
    prod: {
      title: 'Em produção',
      note: 'No ar, com usuários reais',
      matricunator: {
        tag: 'No ar · matricunator.app ↗',
        text: 'Estudantes da UFBA usam para montar o semestre. Um algoritmo guloso organiza as aulas em torno do tempo livre.'
      },
      jurasolvo: {
        tag: 'Em uso em um escritório de advocacia · código privado',
        text: 'Acompanha quatro sistemas de tribunais, classifica cada movimentação e mostra ao escritório o que ainda falta lançar.'
      }
    },
    shop: {
      title: 'Oficina da equipe',
      note: 'Axé Fly UFBA · ferramentas internas, código não público',
      intro: [
        'Lidero Estabilidade e Controle na equipe de SAE AeroDesign da UFBA. Três programas que desenvolvo e mantenho definem a aeronave que voamos a cada ano. ',
        'O código fica dentro da equipe',
        ', e explico com prazer em uma entrevista.'
      ],
      steps: [
        ['Dimensionar', 'Um algoritmo genético busca a geometria com a melhor pontuação na competição.', 'Axé Frontier · Python'],
        ['Verificar', 'Simulação RANS da asa confirma a sustentação que o otimizador prometeu.', 'CFDX · OpenFOAM'],
        ['Voar', 'Um modelo de dinâmica de voo 6-DoF trima a aeronave e executa manobras antes de ela existir.', 'AxeSim · Simulink']
      ],
      tunnel: {
        aoa: 'Ângulo de ataque',
        cl: 'Coeficiente de sustentação',
        note: 'Experimente: escoamento potencial em torno de um aerofólio de Joukowski, resolvido no seu navegador. Um esboço; as simulações reais são RANS no OpenFOAM.'
      }
    },
    record: {
      title: 'Histórico',
      note: 'Experiência e formação',
      jobs: [
        {
          org: 'Sunter Technology',
          role: 'Estagiário de TI',
          when: '2025',
          where: '',
          points: [
            'Projetei, desenvolvi e publiquei a aplicação web full-stack que gerencia as entregas e a logística da empresa, em React e Django.',
            'Adicionei um chatbot de IA que responde às dúvidas mais comuns dos usuários.'
          ]
        },
        {
          org: 'Embraer',
          role: 'Estagiário de verão, Aviônica',
          when: 'Jan – Mar 2025',
          where: 'São José dos Campos, SP',
          points: [
            'Defini os requisitos de software de um sistema de manutenção na área de defesa.',
            'Especifiquei a lógica que ativa cada mensagem de manutenção e atualiza suas variáveis.'
          ]
        },
        {
          org: 'Axé Fly UFBA',
          role: 'Líder técnico, Estabilidade e Controle',
          when: 'Abr 2022 – hoje',
          where: 'Salvador, BA',
          points: [
            'Liderei a arquitetura e o desenvolvimento da simulação de voo 6-DoF da equipe, implementando algoritmos de controle e analisando dados de voo para melhorar o desempenho.',
            'Liderei o relatório de Estabilidade e Controle que ficou em 1º lugar na SAE Aerodesign East 2023.'
          ]
        },
        {
          org: 'UFBA',
          role: 'Engenharia de Computação',
          when: '2022 – hoje',
          where: 'Salvador, BA',
          points: [
            '10º semestre. Estruturas de dados e algoritmos, bancos de dados, machine learning, sistemas embarcados, estatística.',
            'Também: Machine Learning, Stanford / DeepLearning.AI (2025), e um bootcamp de engenharia de dados (2025).'
          ]
        }
      ],
      winsTitle: 'Resultados da equipe Axé Fly',
      wins: [
        ['2025', '1º lugar geral, SAE Aerodesign West'],
        ['2024', '1º lugar geral, SAE Aerodesign East'],
        ['2022–24', '1º lugar geral, SAE Brasil Aerodesign'],
        ['2023', '1º lugar, relatório de Estabilidade e Controle, SAE Aerodesign East'],
        ['2022–23', 'Troféu Embraer de Excelência em Projeto']
      ]
    },
    end: {
      title: ['Vamos', 'conversar'],
      sub: 'Aberto a estágio e vaga júnior',
      resume: 'Currículo PDF',
      form: {
        email: 'Seu e-mail',
        emailHint: 'voce@empresa.com',
        message: 'Mensagem',
        send: 'Enviar mensagem',
        sending: 'Enviando…',
        thanks: 'Obrigado. Respondo em breve.'
      }
    }
  }
};
