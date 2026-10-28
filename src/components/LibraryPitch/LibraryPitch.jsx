import './LibraryPitch.css';

// Simple line icons (24 x 24, stroke = currentColor)
const icons = {
  cube: (
    <>
      <path d="M12 2.5 3.5 7v10L12 21.5 20.5 17V7Z" />
      <path d="M3.5 7 12 11.5 20.5 7M12 11.5v10" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11" />
    </>
  ),
  pipes: (
    <>
      <path d="M3 6h9a6 6 0 0 1 6 6v9M3 12h9v9" />
      <path d="M3 4v10M10 22h10" />
    </>
  ),
  tag: (
    <>
      <path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9Z" />
      <circle cx="8" cy="8" r="1.5" />
    </>
  ),
};

function Icon({ name }) {
  return (
    <svg
      className="pitch-icon"
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

const reasons = [
  {
    icon: 'cube',
    title: 'Real 3D animated cutaways',
    text: '24 equipment items in 3D, each with an OFF image and an animated ON cutaway.',
  },
  {
    icon: 'layout',
    title: 'Complete EBO site themes',
    text: 'Import one .xml and a full 11 or 13-page site runs, with alarms, trends and schedules.',
  },
  {
    icon: 'pipes',
    title: 'Pipes & valves fit 1:1',
    text: '378 pipes in 9 colors and 15 accessories at the same scale as the equipment.',
  },
  {
    icon: 'tag',
    title: 'Clear prices, instant download',
    text: 'From $49. Pay online and download right away, with no quote request.',
  },
];

// "Why 3d-custom": four short reasons with icons
export function WhyStrip({ heading = 'Why 3d-custom' }) {
  return (
    <section className="why-strip" aria-labelledby="why-strip-title">
      <h2 id="why-strip-title" className="why-strip__title">
        {heading}
      </h2>
      <ul className="why-strip__list">
        {reasons.map((reason) => (
          <li className="why-strip__item" key={reason.title}>
            <Icon name={reason.icon} />
            <div>
              <h3 className="why-strip__name">{reason.title}</h3>
              <p className="why-strip__text">{reason.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

const rows = [
  {
    topic: 'Equipment',
    flat: 'Flat 2D symbols',
    ours: '3D equipment with an animated cutaway that shows what runs inside',
  },
  {
    topic: 'Full site',
    flat: 'Symbols only – you still build every page',
    ours: 'Complete EBO site themes: header, navigation, alarms, trends, schedules and demo points',
  },
  {
    topic: 'Piping',
    flat: '2D pipe symbols',
    ours: '378 pipes and 15 valves, sensors and actuators at the same scale as the equipment, so flanges line up',
  },
  {
    topic: 'Price',
    flat: 'Often "request a quote"',
    ours: 'Prices on the page, from $49, instant download',
  },
];

// Generic comparison: a typical flat symbol library vs ours
export function FlatVsOurs() {
  return (
    <section className="compare" aria-labelledby="compare-title">
      <h2 id="compare-title" className="compare__title">
        Flat symbols vs 3d-custom
      </h2>
      <div className="compare__scroll">
        <table className="compare__table">
          <thead>
            <tr>
              <th scope="col">
                <span className="visually-hidden">Topic</span>
              </th>
              <th scope="col">Typical flat 2D symbol library</th>
              <th scope="col" className="compare__ours">
                3d-custom
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.topic}>
                <th scope="row">{row.topic}</th>
                <td>{row.flat}</td>
                <td className="compare__ours">{row.ours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
