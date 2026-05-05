import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <main className="page">
        <div className="noise-overlay" aria-hidden="true" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/acts-commited/:slug"
            element={<ProjectPage />}
          />
          {/* Defensive alias for the correctly-spelled URL */}
          <Route
            path="/acts-committed/:slug"
            element={<ProjectPage />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
