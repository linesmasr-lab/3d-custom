import { Link } from 'react-router-dom';
import faqsImage from '../assets/pages/faqs.webp';
import './Faqs.css';

const faqs = [
  {
    question: '1. What payment methods do you accept?',
    answer:
      'We accept payments via PayPal and Visa. Choose the payment method that works best for you.',
  },
  {
    question: '2. How does the payment process work?',
    answer:
      'You will receive a sample of your work or a full design with a watermark by email. Payment is required after you review the sample or watermark-design. Once we receive your full payment, we will send you the final version of your design without any watermarks.',
  },
  {
    question: '3. Can I request edits before making the full payment?',
    answer:
      'Yes, you can request edits or revisions before completing the full payment. We want to ensure you are satisfied with the design before finalizing the transaction.',
  },
  {
    question: '4. How do I receive my final design?',
    answer:
      'After your full payment is processed, we will email you the final version of your design without any watermarks.',
  },
  {
    question: '5. What information do I need to provide for my project?',
    answer:
      'Please provide all relevant information, 2D files, and sketches related to your job. This will help us create an accurate and detailed design.',
  },
  {
    question: '6. Can I request the deletion of files I provided?',
    answer:
      'Yes, you can request us to delete any files you’ve provided. If you do not request deletion, we will keep those files as references specifically for your future projects.',
  },
  {
    question: '7. How long does it take to complete a design?',
    answer:
      'On average, we complete designs in about 3 days. The timeline may vary depending on the number of edits requested.',
  },
  {
    question: '8. How is the price determined?',
    answer:
      'The price will be provided after you inquire about your project. We will assess the job details and provide a quote based on the complexity and requirements.',
  },
  {
    question: '9. How can I contact you with questions or to submit files?',
    answer: (
      <>
        For any questions, file submissions, or inquiries, please email us at{' '}
        <a href="mailto:design@3d-custom.com">design@3d-custom.com</a> or use
        the <Link to="/contact">contact us</Link> page on our website. We’re
        here to assist you!
      </>
    ),
  },
  {
    question: '10. What are the copyright terms for the work I receive?',
    answer:
      'You hold the copyrights to use the final work anywhere you wish. The designs are open for you to utilize in any manner you choose.',
  },
];

// The questions carry their number ("1. …"); show it separately
const splitNumber = (question) => {
  const match = question.match(/^(\d+)\.\s*(.*)$/);
  return match ? [match[1].padStart(2, '0'), match[2]] : ['', question];
};

function Faqs() {
  return (
    <main className="page faqs">
      <section className="page-hero blueprint">
        <div className="container page-hero__grid page-hero__grid--single">
          <div className="page-hero__copy">
            <p className="eyebrow">Support</p>
            <h1 className="page-title">FAQs</h1>
          </div>
        </div>
      </section>

      <section className="page-section faqs__section">
        <div className="container faqs__grid">
          <div className="faqs__media" aria-hidden="true">
            <img src={faqsImage} alt="" width="900" height="1600" loading="lazy" />
          </div>

          <ol className="faqs__list">
            {faqs.map((faq) => {
              const [number, question] = splitNumber(faq.question);
              return (
                <li className="faqs__item" key={faq.question}>
                  <span className="faqs__number">{number}</span>
                  <div className="faqs__body">
                    <h2 className="faqs__question">{question}</h2>
                    <p className="faqs__answer">{faq.answer}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </main>
  );
}

export default Faqs;
