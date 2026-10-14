import { useEffect, useRef } from 'react';
import { siteInfo } from '../../siteInfo.js';
import './FormStatus.css';

// Hidden field that bots fill in and people never see (FormSubmit drops those submissions)
export function Honeypot() {
  return (
    <p className="form-honeypot" aria-hidden="true">
      <label>
        Leave this empty: <input type="text" name="_honey" tabIndex={-1} autoComplete="off" />
      </label>
    </p>
  );
}

// Thank-you panel shown in place of the form after it is sent
export function FormSuccess({ onReset, onDark = false }) {
  const ref = useRef(null);

  // Tall forms shrink to this short message, so bring it into view
  useEffect(() => {
    ref.current?.scrollIntoView({ block: 'center', behavior: 'smooth' });
    ref.current?.focus({ preventScroll: true });
  }, []);

  return (
    <div
      ref={ref}
      tabIndex={-1}
      className={onDark ? 'form-success form-success--card' : 'form-success'}
      role="status"
      aria-live="polite"
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 20.5l5.5 5.5L28.5 15" stroke="currentColor" strokeWidth="1.8" />
      </svg>
      <h2 className="form-success__title">Thank you — your message has been sent.</h2>
      <p>We will get back to you at the email address you provided.</p>
      <button type="button" className="btn btn--secondary" onClick={onReset}>
        Send another message
      </button>
    </div>
  );
}

// Error line shown above the submit button
export function FormError({ error }) {
  if (!error) return null;
  return (
    <p className="form-error" role="alert">
      {error === 'too-large'
        ? 'Your file is larger than 8 MB. Please send a smaller file, or email it to '
        : 'Something went wrong and your message was not sent. Please try again, or email us at '}
      <a href={siteInfo.emailHref}>{siteInfo.email}</a>.
    </p>
  );
}
