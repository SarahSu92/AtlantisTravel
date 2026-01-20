import { useEffect, useState, type FormEvent } from 'react';
import './Contact.scss';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactPage = () => {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get('name') as string) || '';
    const email = (formData.get('email') as string) || '';
    const message = (formData.get('message') as string) || '';

    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Name validation
    if (!name.trim()) {
      newErrors.name = 'Name is required.';
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Message validation
    if (!message.trim()) {
      newErrors.message = 'Message is required.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      form.reset();
    }
  };

  useEffect(() => {
    if (!submitted) return;

    const timer = setTimeout(() => {
      setSubmitted(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [submitted]);

  return (
    <>
      <section className="c-hero">
        <h1 className="c-cat">CONTACT US</h1>
        <div className="hero-text">
          <p>Have a question or need assistance?</p>
        </div>
      </section>
      <section className="contact" aria-labelledby="contact-heading">
        <div className="c-text">
          <p>Fill out the form below and we’ll respond as soon as possible.</p>
        </div>

        {submitted && (
          <div className="sucess" role="status">
            <p>Thank you for your message.</p>
            <p>We’ll be in touch shortly.</p>
          </div>
        )}

        <form
          className="c-form"
          onSubmit={handleSubmit}
          noValidate
          aria-describedby="contact-instructions"
        >
          <span id="contact-instructions" className="visually-hidden">
            All fields are required.
          </span>

          <div className="c-field">
            <label htmlFor="name">*Name</label>
            <input
              id="name"
              name="name"
              type="text"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              required
            />
            {errors.name && (
              <span id="name-error" className="c-error" role="alert">
                {errors.name}
              </span>
            )}
          </div>

          <div className="c-field">
            <label htmlFor="email">*Email</label>
            <input
              id="email"
              name="email"
              type="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              required
            />
            {errors.email && (
              <span id="email-error" className="c-error" role="alert">
                {errors.email}
              </span>
            )}
          </div>

          <div className="c-field">
            <label htmlFor="message">*Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              required
            />
            {errors.message && (
              <span id="message-error" className="c-error" role="alert">
                {errors.message}
              </span>
            )}
          </div>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  );
};
