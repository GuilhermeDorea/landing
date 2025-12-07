// src/pages/BlogHome.jsx
import ReactMarkdown from 'react-markdown';
import { Link, useParams } from 'react-router-dom';
import { Tag } from '../components/Tags';
import { blogPosts } from '../data';
import '../styles/Blog.css';
import '../styles/Home.css';

export function BlogHome() {
  return (
    <div className="container">
      <h1>Posts</h1>
      <div>
        {blogPosts.map((post) => (
          <Link key={post.id} className="project-card" to={`/posts/${post.slug}`}>
            <div className="link-post">{post.title}</div>
            <h4 className="post-date">{post.date}</h4>
            <p className="post-description">{post.description}</p>
            <Tag tags={post.tags}>post.tags</Tag>
            <hr />
          </Link>
        ))}
      </div>
    </div>
  );
}

export function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <h2 style={{ paddingTop: 100, textAlign: 'center', color: 'white' }}>Post não encontrado :</h2>;
  }
  return (
    <>
      <div className="container">
        <h1>{post.title}</h1>
        <p className="post-date">{post.date}</p>
        <hr />
        <div className="markdown-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}
