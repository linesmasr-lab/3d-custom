import { Link } from 'react-router-dom';
import aboutImage from '../assets/pages/about.webp';
import './About.css';

const reasons = [
  {
    title: 'Innovative Solutions',
    text: 'We use the latest technology and techniques in 3D modeling.',
  },
  {
    title: 'Customer-Centric',
    text: 'We provide personalized attention and tailored solutions.',
  },
  {
    title: 'Commitment to Quality',
    text: 'We deliver high-quality, accurate, and visually stunning designs.',
  },
  {
    title: 'Reliability',
    text: 'We build lasting relationships through transparency and integrity.',
  },
];

const process = [
  { title: 'Consultation', text: 'Understanding your vision and requirements.' },
  { title: 'Design', text: 'Creating detailed and accurate 3D models.' },
  { title: 'Review', text: 'Incorporating your feedback.' },
  {
    title: 'Delivery',
    text: 'Providing the final 3D model ready for presentation or implementation.',
  },
];

function About() {
  return (
    <main className="page about">
      <section className="page-hero blueprint">
        <div className="container page-hero__grid">
          <div className="page-hero__copy">
            <p className="eyebrow">About</p>
            <h1 className="page-title">Who We Are</h1>
            <h2 className="page-subtitle">
              Transforming Ideas into Reality with{' '}
              <span className="text-blue">Cutting-Edge 3D Designs</span>
            </h2>
          </div>
          <figure className="plate">
            <div className="plate__frame about-hero__frame">
              <img src={aboutImage} alt="" width="1400" height="933" fetchPriority="high" />
              <span className="plate__corners" aria-hidden="true" />
            </div>
          </figure>
        </div>
      </section>

      <section className="page-section" aria-labelledby="about-story-title">
        <div className="container split split--top">
          <div className="stack">
            <h2 id="about-story-title" className="section-title">
              Our Story
            </h2>
          </div>
          <p className="about-story__text">
            At 3D-Custom.com, we are passionate about bringing your visions to
            life through precise and stunning 3D designs. Founded with a
            commitment to innovation and excellence, we provide top-quality 3D
            modeling services to individuals and companies.
          </p>
        </div>

        <div className="container about-pillars">
          <div className="about-pillar">
            <p className="eyebrow">Our Expertise</p>
            <p className="about-pillar__text">
              Our team of skilled designers specializes in creating detailed 3D
              floorplans, product models, and animated components. We excel in
              transforming 2D floorplans into immersive 3D experiences and
              providing animated HVAC components for automation systems.
            </p>
          </div>
          <div className="about-pillar">
            <p className="eyebrow">Our Mission</p>
            <p className="about-pillar__text">
              Our mission is to revolutionize how you visualize and present your
              ideas. We deliver exceptional 3D designs that enhance understanding,
              communication, and decision-making.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section page-section--light" aria-labelledby="about-why-title">
        <div className="container">
          <div className="section-head">
            <h2 id="about-why-title" className="section-title">
              Why Choose Us
            </h2>
          </div>
          <div className="feature-grid feature-grid--4">
            {reasons.map((reason) => (
              <div className="feature" key={reason.title}>
                <span className="feature__mark" aria-hidden="true" />
                <h3 className="feature__title">{reason.title}</h3>
                <p className="feature__text">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--dark" aria-labelledby="about-process-title">
        <div className="container">
          <div className="section-head">
            <h2 id="about-process-title" className="section-title">
              Our Process
            </h2>
          </div>
          <ol className="steps">
            {process.map((step, index) => (
              <li className="step" key={step.title}>
                <span className="step__number">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__text">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="page-section" aria-labelledby="about-touch-title">
        <div className="container about-touch">
          <div className="stack">
            <h2 id="about-touch-title" className="section-title">
              Get in Touch
            </h2>
            <p className="section-text">
              Contact us today to discuss your project and see how we can bring
              your ideas to life with our 3D design services.
            </p>
          </div>
          <div className="about-touch__actions">
            <Link to="/contact" className="btn btn--primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
