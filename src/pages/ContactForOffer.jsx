import offerFloorplan from '../assets/floorplans/floorplan-offer.webp';
import FileUpload from '../components/FileUpload/FileUpload.jsx';
import { Link } from 'react-router-dom';
import { countries } from './contactForOfferCountries.js';
import { useNetlifyForm } from '../hooks/useNetlifyForm.js';
import { FormError, FormSuccess, Honeypot } from '../components/FormStatus/FormStatus.jsx';
import './ContactForOffer.css';

const required = <span className="form-hint">(required)</span>;

const reasons = [
  {
    title: 'Expertise in 3D Design',
    text: 'Our team of experienced designers specializes in transforming 2D floorplans into detailed 3D models, providing a clear and immersive visualization of your spaces.',
  },
  {
    title: 'Latest Technology',
    text: 'We use the latest technology and innovative techniques to ensure precision and quality in every project.',
  },
];

const benefits = [
  { title: 'Enhanced Visualization', text: 'Better planning and decision-making.' },
  { title: 'Improved Communication', text: 'Between designers, stakeholders, and clients.' },
  { title: 'Cost-Effective', text: 'Visualize and plan before making physical changes.' },
];

const steps = [
  { title: 'Contact Us', text: 'Reach out with your 2D floorplan.' },
  {
    title: 'Conversion',
    text: 'Our team will convert it into a detailed 3D model, free of charge.',
  },
  {
    title: 'Experience Our Work',
    text: 'See why so many clients in the DMV area trust us with their 3D design needs.',
  },
];

function CountrySelect({ name }) {
  return (
    <select name={name} defaultValue="US">
      {countries.map(([code, label]) => (
        <option value={code} key={code}>
          {label}
        </option>
      ))}
    </select>
  );
}

function ContactForOffer() {
  const offerForm = useNetlifyForm('free-floorplan-offer', '3D-CUSTOM: new free floorplan request');

  return (
    <main className="page offer-page">
      <section className="page-hero blueprint">
        <div className="container page-hero__grid">
          <div className="page-hero__copy">
            <p className="eyebrow">Special offer</p>
            <h1 className="page-title offer-page__title">
              <span className="text-blue">Special Offer:</span> Free 3D Floorplan
              for BAS and Apartment Management Companies in the DMV Area
            </h1>
            <p className="page-subtitle">
              Experience Our Expertise – First 3D Floorplan{' '}
              <span className="offer-page__free">Free!</span>
            </p>
            <div>
              <a href="#offer-form" className="btn btn--primary">
                Request your free floorplan
              </a>
            </div>
          </div>
          <figure className="offer-page__media">
            <img
              className="floorplan-cutout"
              src={offerFloorplan}
              alt="Isometric 3D floorplan with ductwork and VAV boxes"
              width="1600"
              height="763"
              fetchPriority="high"
            />
          </figure>
        </div>
      </section>

      <section className="page-section">
        <div className="container offer-page__grid">
          <div className="offer-page__content">
            <div className="offer-block">
              <h2 className="offer-block__title">Introduction to the Offer</h2>
              <p className="section-text">
                We understand the unique needs of BAS and apartment management
                companies in the DMV area. To showcase our capabilities, we&apos;re
                offering your first 3D floorplan absolutely free!
              </p>
            </div>

            <div className="offer-block">
              <h2 className="offer-block__title">Why Choose Us</h2>
              <div className="feature-grid">
                {reasons.map((reason) => (
                  <div className="feature" key={reason.title}>
                    <span className="feature__mark" aria-hidden="true" />
                    <h3 className="feature__title">{reason.title}</h3>
                    <p className="feature__text">{reason.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="offer-block">
              <h2 className="offer-block__title">Benefits of a 3D Floorplan</h2>
              <ul className="offer-benefits">
                {benefits.map((benefit) => (
                  <li key={benefit.title}>
                    <strong>{benefit.title}:</strong> {benefit.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="offer-block">
              <h2 className="offer-block__title">How to Get Your Free Floorplan</h2>
              <ol className="steps steps--3">
                {steps.map((step, index) => (
                  <li className="step" key={step.title}>
                    <span className="step__number">{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="step__title">{step.title}</h3>
                    <p className="step__text">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="offer-note">
              <p>
                Note: As part of this special offer, our logo or website name will
                be included on the free 3D floorplan to showcase our work and
                maintain our brand presence. The final result will be provided as
                a high-quality PNG image.{' '}
                <Link to="/terms-of-service-1">Terms and conditions</Link> apply.
              </p>
              <dl className="offer-note__contact">
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href="mailto:design@3d-custom.com">design@3d-custom.com</a>
                  </dd>
                </div>
                <div>
                  <dt>Website</dt>
                  <dd>
                    <a href="http://www.3d-custom.com/" target="_blank" rel="noreferrer">
                      www.3d-custom.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {offerForm.status === 'success' ? (
            <div id="offer-form" className="form-card offer-page__form">
              <FormSuccess onReset={offerForm.reset} />
            </div>
          ) : (
          <form
            id="offer-form"
            className="form-card offer-page__form"
            name="free-floorplan-offer"
            method="post"
            encType="multipart/form-data"
            onSubmit={offerForm.handleSubmit}
          >
            <Honeypot />
            <h2 className="form-card__title">Request your free floorplan</h2>

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
              <span className="form-label">Message {required}</span>
              <textarea name="Message" required />
            </label>

            <fieldset className="form-group">
              <legend className="form-legend">Phone {required}</legend>
              <div className="form-row offer-page__phone">
                <label className="form-field">
                  <span className="form-label">Country</span>
                  <CountrySelect name="Phone Country" />
                </label>
                <label className="form-field">
                  <span className="form-label">Number</span>
                  <input
                    type="text"
                    name="Phone Number"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    required
                  />
                </label>
              </div>
            </fieldset>

            <fieldset className="form-group">
              <legend className="form-legend">Address {required}</legend>
              <label className="form-field">
                <span className="form-label">Country</span>
                <CountrySelect name="Address Country" />
              </label>
              <label className="form-field">
                <span className="form-label">Address Line 1 {required}</span>
                <input type="text" name="Address Line 1" autoComplete="address-line1" required />
              </label>
              <label className="form-field">
                <span className="form-label">Address Line 2</span>
                <input type="text" name="Address Line 2" autoComplete="address-line2" />
              </label>
              <div className="form-row">
                <label className="form-field">
                  <span className="form-label">City {required}</span>
                  <input type="text" name="City" autoComplete="address-level2" required />
                </label>
                <label className="form-field">
                  <span className="form-label">State {required}</span>
                  <input type="text" name="State" autoComplete="address-level1" required />
                </label>
                <label className="form-field">
                  <span className="form-label">ZIP Code {required}</span>
                  <input type="text" name="ZIP Code" autoComplete="postal-code" required />
                </label>
              </div>
            </fieldset>

            <FileUpload name="File Upload" label="File Upload" required />

            <label className="form-field">
              <span className="form-label">Date</span>
              <input type="date" name="Date" />
            </label>

            <FormError error={offerForm.error} />

            <button
              type="submit"
              className="btn btn--primary form-submit"
              disabled={offerForm.status === 'sending'}
            >
              {offerForm.status === 'sending' ? 'Sending…' : 'Send'}
            </button>
          </form>
          )}
        </div>
      </section>
    </main>
  );
}

export default ContactForOffer;
