import { Link } from 'react-router-dom';
import bannerImage from '../assets/pages/services-banner.webp';
import floorplanImage from '../assets/home/service-floorplans.webp';
import energyImage from '../assets/home/service-energy.webp';
import productImage from '../assets/home/service-products.webp';
import resultsImage from '../assets/pages/services-results.webp';
import './Services.css';

const offers = [
  {
    number: '01',
    title: '3D Floorplans',
    to: '/3d-floorplans',
    image: floorplanImage,
    width: 1100,
    height: 552,
    fit: 'contain',
    paragraphs: [
      'Convert your 2D floorplans into immersive 3D models. Our 3D floorplans provide a clear and interactive way to visualize spaces, making it easier for clients and stakeholders to understand the layout and design.',
    ],
  },
  {
    number: '02',
    title: 'Energy Management Solutions',
    to: '/energy-management-solutions',
    image: energyImage,
    width: 1100,
    height: 675,
    fit: 'contain',
    paragraphs: [
      'We provide specialized 3D design services for energy management companies, including the creation of detailed 3D models from 2D floorplans and the integration of animated HVAC components. Our solutions enhance planning, visualization, and management of energy projects.',
    ],
  },
  {
    number: '03',
    title: 'Product Models and Animations',
    to: '/product-models-and-animations',
    image: productImage,
    width: 1200,
    height: 665,
    fit: 'cover',
    paragraphs: [
      "We specialize in transforming your innovative ideas into detailed and realistic 3D models. Whether it's a new product concept or a unique design, our team can bring it to life.",
      'Showcase your products with high-quality 3D models and animations. Perfect for marketing, social media, and customer presentations, our 3D product models help you stand out.',
    ],
  },
];

function Services() {
  return (
    <main className="page services">
      <section className="page-hero blueprint">
        <div className="container page-hero__grid">
          <div className="page-hero__copy">
            <p className="eyebrow">Services</p>
            <h1 className="page-title">
              Our <span className="text-blue">Services</span>
            </h1>
            <h2 className="page-subtitle">
              Bringing Your Ideas to Life with Stunning 3D Designs
            </h2>
            <p className="page-lead">
              At 3D-custom.com, we offer a range of 3D design services tailored to
              meet the unique needs of individuals and companies. Our expertise
              ensures that every project is executed with precision, creativity,
              and the latest technology. Explore our services below to see how we
              can help you visualize and present your ideas.
            </p>
          </div>
          <figure className="services-hero__media">
            <img
              className="floorplan-cutout"
              src={bannerImage}
              alt="Isometric 3D floorplan of a triangular building floor"
              width="1600"
              height="793"
              fetchPriority="high"
            />
          </figure>
        </div>
      </section>

      <section className="page-section" aria-labelledby="services-offer-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Three services</p>
            <h2 id="services-offer-title" className="section-title">
              What we offer
            </h2>
          </div>

          <div className="services-list">
            {offers.map((offer) => (
              <article className="services-item" key={offer.to}>
                <div className="services-item__media">
                  <img
                    src={offer.image}
                    alt=""
                    width={offer.width}
                    height={offer.height}
                    loading="lazy"
                    style={{ objectFit: offer.fit }}
                  />
                  <span className="services-item__number">{offer.number}</span>
                </div>
                <div className="services-item__body">
                  <h3 className="services-item__title">
                    <Link to={offer.to}>{offer.title}</Link>
                  </h3>
                  {offer.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <div>
                    <Link to={offer.to} className="btn btn--secondary">
                      See Details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--dark" aria-labelledby="services-results-title">
        <div className="container split">
          <div className="stack">
            <p className="eyebrow eyebrow--on-dark">Outcome</p>
            <h2 id="services-results-title" className="section-title">
              The Results
            </h2>
            <p className="section-text">
              By combining our 3D custom designs with precise product models, we
              help you visualize and communicate your ideas with stunning clarity,
              resulting in increased client engagement and satisfaction.
            </p>
          </div>
          <div className="services-results__media">
            <img
              src={resultsImage}
              alt=""
              width="1400"
              height="1050"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
