import { useEffect, useState } from 'react';

// Forms are delivered by FormSubmit (formsubmit.co), which emails each
// submission, files included, to the address below. The browser posts the form
// directly to FormSubmit, which then sends the visitor back to this page with
// ?sent=<form name> so the thank-you message can be shown.
const FORM_ENDPOINT = 'https://formsubmit.co/design@3d-custom.com';

// FormSubmit accepts attachments up to 10 MB per submission; stay a little under.
const MAX_BYTES = 8 * 1024 * 1024;

function addHidden(form, name, value) {
  let input = form.querySelector(`input[type="hidden"][name="${name}"]`);
  if (!input) {
    input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    form.appendChild(input);
  }
  input.value = value;
}

/**
 * Sends a form by email. Returns the submit handler plus a status:
 * 'idle' | 'sending' | 'success' | 'error'.
 * (The name is kept from the Netlify version so the pages did not need changes.)
 */
export function useNetlifyForm(formName, subject) {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  // Coming back from FormSubmit: show the thank-you message once
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('sent') === formName) {
      setStatus('success');
      params.delete('sent');
      const query = params.toString();
      window.history.replaceState(null, '', window.location.pathname + (query ? `?${query}` : ''));
    }
  }, [formName]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    let totalBytes = 0;
    for (const input of form.querySelectorAll('input[type="file"]')) {
      for (const file of input.files ?? []) totalBytes += file.size;
    }
    if (totalBytes > MAX_BYTES) {
      event.preventDefault();
      setStatus('error');
      setError('too-large');
      return;
    }

    // Keep any existing query (e.g. ?plan=standard) and add ?sent=<form>
    const next = new URL(window.location.href);
    next.searchParams.set('sent', formName);

    form.action = FORM_ENDPOINT;
    form.method = 'POST';
    form.enctype = 'multipart/form-data';
    addHidden(form, '_subject', subject || `3D-CUSTOM: ${formName}`);
    addHidden(form, '_next', next.toString());
    addHidden(form, '_captcha', 'false');
    addHidden(form, '_template', 'table');
    addHidden(form, 'Form', formName);
    // Replies from the inbox go straight to the visitor
    const email = form.querySelector('input[type="email"]');
    if (email?.value) addHidden(form, '_replyto', email.value);

    // Let the browser submit the form normally
    setStatus('sending');
    setError('');
  };

  const reset = () => {
    setStatus('idle');
    setError('');
  };

  return { status, error, handleSubmit, reset };
}
