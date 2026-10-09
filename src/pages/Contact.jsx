import contactImage from '../assets/pages/contact.webp';
import FileUpload from '../components/FileUpload/FileUpload.jsx';
import { siteInfo } from '../siteInfo.js';
import { useNetlifyForm } from '../hooks/useNetlifyForm.js';
import { FormError, FormSuccess, Honeypot } from '../components/FormStatus/FormStatus.jsx';
import './Contact.css';

const required = <span className="form-hint">(required)</span>;

function Contact() {
  const contactForm = useNetlifyForm('contact', '3D-CUSTOM: new message from the Contact page');

  return (
    <main className="page contact">
      <section className="page-hero blueprint">
        <div className="container page-hero__grid contact__grid">
          <div className="page-hero__copy">
            <p className="eyebrow">Contact</p>
            <h1 className="page-title">Contact Us</h1>
            <p className="page-lead">
              At 3D-custom.com, we value communication and are dedicated to
              providing you with the best service possible. Whether you have a
              question about our services, need support, or want to start a new
              project, our team is here to assist you.
            </p>
            <dl className="detail-list">
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href={siteInfo.emailHref}>{siteInfo.email}</a>
                </dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={siteInfo.phoneHref}>{siteInfo.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{siteInfo.location}</dd>
              </div>
            </dl>
            <figure className="plate contact__image">
              <div className="plate__frame">
                <img src={contactImage} alt="" width="1400" height="787" loading="lazy" />
                <span className="plate__corners" aria-hidden="true" />
              </div>
            </figure>
          </div>

          {contactForm.status === 'success' ? (
            <div className="form-card">
              <FormSuccess onReset={contactForm.reset} />
            </div>
          ) : (
          <form
            className="form-card"
            name="contact"
            method="post"
            encType="multipart/form-data"
            onSubmit={contactForm.handleSubmit}
          >
            <Honeypot />
            <h2 className="form-card__title">Send us a message</h2>

            <fieldset className="form-group">
              <legend className="form-legend">Name</legend>
              <div className="form-row">
                <label className="form-field">
                  <span className="form-label">First Name {required}</span>
                  <input type="text" name="First Name" autoComplete="given-name" required />
                </label>
                <label className="form-field">
                  <span className="form-label">Last Name {required}</span>
                  <input type="text" name="Last Name" autoComplete="family-name" required />
                </label>
              </div>
            </fieldset>

            <label className="form-field">
              <span className="form-label">Email {required}</span>
              <input type="email" name="Email" autoComplete="email" required />
            </label>

            <label className="form-field">
              <span className="form-label">Phone</span>
              <input type="text" name="Phone" inputMode="numeric" autoComplete="tel" />
            </label>

            <label className="form-field">
              <span className="form-label">Message {required}</span>
              <textarea name="Message" required />
            </label>

            <FileUpload name="File Upload" label="File Upload" />

            <FormError error={contactForm.error} />

            <button
              type="submit"
              className="btn btn--primary form-submit"
              disabled={contactForm.status === 'sending'}
            >
              {contactForm.status === 'sending' ? 'Sending…' : 'Send'}
            </button>
          </form>
          )}
        </div>
      </section>
    </main>
  );
}

export default Contact;
