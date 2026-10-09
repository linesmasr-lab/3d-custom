import { useState } from 'react';

// Netlify accepts at most 8 MB per submission, files included.
const MAX_BYTES = 8 * 1024 * 1024;

// The static copies of the forms live in public/__forms.html. Posting to that
// real file (instead of a page route) keeps the SPA fallback rule out of the way.
const ENDPOINT = '/__forms.html';

/**
 * Sends a form to Netlify Forms without leaving the page.
 * Returns the submit handler plus a status: 'idle' | 'sending' | 'success' | 'error'.
 */
export function useNetlifyForm(formName, subject) {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    data.set('form-name', formName);
    // Subject line of the notification email Netlify sends you
    if (subject) data.set('subject', subject);

    let totalBytes = 0;
    for (const value of data.values()) {
      if (value instanceof File) totalBytes += value.size;
    }
    if (totalBytes > MAX_BYTES) {
      setStatus('error');
      setError('too-large');
      return;
    }

    setStatus('sending');
    setError('');
    try {
      // No Content-Type header: the browser sets the multipart boundary itself
      const response = await fetch(ENDPOINT, { method: 'POST', body: data });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
      setError('failed');
    }
  };

  const reset = () => {
    setStatus('idle');
    setError('');
  };

  return { status, error, handleSubmit, reset };
}
