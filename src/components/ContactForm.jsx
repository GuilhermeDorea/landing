import { useForm, ValidationError } from '@formspree/react';
import '../styles/ContactForm.css';

export function ContactForm() {
  const [state, handleSubmit] = useForm('xvgeqpgv');

  if (state.succeeded) {
    return <p className="success-message">Thank you! I'll respond shortly.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" name="email" placeholder="jurassauro@email.com" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="8" placeholder="Helo, bla bla bla" required />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button type="submit" disabled={state.submitting} className="MyButton">
        {state.submitting ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
}
