import { useState } from 'react';
import { Link } from 'react-router-dom';
import heroFloorplan from '../assets/floorplans/floorplan-hero.webp';
import offerFloorplan from '../assets/floorplans/floorplan-offer.webp';
import floorplansImage from '../assets/home/service-floorplans.webp';
import energyImage from '../assets/home/service-energy.webp';
import productsImage from '../assets/home/service-products.webp';
import basLiveImage from '../assets/work/sample-bas-live.webp';
import brandImage from '../assets/images/unsplash-image-tHiDL7vAWFo.jpg';
import { siteInfo } from '../siteInfo.js';
import DemoVideo from '../components/DemoVideo/DemoVideo.jsx';
import { useNetlifyForm } from '../hooks/useNetlifyForm.js';
import { FormError, FormSuccess, Honeypot } from '../components/FormStatus/FormStatus.jsx';
import './Home.css';

const services = [
  {
    number: '01',
    tag: 'Residential or commercial mechanical',
    title: '3D Floorplans',
    description: 'Transform 2D floorplans into immersive 3D experiences.',
    image: floorplansImage,
    alt: 'Isometric 3D floorplan render',
    width: 1100,
    height: 552,
    fit: 'contain',
  },
  {
    number: '02',
    tag: 'Animated HVAC components',
    title: 'Energy Management Solutions',
    description:
      'Enhance your automation systems with our specialized animated HVAC components.',
    image: energyImage,
    alt: 'Rendered HVAC components connected by pipework',
    width: 1100,
    height: 675,
    fit: 'contain',
  },
  {
    number: '03',
    tag: 'Models and animations',
    title: 'Product Models & Animations',
    description:
      'We convert your innovative ideas into detailed 3D models. Showcase your products with realistic 3D models and animations.',
    image: productsImage,
    alt: '3D product model render',
    width: 1200,
    height: 665,
    fit: 'cover',
  },
];

function Arrow() {
  return (
    <span className="text-link__arrow" aria-hidden="true">
      →
    </span>
  );
}

