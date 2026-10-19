import { Link } from 'react-router-dom';
import DemoVideo from '../components/DemoVideo/DemoVideo.jsx';
import building from '../assets/bas/bas-building.webp';
import level1 from '../assets/bas/bas-level1.webp';
import level2 from '../assets/bas/bas-level2.webp';
import garage from '../assets/bas/bas-garage.webp';
import plant from '../assets/bas/bas-plant.webp';
import ahu from '../assets/bas/bas-ahu.webp';
import roof from '../assets/bas/bas-roof.webp';
import alarms from '../assets/bas/bas-alarms.webp';
import trends from '../assets/bas/bas-trends.webp';
import schedules from '../assets/bas/bas-schedules.webp';
import './BasGraphics.css';

const included = [
  {
    title: '3D building home page',
    text: 'A rendered exterior of the building with live site KPIs. Operators click a floor to drill in.',
  },
  {
    title: 'Floor plans with live ductwork',
    text: 'Every VAV tagged, zones colored by temperature, and airflow that follows the AHU status.',
  },
  {
    title: 'Plant and AHU pages',
    text: 'Central plant, air handlers, roof and garage in 3D. Fans spin only when the unit is running.',
  },
  {
    title: 'Status lights at a glance',
    text: 'Each pump, boiler, tower and fan has a light, so the state is clear even on a still screen.',
  },
  {
    title: 'Alarms, trends and schedules',
    text: 'Tool pages in the same style, so the whole front end looks like one product.',
  },
  {
    title: 'Navigation and header',
    text: 'A side menu and page header shared by every page, with the alarm count always in view.',
  },
];

const gallery = [
  { image: building, title: 'Building overview', detail: 'Home page with a 3D exterior and live KPIs.', wide: true },
  { image: level1, title: 'Level 1 with live ductwork', detail: 'Each VAV colored by zone temperature.' },
  { image: level2, title: 'Level 2, 23 VAV zones', detail: 'Hot and cold spots visible at a glance.' },
  { image: plant, title: 'Central plant', detail: 'Animated cooling tower fans, status lights and loop temperatures.', wide: true },
  { image: ahu, title: 'Air handling unit', detail: 'Supply and return fans spin only when running.' },
  { image: roof, title: 'Roof equipment', detail: 'Every rooftop unit one click away.' },
  { image: garage, title: 'Garage ventilation', detail: 'Live CO sensors, jet fans and exhaust fans.' },
  { image: alarms, title: 'Alarms', detail: 'Critical points turn red instantly.' },
  { image: trends, title: 'Trends', detail: 'Key performance values on one page.' },
  { image: schedules, title: 'Schedules', detail: 'Occupancy and equipment schedules.' },
];

const steps = [
  {
    title: 'Send the job',
    text: 'Floor plans (PDF or CAD), the equipment list and your points list or naming convention.',
  },
  {
    title: 'We build in 3D',
    text: 'Building, floors and equipment are modeled and rendered to match the site.',
  },
  {
    title: 'Pages bound to points',
    text: 'Graphics are built natively for your front end and bound to your point names, ready to import.',
  },
  {
    title: 'Review and hand over',
    text: 'You test on the job, we make the changes, and you get the final files.',
  },
];

function BasGraphics() {
  return (
    <main className="page bas">
      <section className="page-hero blueprint">
        <div className="container page-hero__grid page-hero__grid--single">
          <div className="page-hero__copy">
            <p className="eyebrow">BAS graphics packages</p>
            <h1 className="page-title">
              Complete <span className="text-blue">3D graphics</span> for your BAS front end
            </h1>
            <p className="page-lead bas-lead">
              We design and build the whole graphics package: home page, floor
              plans, plant and air handler pages, alarms, trends and schedules.
              Native to EcoStruxure Building Operation and Niagara, bound to your
              points and ready to import into the job.
            </p>
            <div className="bas-actions">
              <Link to="/contact-for-offer" className="btn btn--primary">
                Get a quote for your building
              </Link>
              <a href="#bas-gallery" className="btn btn--secondary">
                See every page
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bas-demo" aria-labelledby="bas-demo-title">
        <div className="container">
          <div className="bas-demo__head">
            <p className="eyebrow eyebrow--on-dark">Live demo</p>
            <h2 id="bas-demo-title" className="section-title">
              Running live in EcoStruxure Building Operation
            </h2>
          </div>
          <DemoVideo caption="Screen recording of our demo package running in EBO. Values, fans and status lights are driven by live points." />
        </div>
      </section>

      <section className="page-section" aria-labelledby="bas-included-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What you get</p>
            <h2 id="bas-included-title" className="section-title">
              One package, every page
            </h2>
            <p className="section-text">
              Your team keeps the programming. We give you a front end that
              operators understand at a glance and that wins the next job.
            </p>
          </div>
          <div className="feature-grid feature-grid--3">
            {included.map((item) => (
              <div className="feature" key={item.title}>
                <span className="feature__mark" aria-hidden="true" />
                <h3 className="feature__title">{item.title}</h3>
                <p className="feature__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="bas-gallery" className="page-section page-section--light" aria-labelledby="bas-gallery-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The pages</p>
            <h2 id="bas-gallery-title" className="section-title">
              Inside the demo package
            </h2>
          </div>
        </div>
        <div className="container bas-grid">
          {gallery.map((page) => (
            <figure key={page.title} className={`bas-shot${page.wide ? ' bas-shot--wide' : ''}`}>
              <img src={page.image} alt={`${page.title} graphic`} width="1600" height="750" loading="lazy" />
              <figcaption className="bas-shot__caption">
                <h3 className="bas-shot__title">{page.title}</h3>
                <p className="bas-shot__detail">{page.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="page-section" aria-labelledby="bas-platforms-title">
        <div className="container split split--top">
          <div className="stack">
            <p className="eyebrow">Platforms</p>
            <h2 id="bas-platforms-title" className="section-title">
              Built for the front end you already use
            </h2>
            <p className="section-text">
              Graphics are delivered as native files, not screenshots: TGML for
              EcoStruxure Building Operation and PX for Niagara. For other front
              ends (Metasys, WebCTRL, KODE and more) we deliver the 3D images and
              animations sized for your graphics editor.
            </p>
          </div>
          <ol className="steps steps--2">
            {steps.map((step, index) => (
              <li className="step" key={step.title}>
                <span className="step__number">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__text">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-band__rule" aria-hidden="true" />
        <div className="container cta-band__inner">
          <div className="cta-band__copy">
            <h2 className="cta-band__title">Have a building that needs graphics?</h2>
            <p className="cta-band__text">
              Send the drawings and points list and we will come back with a
              quote and timeline. Not ready for a full package? Your first 3D
              floor plan is free.
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

export default BasGraphics;
