import { useForm, ValidationError } from '@formspree/react';
import { useEffect, useState } from 'react';
import resume from './assets/pdfs/Resume_GuilhermeDoreaAlmeida.pdf';
import { copy } from './content';
import { FlowTunnel } from './FlowTunnel';

const LANG_KEY = 'gd-lang';
const GITHUB = 'https://github.com/GuilhermeDorea';
const LINKEDIN = 'https://linkedin.com/in/guilhermedorea/';

function initialLang() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === 'en' || saved === 'pt') return saved;
  } catch {
    // storage blocked: fall through to the browser language
  }
  return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

function Bar({ id, n, title, note }) {
  return (
    <div className="bar" id={id}>
      <div className="sheet">
        <h2 className="u">
          <b>{n}</b> {title}
        </h2>
        <p>{note}</p>
      </div>
    </div>
  );
}

function ContactForm({ t }) {
  const [state, handleSubmit] = useForm('xvgeqpgv');
  if (state.succeeded) return <p className="thanks u">{t.thanks}</p>;
  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="email">{t.email}</label>
      <input id="email" type="email" name="email" placeholder={t.emailHint} autoComplete="email" required />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">{t.message}</label>
      <textarea id="message" name="message" rows="5" required />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" className="u" disabled={state.submitting}>
        {state.submitting ? t.sending : t.send}
      </button>
    </form>
  );
}

export default function App() {
  const [lang, setLang] = useState(initialLang);
  const t = copy[lang];
  const year = new Date().getFullYear();

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      // storage blocked: the choice just lasts for this visit
    }
  }, [lang]);

  return (
    <>
      <div className="sheet">
        <i className="reg" />
        <nav aria-label="Main">
          <span>GD-{year} / Salvador BA</span>
          <ul>
            <li>
              <a href="#prod">{t.nav.prod}</a>
            </li>
            <li>
              <a href="#shop">{t.nav.shop}</a>
            </li>
            <li>
              <a href="#record">{t.nav.record}</a>
            </li>
            <li>
              <a href="#contact">{t.nav.contact}</a>
            </li>
            <li className="lang">
              {['en', 'pt'].map((code) => (
                <button key={code} type="button" aria-pressed={lang === code} onClick={() => setLang(code)}>
                  {code}
                </button>
              ))}
            </li>
          </ul>
        </nav>

        <header className="hero">
          <div>
            <h1 className="u">
              Guilherme
              <br />
              Dórea
            </h1>
            <p className="motive">
              {t.motive[0]}
              <mark>{t.motive[1]}</mark>
              {t.motive[2]}
            </p>
          </div>
          <aside className="label">
            <span className="stamp" aria-hidden="true">
              {t.stamp[0]}
              <br />
              {t.stamp[1]}
              <small>{year}</small>
            </span>
            <h2 className="u">{t.spec.title}</h2>
            <dl>
              {t.spec.rows.map(([key, value]) => (
                <div key={key}>
                  <dt>{key}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <a className="go u" href="#contact">
              {t.spec.cta}
            </a>
          </aside>
        </header>
      </div>

      <main>
        <Bar id="prod" n="01" title={t.prod.title} note={t.prod.note} />
        <div className="sheet">
          <div className="prod">
            <a className="p" href="https://matricunator.app/" target="_blank" rel="noreferrer">
              <span className="n" aria-hidden="true">
                01
              </span>
              <header>
                <span className="u">{t.prod.matricunator.tag}</span>
                <svg viewBox="0 0 72 72" aria-hidden="true">
                  <rect x="4" y="4" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="6" />
                  <path d="M4 26h64M4 46h64M26 4v64M46 4v64" stroke="currentColor" strokeWidth="3" />
                  <rect x="26" y="26" width="20" height="20" fill="currentColor" />
                </svg>
              </header>
              <h3 className="u">Matricunator</h3>
              <p>{t.prod.matricunator.text}</p>
              <footer>
                <span>React</span>
                <span>Django</span>
                <span>Docker</span>
              </footer>
            </a>
            <article className="p m">
              <span className="n" aria-hidden="true">
                02
              </span>
              <header>
                <span className="u">{t.prod.jurasolvo.tag}</span>
                <svg viewBox="0 0 72 72" aria-hidden="true">
                  <path d="M36 4 68 36 36 68 4 36Z" fill="none" stroke="currentColor" strokeWidth="6" />
                  <path d="M20 36h32M36 20v32" stroke="currentColor" strokeWidth="6" />
                </svg>
              </header>
              <h3 className="u">Jurasolvo</h3>
              <p>{t.prod.jurasolvo.text}</p>
              <footer>
                <span>Python</span>
                <span>Django 6</span>
                <span>DRF</span>
              </footer>
            </article>
          </div>
        </div>

        <Bar id="shop" n="02" title={t.shop.title} note={t.shop.note} />
        <div className="sheet">
          <div className="shop">
            <p>
              {t.shop.intro[0]}
              <strong>{t.shop.intro[1]}</strong>
              {t.shop.intro[2]}
            </p>
            <ol className="steps">
              {t.shop.steps.map(([title, text, tool]) => (
                <li key={tool}>
                  <h3 className="u">{title}</h3>
                  <p>{text}</p>
                  <span>{tool}</span>
                </li>
              ))}
            </ol>
          </div>
          <FlowTunnel t={t.shop.tunnel} />
        </div>

        <Bar id="record" n="03" title={t.record.title} note={t.record.note} />
        <div className="sheet">
          <div className="rec">
            {t.record.jobs.map((job) => (
              <article className="job" key={job.org}>
                <p className="when">
                  {job.when}
                  {job.where && <span>{job.where}</span>}
                </p>
                <h3>
                  <b className="u">{job.org}</b>
                  {job.role}
                </h3>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <h3 className="wins-title u">{t.record.winsTitle}</h3>
          <ul className="wins">
            {t.record.wins.map(([when, what]) => (
              <li key={what}>
                <b className="u">{when}</b>
                {what}
              </li>
            ))}
          </ul>
        </div>
      </main>
      <div className="hazard" aria-hidden="true" />

      <footer className="sheet end" id="contact">
        <div>
          <h2 className="u">
            {t.end.title[0]}
            <br />
            {t.end.title[1]}
          </h2>
          <p className="sub">{t.end.sub}</p>
          <p className="links">
            <a href={LINKEDIN} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={GITHUB} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={resume} download>
              {t.end.resume}
            </a>
          </p>
        </div>
        <ContactForm t={t.end.form} />
      </footer>
    </>
  );
}
