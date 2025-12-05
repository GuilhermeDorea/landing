// src/pages/BlogHome.jsx
import ReactMarkdown from 'react-markdown';
import { Link, useParams } from 'react-router-dom';
import './App.css'; // Seus estilos
import './Blog.css'; // Seus estilos
import { blogPosts } from './posts'; // Importa sua lista

export function BlogHome() {
  return (
    <div className="blog-home">
      <h1>Posts</h1>
      <div className="post-grid">
        {blogPosts.map((post) => (
          <Link key={post.id} className="project-card" to={`/posts/${post.slug}`}>
            <div className="link-post">{post.title}</div>
            <p className="post-date">{post.date}</p>
            <p className="post-description">{post.description}</p>
            <div className="tag-grid ">
              {post.tags.map((tag) => (
                <div className="tag">{tag}</div>
              ))}
            </div>
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
    return <h2 style={{ paddingTop: 100, textAlign: 'center', color: 'white' }}>Post não encontrado :(</h2>;
  }
  return (
    <>
      <div className="blog-home">
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
