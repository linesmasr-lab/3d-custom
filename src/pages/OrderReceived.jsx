import { useSearchParams } from 'react-router-dom';
import FileUpload from '../components/FileUpload/FileUpload.jsx';
import { useNetlifyForm } from '../hooks/useNetlifyForm.js';
import { FormError, FormSuccess, Honeypot } from '../components/FormStatus/FormStatus.jsx';
import { siteInfo } from '../siteInfo.js';
import './OrderReceived.css';

const required = <span className="form-hint">(required)</span>;

// Stripe sends buyers here with ?plan=standard|large|equipment
const plans = {
  standard: '3D Floor Plan - Standard Floor',
  large: '3D Floor Plan - Large or Complex Floor',
  equipment: '3D Equipment Graphic',
};

const steps = [
  'Upload your drawings below (PDF, DWG, or a photo of the plan).',
  'We confirm the scope by email within one business day.',
  'You get your PNG or TIF files, with one revision included.',
];

function OrderReceived() {
  const [searchParams] = useSearchParams();
  const plan = plans[searchParams.get('plan')] ?? '';
  const orderForm = useNetlifyForm('paid-order', '3D-CUSTOM: new paid order - drawings uploaded');

  return (
    <main className="page order-page">
      <section className="page-hero blueprint">
        <div className="container page-hero__grid page-hero__grid--single">
          <div className="page-hero__copy">
            <p className="eyebrow">Payment received</p>
            <h1 className="page-title">Thank you for your order</h1>
            <p className="page-lead">
              {plan ? `You ordered: ${plan}. ` : ''}
              A receipt is on its way to your email. Now send us your drawings so we
              can start.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container order-page__grid">
          <ol className="order-page__steps">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
            <li>
              Questions? Email <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>.
            </li>
          </ol>

          {orderForm.status === 'success' ? (
            <FormSuccess onReset={orderForm.reset} />
          ) : (
            <form
              className="form-card"
              name="paid-order"
              method="post"
              encType="multipart/form-data"
              onSubmit={orderForm.handleSubmit}
            >
              <Honeypot />
              <h2 className="form-card__title">Upload your drawings</h2>
              <input type="hidden" name="Plan" value={plan} />

              <label className="form-field">
                <span className="form-label">Full Name {required}</span>
                <input type="text" name="Name" autoComplete="name" required />
              </label>

              <label className="form-field">
                <span className="form-label">Email used at checkout {required}</span>
                <input type="email" name="Email" autoComplete="email" required />
              </label>

              <label className="form-field">
                <span className="form-label">Company</span>
                <input type="text" name="Company" autoComplete="organization" />
              </label>

              <label className="form-field">
                <span className="form-label">Notes</span>
                <textarea
                  name="Notes"
                  placeholder="Which floors, what to show (VAVs, ductwork, equipment), BAS platform, deadline"
                />
              </label>

              <FileUpload name="File Upload" label="Drawings (max 8 MB)" required />

              <FormError error={orderForm.error} />

              <button
                type="submit"
                className="btn btn--primary form-submit"
                disabled={orderForm.status === 'sending'}
              >
                {orderForm.status === 'sending' ? 'Sending…' : 'Send drawings'}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

export default OrderReceived;
