import { Link } from 'react-router-dom';
import officeLong from '../assets/work/sample-office-long.webp';
import officeCore from '../assets/work/sample-office-core.webp';
import uWings from '../assets/work/sample-u-wings.webp';
import lOffice from '../assets/work/sample-l-office.webp';
import officeRealistic from '../assets/work/sample-office-realistic.webp';
import lRealistic from '../assets/work/sample-l-realistic.webp';
import hospital from '../assets/work/sample-hospital.webp';
import school from '../assets/work/sample-school.webp';
import chillerCutaway from '../assets/work/sample-chiller-cutaway.webp';
import boilerCutaway from '../assets/work/sample-boiler-cutaway.webp';
import basLive from '../assets/work/sample-bas-live.webp';
import './Work.css';

// Sample renders that show the two styles we offer
const ductStyle = [
  { image: officeLong, title: 'Office floor, full VAV distribution', detail: 'Main trunk, VAV boxes, branch ducts and flex runs to every diffuser.', wide: true },
  { image: officeCore, title: 'Office floor with central core', detail: 'Two trunk lines feeding VAV zones on both sides of the core.' },
  { image: uWings, title: 'U-shaped floor', detail: 'Wings served from one AHU, with each zone and its diffusers shown.' },
  { image: lOffice, title: 'L-shaped floor', detail: 'Trunk following both wings, one VAV per zone.', wide: true },
];

const realisticStyle = [
  { image: officeRealistic, title: 'Open office, realistic finish', detail: 'Supply in blue, return in orange, VAV boxes highlighted over a furnished floor.', wide: true },
  { image: lRealistic, title: 'L-shaped office, realistic finish', detail: 'Furniture, glass rooms and the full air side in one view.' },
  { image: hospital, title: 'Hospital floor', detail: 'Patient rooms, operating rooms and the ductwork that serves them.' },
  { image: school, title: 'School floor', detail: 'Classrooms, gym and rooftop units on a single graphic.', wide: true },
];

const equipment = [
  { image: chillerCutaway, title: 'Chiller cutaway, animated', detail: 'Animated cutaway showing chilled water flowing through the evaporator.', contain: true },
  { image: boilerCutaway, title: 'Fire-tube boiler cutaway, animated', detail: 'Animated burner flame and water side, ready for live firing and temperature points.', contain: true },
];

function Gallery({ items }) {
  return (
    <div className="container work-grid">
      {items.map((project) => (
        <figure
          key={project.title}
          className={`work-card work-card--fill${project.wide ? ' work-card--wide' : ''}${project.contain ? ' work-card--contain' : ''}`}
        >
          <div className="work-card__media">
            <img src={project.image} alt={project.title} loading="lazy" />
            <span className="work-card__tag">Sample</span>
          </div>
          <figcaption className="work-card__caption">
            <h3 className="work-card__title">{project.title}</h3>
            <p className="work-card__detail">{project.detail}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function Work() {
  return (
    <main className="page work">
      <section className="page-hero blueprint">
        <div className="container page-hero__grid page-hero__grid--single">
          <div className="page-hero__copy">
            <p className="eyebrow">Our work</p>
            <h1 className="page-title">3D floor plans for BAS graphics</h1>
            <p className="page-lead">
              Sample renders showing the two styles we build: a clean ductwork
              view and a realistic furnished view. Every graphic is delivered as
              PNG or TIF at the size your graphics package needs. Client project
              examples are available on request.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container work-heading">
          <h2 className="page-subtitle">How it looks in your BAS</h2>
        </div>
        <Gallery
          items={[
            {
              image: basLive,
              title: 'Live floor graphic with zone temperatures',
              detail: 'The 3D floor plan as the operator sees it: every VAV tagged, zones colored by temperature, alarms and AHU data around it.',
              wide: true,
            },
          ]}
        />
      </section>

      <section className="page-section">
        <div className="container work-heading">
          <h2 className="page-subtitle">Ductwork style</h2>
        </div>
        <Gallery items={ductStyle} />
      </section>

      <section className="page-section">
        <div className="container work-heading">
          <h2 className="page-subtitle">Realistic style</h2>
        </div>
        <Gallery items={realisticStyle} />
      </section>

      <section className="page-section">
        <div className="container work-heading">
          <h2 className="page-subtitle">Equipment graphics</h2>
        </div>
        <Gallery items={equipment} />
      </section>

      <section className="page-section page-section--light">
        <div className="container work-cta">
          <h2 className="page-subtitle">Your first floor plan is free</h2>
          <p className="page-lead">
            Send any plan (PDF, CAD or a sketch) and get a 3D floor plan back
            within 5 business days, with one revision included.
          </p>
          <Link to="/contact-for-offer" className="btn btn--primary">
            Get your free floor plan
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Work;
