import { Link } from 'react-router-dom';
import DemoVideo from '../components/DemoVideo/DemoVideo.jsx';
import ProductGrid from '../components/ProductGrid/ProductGrid.jsx';
import { FlatVsOurs } from '../components/LibraryPitch/LibraryPitch.jsx';
import { HVAC, THEMES } from '../data/libraryCatalog.js';
import { libraryProducts } from '../data/libraryProducts.js';
import { eboLibraryFaqs } from '../data/eboLibraryFaqs.js';
import './EboLibrary.css';

const LIBRARY_VIDEO = '/media/hvac-library-demo.mp4';
const LIBRARY_POSTER = '/media/hvac-library-demo-poster.webp';

const strengths = [
  {
    title: 'Real 3D, not flat symbols',
    text: '24 equipment items rendered in 3D. Each has an OFF image and an animated ON cutaway, so operators see inside the chiller, pump or AHU while it runs.',
  },
  {
    title: 'Complete EBO site themes',
    text: 'Dark (11 pages) and Light (13 pages) with header, navigation, alarms, trends, schedules and ~450 demo points. Import the .xml and a full site runs.',
  },
  {
    title: 'Everything fits 1:1',
    text: '378 pipes in 9 colors and 15 accessories (valves, sensors, actuators) at the same scale as the equipment, so flanges line up.',
  },
  {
    title: 'Prices on the page',
    text: 'From $49. Instant download after payment, with no quote request and no sales call.',
  },
  {
    title: 'One-time purchase',
    text: 'Pay once and use the files on unlimited projects inside your company.',
  },
  {
    title: 'Made by a BAS graphics specialist',
    text: 'Built by someone who designs and binds BAS graphics every day, not by a general design studio.',
  },
];

const hvacProducts = libraryProducts.filter((p) => p.category === HVAC);
const themeProducts = libraryProducts.filter((p) => p.category === THEMES);

function EboLibrary() {
  return (
    <main className="page ebo-lib">
      <section className="page-hero blueprint">
        <div className="container page-hero__grid page-hero__grid--single">
          <div className="page-hero__copy">
            <p className="eyebrow">EcoStruxure graphics library</p>
            <h1 className="page-title">
              3D <span className="text-blue">EBO graphics</span> library and site templates
            </h1>
            <p className="page-lead ebo-lib__lead">
              Animated 3D equipment, pipes, valves and AHU parts as ready-to-bind EBO TGML
              components, plus complete EcoStruxure Building Operation site themes. Clear prices,
              instant download.
            </p>
            <div className="ebo-lib__actions">
              <a href="#ebo-lib-products" className="btn btn--primary">
                See packs and prices
              </a>
              <a href="#ebo-lib-faq" className="btn btn--secondary">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section ebo-lib__video" aria-label="Demo video">
        <div className="container">
          <DemoVideo
            src={LIBRARY_VIDEO}
            poster={LIBRARY_POSTER}
            label="Demo of the 3D-CUSTOM HVAC graphics library: animated equipment, pipes, AHU and duct parts, valves and sensors"
            caption="Animated 3D equipment, 1:1 pipes and valves, and AHU and duct parts, shown as EBO graphics."
          />
        </div>
      </section>

      <section className="page-section ebo-lib__why">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Why 3d-custom</p>
            <h2 className="section-title">Built for EBO, in real 3D</h2>
          </div>
          <div className="feature-grid feature-grid--3">
            {strengths.map((item) => (
              <div className="feature" key={item.title}>
                <span className="feature__mark" aria-hidden="true" />
                <h3 className="feature__title">{item.title}</h3>
                <p className="feature__text">{item.text}</p>
              </div>
            ))}
          </div>

          {/*
            SOCIAL PROOF PLACEHOLDER – for Sherehan / Mohamed to fill in.
            Add a real customer quote, client name or project count here once
            you have permission to use it. Do not add made-up testimonials.
          */}
        </div>
      </section>

      <section
        id="ebo-lib-products"
        className="page-section page-section--light"
        aria-labelledby="ebo-lib-hvac-title"
      >
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">HVAC graphics library</p>
            <h2 id="ebo-lib-hvac-title" className="section-title">
              EBO TGML components
            </h2>
            <p className="section-text">
              Every component comes as an EBO .tgmlcomponent with its binds and states, plus PNG/GIF
              files for any other BMS.
            </p>
          </div>
          <ProductGrid products={hvacProducts} />

          <div className="section-head ebo-lib__themes-head">
            <p className="eyebrow">EBO site template</p>
            <h2 className="section-title">Complete EcoStruxure site themes</h2>
            <p className="section-text">
              Header, navigation, home page, plant and floor pages, alarms, trends and schedules,
              running on demo points. Import one .xml and the whole site is there.
            </p>
          </div>
          <ProductGrid products={themeProducts} />

          <FlatVsOurs />
        </div>
      </section>

      <section id="ebo-lib-faq" className="page-section" aria-labelledby="ebo-lib-faq-title">
        <div className="container ebo-lib__faq">
          <div className="section-head">
            <p className="eyebrow">FAQ</p>
            <h2 id="ebo-lib-faq-title" className="section-title">
              Questions about the EBO graphics library
            </h2>
          </div>
          <dl className="ebo-lib__faq-list">
            {eboLibraryFaqs.map((faq) => (
              <div className="ebo-lib__faq-item" key={faq.question}>
                <dt className="ebo-lib__question">{faq.question}</dt>
                <dd className="ebo-lib__answer">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-band__rule" aria-hidden="true" />
        <div className="container cta-band__inner">
          <div className="cta-band__copy">
            <h2 className="cta-band__title">Want this with your own building?</h2>
            <p className="cta-band__text">
              We build the same EBO site around your building&rsquo;s 3D floor plans, plant and
              points.
            </p>
          </div>
          <Link to="/contact-for-offer" className="btn btn--primary">
            Contact for offer
          </Link>
        </div>
      </section>
    </main>
  );
}

export default EboLibrary;
