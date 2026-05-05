import { Link, useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import {
  getProjectBySlug,
  getAdjacentProjects,
} from "../data/projects.js";
import Footer from "../components/Footer.jsx";
import VideoEmbed from "../components/VideoEmbed.jsx";
import { SITE_NAME } from "../site.js";
import "./ProjectPage.css";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — ${SITE_NAME}`;
    }
    return () => {
      document.title = SITE_NAME;
    };
  }, [project]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <article className="project">
      <nav className="project-nav">
        <Link to="/" className="project-nav__home" aria-label="Back to home">
          <ArrowLeftIcon />
          <span>Acts Committed</span>
        </Link>
        <Link to="/" className="project-nav__brand" aria-label="WANTED home">
          WANTED
        </Link>
      </nav>

      <header className="project-header">
        <span className="project-case">CASE FILE № {project.caseNumber}</span>
        <h1 className="project-title" dir="auto">
          {project.title}
        </h1>
        <p className="project-tagline">{project.tagline}</p>
      </header>

      <div className="project-meta">
        <MetaItem label="Category" value={project.category} />
        <MetaItem label="Date" value={project.date} />
        <MetaItem label="Client" value={project.client} />
        <MetaItem label="Role" value={project.role} />
      </div>

      {project.videoUrl && (
        <VideoEmbed
          url={project.videoUrl}
          title={`${project.title} — video`}
        />
      )}

      <section className="project-body">
        <div className="project-body__col project-body__col--main">
          <h2 className="project-body__heading">Brief</h2>
          {project.description.map((para, idx) => (
            <p key={idx} className="project-body__para">
              {para}
            </p>
          ))}
        </div>

        <aside className="project-body__col project-body__col--side">
          <h2 className="project-body__heading">Credits</h2>
          <dl className="project-credits">
            {project.credits.map((credit) => (
              <div key={credit.label} className="project-credit">
                <dt>{credit.label}</dt>
                <dd>{credit.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      <section className="project-pager">
        {prev && (
          <Link
            to={`/acts-commited/${prev.slug}`}
            className="project-pager__link project-pager__link--prev"
          >
            <span className="project-pager__label">← Previous Act</span>
            <span className="project-pager__title" dir="auto">
              {prev.title}
            </span>
          </Link>
        )}
        {next && (
          <Link
            to={`/acts-commited/${next.slug}`}
            className="project-pager__link project-pager__link--next"
          >
            <span className="project-pager__label">Next Act →</span>
            <span className="project-pager__title" dir="auto">
              {next.title}
            </span>
          </Link>
        )}
      </section>

      <Footer />
    </article>
  );
}

function MetaItem({ label, value }) {
  return (
    <div className="project-meta__item">
      <span className="project-meta__label">{label}</span>
      <span className="project-meta__value">{value}</span>
    </div>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}
