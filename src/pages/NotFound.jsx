import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="page">
      <section className="page-hero blueprint">
        <div className="container page-hero__grid page-hero__grid--single">
          <div className="page-hero__copy">
            <p className="eyebrow">404</p>
            <h1 className="page-title">Page not found</h1>
            <p className="page-lead">
              The page you are looking for does not exist or has moved.
            </p>
            <div>
              <Link to="/" className="btn btn--primary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
