import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects.js";
import "./Work.css";

export default function Work() {
  return (
    <section className="section section--work">
      <div className="work-header">
        <h2 className="section-heading">Acts Committed</h2>
      </div>

      <div className="work-list">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ slug, title, category, date, image, alt }) {
  return (
    <Link className="project-card" to={`/acts-commited/${slug}`}>
      <div className="project-card__media">
        <img src={image} alt={alt} loading="lazy" />
      </div>

      <div className="project-card__body">
        <div className="project-card__title-row">
          <h3 className="project-card__title" dir="auto">
            {title}
          </h3>
          <span className="project-card__arrow" aria-hidden="true">
            <ArrowRightIcon />
          </span>
        </div>

        <div className="project-card__meta">
          <div className="project-card__meta-col">
            <span className="project-card__meta-label">Category:</span>
            <span className="project-card__meta-value">{category}</span>
          </div>
          <div className="project-card__meta-col">
            <span className="project-card__meta-label">Date:</span>
            <span className="project-card__meta-value">{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
