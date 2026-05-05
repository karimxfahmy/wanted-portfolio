import "./Services.css";

const SERVICES = [
  "Videography",
  "Video Editing",
  "Color Grading",
  "Sound Engineering",
  "Directing & Screenwriting",
];

export default function Services() {
  return (
    <section className="section section--services">
      <div className="section-row services-row">
        <h2 className="section-heading">Services</h2>
        <ol className="services-list">
          {SERVICES.map((service, idx) => (
            <li key={service} className="services-item">
              <span className="services-num">{idx + 1}.</span>
              <span className="services-name">{service}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
