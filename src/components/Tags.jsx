import '../styles/Tags.css';

function randomColorGenerator() {
  console.log('GEROU COR');
  const h = Math.floor(Math.random() * 360); // Tonalidade aleatória (0-360)
  let s = Math.floor(Math.random() * (90 - 40) + 40); // Saturação (40-70%)
  let l = Math.floor(Math.random() * (90 - 75) + 75); // Luminosidade (75-90%)

  return `hsl(${h}, ${s}%, ${l}%)`;
}

export function Tag({ tags }) {
  return (
    <div className="tag-grid">
      {tags &&
        tags.map((tag, index) => (
          <div key={index} className="tag-icon" style={{ color: randomColorGenerator() }}>
            {tag}
          </div>
        ))}
    </div>
  );
}
