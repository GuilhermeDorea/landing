// src/components/ContactForm.jsx
import { useForm, ValidationError } from '@formspree/react';
import './Cntc.css'; // Para aproveitar os estilos

export function ContactForm() {
  const [state, handleSubmit] = useForm('xvgeqpgv');

  if (state.succeeded) {
    return <p className="success-message">Obrigado pelo contato! Responderei em breve.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="email">Seu E-mail</label>
        <input id="email" type="email" name="email" placeholder="exemplo@email.com" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="form-group">
        <label htmlFor="message">Mensagem</label>
        <textarea id="message" name="message" rows="8" placeholder="Olá Guilherme, gostaria de..." required />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button type="submit" disabled={state.submitting} className="MyButton">
        {state.submitting ? 'Enviando...' : 'Enviar Mensagem'}
      </button>
    </form>
  );
}
