import { Link } from 'react-router-dom';
import officeVav from '../assets/work/office-vav.webp';
import officeDuctwork from '../assets/work/office-ductwork.webp';
import triangleFloor from '../assets/work/triangle-floor.webp';
import mechanicalOverlay from '../assets/work/mechanical-overlay.webp';
import shellFloor from '../assets/work/shell-floor.webp';
import centralPlant from '../assets/work/central-plant.webp';
import './Work.css';

// Each project: image, short title, and what the graphic shows
const projects = [
  {
    image: officeVav,
    title: 'Office floor with VAV boxes',
    detail: 'Full floor with supply ductwork and every VAV box marked for live points.',
    wide: true,
  },
  {
    image: officeDuctwork,
    title: 'Office floor, ductwork overlay',
    detail: 'Main trunk lines, branch ducts and terminal units over the room layout.',
  },
  {
    image: mechanicalOverlay,
    title: 'Mechanical overlay',
    detail: 'Equipment and duct routing layered on a clean architectural base.',
  },
  {
    image: triangleFloor,
    title: 'Irregular floor plate',
    detail: 'Non-rectangular building with zones and devices placed to scale.',
  },
  {
    image: shellFloor,
    title: 'Architectural base floor',
    detail: 'Interior layout with mechanical runs in a muted base style.',
  },
  {
    image: centralPlant,
    title: 'Central plant equipment',
    detail: 'Cooling tower, chiller and pumps as a 3D system graphic.',
    wide: true,
  },
];

function Work() {
  return (
    <main className="page work">
      <section className="page-hero blueprint">
        <div className="container page-hero__grid page-hero__grid--single">
          <div className="page-hero__copy">
            <p className="eyebrow">Our work</p>
            <h1 className="page-title">3D floor plans for BAS graphics</h1>
            <p className="page-lead">
              A selection of floor plans and equipment graphics we have built
              for building automation front ends. Every image is delivered as
              PNG or TIF at the size your graphics package needs.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container work-grid">
          {projects.map((project) => (
            <figure
              key={project.title}
              className={`work-card${project.wide ? ' work-card--wide' : ''}`}
            >
              <div className="work-card__media">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <figcaption className="work-card__caption">
                <h2 className="work-card__title">{project.title}</h2>
                <p className="work-card__detail">{project.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
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
