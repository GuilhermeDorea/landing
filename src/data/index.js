import post1 from './hello-world.md?raw';
import post2 from './world of bots.md?raw';

export const blogPosts = [
  {
    id: 2,
    slug: 'world of bots',
    title: 'A world of bots',
    date: '05 Dec 2025',
    description: 'How the internet is full of slop and attackers.',
    tags: ['Scraping', 'Cybersecurity', 'Network'],
    content: post2
  },
  {
    id: 1,
    slug: 'hello-world',
    title: 'My hello world of blogs',
    date: '05 Dec 2025',
    description: 'My experience creating this blog and some thoughts about hello world.',
    tags: ['Web', 'React', 'Windsurf'],
    content: post1
  }
];
