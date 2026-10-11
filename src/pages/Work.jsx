import { Link } from 'react-router-dom';
import officeVav from '../assets/work/office-vav.webp';
import officeDuctwork from '../assets/work/office-ductwork.webp';
import triangleFloor from '../assets/work/triangle-floor.webp';
import triangleColor from '../assets/work/triangle-color.webp';
import mechanicalOverlay from '../assets/work/mechanical-overlay.webp';
import shellFloor from '../assets/work/shell-floor.webp';
import ductZones from '../assets/work/duct-zones.webp';
import zoneColors from '../assets/work/zone-colors.webp';
import lShapedFloor from '../assets/work/l-shaped-floor.webp';
import furnishedOffice from '../assets/work/furnished-office.webp';
import parkingGarage from '../assets/work/parking-garage.webp';
import centralPlant from '../assets/work/central-plant.webp';
import boiler from '../assets/work/boiler.webp';
import vavUnit from '../assets/work/vav-unit.webp';
import './Work.css';

// Floor plan projects: image, short title, and what the graphic shows
const floorPlans = [
  { image: officeVav, title: 'Office floor with VAV boxes', detail: 'Full floor with supply ductwork and every VAV box marked for live points.', wide: true },
  { image: ductZones, title: 'Supply and return ductwork', detail: 'Color-coded duct runs with terminal units over a finished office layout.' },
  { image: triangleColor, title: 'Triangular floor plate', detail: 'Supply ducts and VAV boxes traced across a non-rectangular building.' },
  { image: zoneColors, title: 'Color-coded air handler zones', detail: 'Each zone in its own color so operators see which unit serves which area.' },
  { image: lShapedFloor, title: 'L-shaped tenant floor', detail: 'Main trunk line and VAV boxes highlighted along a long, narrow floor.' },
  { image: parkingGarage, title: 'Parking garage level', detail: 'Full garage level with parking layout and devices placed for BAS points.', wide: true },
  { image: officeDuctwork, title: 'Office floor, ductwork overlay', detail: 'Main trunk lines, branch ducts and terminal units over the room layout.' },
  { image: furnishedOffice, title: 'Furnished open office', detail: 'Furniture, rooms and VAV locations so tenants recognize their space.' },
  { image: mechanicalOverlay, title: 'Mechanical overlay', detail: 'Equipment and duct routing layered on a clean architectural base.' },
  { image: triangleFloor, title: 'Irregular floor plate', detail: 'Non-rectangular building with zones and devices placed to scale.' },
  { image: shellFloor, title: 'Architectural base floor', detail: 'Interior layout with mechanical runs in a muted base style.', wide: true },
];

// Equipment graphics
const equipment = [
  { image: centralPlant, title: 'Central plant', detail: 'Cooling tower, chiller and pumps as a 3D system graphic.', wide: true },
  { image: boiler, title: 'Fire-tube boiler cutaway', detail: 'Cutaway showing the burner and tubes, ready for live temperature points.' },
  { image: vavUnit, title: 'Fan-powered VAV box', detail: 'Cutaway of the fan, damper and coil for a terminal unit page.' },
];

function Gallery({ items }) {
  return (
    <div className="container work-grid">
      {items.map((project) => (
        <figure
          key={project.title}
          className={`work-card${project.wide ? ' work-card--wide' : ''}`}
        >
          <div className="work-card__media">
            <img src={project.image} alt={project.title} loading="lazy" />
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
              A selection of floor plans and equipment graphics we have built
              for building automation front ends. Every image is delivered as
              PNG or TIF at the size your graphics package needs.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container work-heading">
          <h2 className="page-subtitle">Floor plans</h2>
        </div>
        <Gallery items={floorPlans} />
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