function Home() {
  // Mobile accordion: index of the open service, or null when all are closed
  const [openService, setOpenService] = useState(null);
  const inquiry = useNetlifyForm('home-inquiry', '3D-CUSTOM: new message from the Home page');

  const toggleService = (index) => {
    setOpenService((current) => (current === index ? null : index));
  };

  return (
    <main className="home">
      {/* ---------- Hero ---------- */}
      <section className="home-hero blueprint">
        <div className="container home-hero__grid">
          <div className="home-hero__copy">
            <p className="eyebrow">3D visualization studio</p>
            <h1 className="home-hero__title">
              Transforming your ideas into{' '}
              <span className="text-blue">stunning 3D</span> designs
            </h1>
            <p className="home-hero__lead">
              Custom 3D Floorplans, Product Models, and Animated Components for
              Individuals and Companies
            </p>
            <div className="home-hero__actions">
              <Link to="/services" className="btn btn--primary">
                Explore Services
              </Link>
              <Link to="/contact-for-offer" className="btn btn--secondary">
                Get your free 1st floorplan
              </Link>
            </div>
          </div>

          <figure className="home-hero__media">
            <img
              className="floorplan-cutout"
              src={heroFloorplan}
              alt="3D office floor plan with supply ductwork, VAV boxes and flex runs to every diffuser"
              width="1600"
              height="571"
              fetchPriority="high"
            />
            <figcaption className="caption">Fig. 01 — Sample 3D floor plan</figcaption>
          </figure>
        </div>
      </section>

      {/* ---------- BAS graphics package demo ---------- */}
      <section className="home-demo" aria-labelledby="home-demo-title">
        <div className="container">
          <div className="home-demo__head">
            <div>
              <p className="eyebrow eyebrow--on-dark">New: complete BAS graphics packages</p>
              <h2 id="home-demo-title" className="home-h2 home-h2--on-dark">
                Your building, live in 3D
              </h2>
            </div>
            <p className="home-body home-demo__text">
              A full front end running in EcoStruxure Building Operation: 3D
              home page, floor plans with live ductwork, central plant and air
              handlers with animated fans, alarms, trends and schedules.
            </p>
          </div>
          <DemoVideo />
          <div className="home-demo__actions">
            <Link to="/bas-graphics" className="btn btn--primary">
              See the BAS graphics service
            </Link>
            <Link to="/contact-for-offer" className="btn btn--ghost-dark">
              Get a quote
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Live BAS view ---------- */}
      <section className="home-live" aria-labelledby="home-live-title">
        <div className="container">
          <div className="home-live__head">
            <div>
              <p className="eyebrow">In your BAS</p>
              <h2 id="home-live-title" className="home-h2">
                What your 3D floor plan looks like live
              </h2>
            </div>
            <p className="home-body home-live__text">
              Every VAV tagged, zones colored by temperature, alarms and AHU data
              around it. We deliver the 3D floor plan, your team adds the points.
            </p>
          </div>
          <figure className="home-live__media">
            <img
              src={basLiveImage}
              alt="3D office floor plan in a building automation front end with VAV tags, zone temperatures and alarms"
              width="2000"
              height="1116"
              loading="lazy"
            />
          </figure>
          <Link to="/work" className="btn btn--secondary home-live__link">
            See more samples
          </Link>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="home-services" aria-labelledby="home-services-title">
        <div className="container">
          <div className="home-services__head">
            <div className="home-services__intro">
              <p className="eyebrow eyebrow--on-dark">Our services</p>
              <h2 id="home-services-title" className="home-h2 home-h2--on-dark">
                Bringing imagination to life
              </h2>
            </div>
            <Link to="/services" className="text-link text-link--on-dark">
              All services <Arrow />
            </Link>
          </div>

          {/* Tablet and desktop: cards */}
          <div className="service-cards">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-card__media">
                  <img
                    src={service.image}
                    alt={service.alt}
                    width={service.width}
                    height={service.height}
                    loading="lazy"
                    style={{ objectFit: service.fit }}
                  />
                  <span className="service-card__number">{service.number}</span>
                </div>
                <div className="service-card__body">
                  <p className="service-card__tag">{service.tag}</p>
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__text">{service.description}</p>
                  <Link to="/services" className="text-link text-link--on-dark">
                    Explore service <Arrow />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Mobile: accordion */}
          <div className="service-accordion">
            {services.map((service, index) => {
              const isOpen = openService === index;
              return (
                <div
                  className={isOpen ? 'service-accordion__item is-open' : 'service-accordion__item'}
                  key={service.title}
                >
                  <h3 className="service-accordion__heading">
                    <button
                      type="button"
                      className="service-accordion__trigger"
                      aria-expanded={isOpen}
                      aria-controls={`service-panel-${index}`}
                      onClick={() => toggleService(index)}
                    >
                      <span className="service-accordion__number">{service.number}</span>
                      <span className="service-accordion__title">{service.title}</span>
                      <span className="service-accordion__icon" aria-hidden="true" />
                    </button>
                  </h3>
                  {isOpen && (
                    <div className="service-accordion__panel" id={`service-panel-${index}`}>
                      <div className="service-accordion__media">
                        <img
                          src={service.image}
                          alt={service.alt}
                          width={service.width}
                          height={service.height}
                          style={{ objectFit: service.fit }}
                        />
                      </div>
                      <p>{service.description}</p>
                      <Link to="/services" className="text-link text-link--on-dark">
                        Explore service <Arrow />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Free floorplan offer ---------- */}
      <section className="home-offer" aria-labelledby="home-offer-title">
        <div className="container home-offer__grid">
          <figure className="home-offer__media">
            <img
              className="floorplan-cutout"
              src={offerFloorplan}
              alt="Isometric 3D floorplan with ductwork and VAV boxes"
              width="1600"
              height="763"
              loading="lazy"
            />
            <figcaption className="caption">Fig. 02 — Sample 3D floorplan</figcaption>
          </figure>
          <div className="home-offer__copy">
            <p className="eyebrow">Special offer</p>
            <h2 id="home-offer-title" className="home-h2">
              Your first floorplan is <span className="home-offer__free">free</span>
            </h2>
            <p className="home-body">
              Special Offer for Energy and Apartment Management Companies.
            </p>
            <div>
              <Link to="/contact-for-offer" className="btn btn--primary">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Brand story ---------- */}
      <section className="home-brand" aria-labelledby="home-brand-title">
        <div className="container home-brand__grid">
          <div className="home-brand__copy">
            <p className="eyebrow">About 3D-CUSTOM</p>
            <h2 id="home-brand-title" className="home-h2">
              Uncover the magic behind our brand
            </h2>
            <p className="home-body">
              Discover the story of how we bring imagination to life through our
              expert modeling, rendering, and animation. Let us transport you to a
              world of unlimited possibilities. Embrace your creativity and let
              your visions soar. We are here to help you turn dreams into reality.
            </p>
            <div>
              <Link to="/about" className="btn btn--secondary">
                Learn more
              </Link>
            </div>
          </div>
          <figure className="plate home-brand__media">
            <div className="plate__frame">
              <img
                src={brandImage}
                alt="Rendered geometric objects in a dark studio"
                width="1500"
                height="844"
                loading="lazy"
              />
              <span className="plate__corners" aria-hidden="true" />
            </div>
            <figcaption className="caption">Fig. 03 — Modeling &amp; rendering</figcaption>
          </figure>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section className="home-contact" aria-labelledby="home-contact-title">
        <div className="home-contact__rule" aria-hidden="true" />
        <div className="container home-contact__grid">
          <div className="home-contact__intro">
            <p className="eyebrow eyebrow--on-dark">Start a project</p>
            <h2 id="home-contact-title" className="home-h2 home-h2--on-dark">
              Ignite your imagination
            </h2>
            <p className="home-contact__lead">
              Tell us about your project and we will get back to you.
            </p>
            <dl className="home-contact__details">
              <div>
                <dt>Location</dt>
                <dd>{siteInfo.location}</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={siteInfo.phoneHref}>{siteInfo.phone}</a>
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href={siteInfo.emailHref}>{siteInfo.email}</a>
                </dd>
              </div>
            </dl>
          </div>

          {inquiry.status === 'success' ? (
            <FormSuccess onDark onReset={inquiry.reset} />
          ) : (
          <form
            className="home-form"
            name="home-inquiry"
            method="post"
            onSubmit={inquiry.handleSubmit}
          >
            <Honeypot />
            <fieldset className="home-form__group">
              <legend className="home-form__label">
                Name <span className="home-form__hint">(required)</span>
              </legend>
              <div className="home-form__row">
                <label className="home-form__field">
                  <span className="home-form__sublabel">First Name</span>
                  <input type="text" name="First Name" maxLength="30" required />
                </label>
                <label className="home-form__field">
                  <span className="home-form__sublabel">Last Name</span>
                  <input type="text" name="Last Name" maxLength="30" required />
                </label>
              </div>
            </fieldset>

            <label className="home-form__field">
              <span className="home-form__label">
                Email <span className="home-form__hint">(required)</span>
              </span>
              <input type="email" name="Email" required />
            </label>

            <fieldset className="home-form__group">
              <legend className="home-form__label">Phone</legend>
              <div className="home-form__row home-form__row--phone">
                <label className="home-form__field">
                  <span className="home-form__sublabel">Country</span>
                  <input type="text" name="Phone Country" maxLength="5" />
                </label>
                <label className="home-form__field">
                  <span className="home-form__sublabel">(###)</span>
                  <input type="text" name="Phone Area" maxLength="3" inputMode="numeric" />
                </label>
                <label className="home-form__field">
                  <span className="home-form__sublabel">###</span>
                  <input type="text" name="Phone Prefix" maxLength="3" inputMode="numeric" />
                </label>
                <label className="home-form__field">
                  <span className="home-form__sublabel">####</span>
                  <input type="text" name="Phone Line" maxLength="4" inputMode="numeric" />
                </label>
              </div>
            </fieldset>

            <label className="home-form__field">
              <span className="home-form__label">
                Message <span className="home-form__hint">(required)</span>
              </span>
              <textarea name="Message" rows="4" required />
            </label>

            <FormError error={inquiry.error} />

            <div>
              <button
                type="submit"
                className="btn btn--primary home-form__submit"
                disabled={inquiry.status === 'sending'}
              >
                {inquiry.status === 'sending' ? 'Sending…' : 'Send'}
              </button>
            </div>
          </form>
          )}
        </div>
      </section>
    </main>
  );
}

export default Home;
