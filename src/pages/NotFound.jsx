import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="not-found">
      <p className="not-found__case">CASE FILE № 404</p>
      <h1 className="not-found__title">SUSPECT NOT FOUND</h1>
      <p className="not-found__copy">
        The lead you followed went cold. The page you're looking for doesn't
        exist — or has been retired from the case files.
      </p>
      <Link to="/" className="not-found__cta">
        ← Return to the case board
      </Link>
    </section>
  );
}
