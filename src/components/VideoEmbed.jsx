import { parseVideoUrl } from "../data/projects.js";
import "./VideoEmbed.css";

// Provider-agnostic embed: paste any YouTube or Vimeo URL and the right
// player will be rendered automatically. Returns null if the URL is empty
// or not recognized.
export default function VideoEmbed({ url, title = "Project video" }) {
  const info = parseVideoUrl(url);
  if (!info) return null;

  const src = buildEmbedSrc(info);
  const allow =
    info.provider === "vimeo"
      ? "autoplay; fullscreen; picture-in-picture; clipboard-write"
      : "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

  const providerLabel =
    info.provider === "vimeo" ? "VIMEO" : "YOUTUBE";

  return (
    <div className="video-embed">
      <span className="video-embed__label">
        EVIDENCE · 01 · VIDEO ({providerLabel})
      </span>
      <div className="video-embed__frame">
        <iframe
          src={src}
          title={title}
          loading="lazy"
          frameBorder="0"
          allow={allow}
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}

function buildEmbedSrc({ provider, id, hash }) {
  if (provider === "youtube") {
    // Privacy-friendly host, hidden related videos, modest branding
    return `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`;
  }
  // Vimeo
  const params = new URLSearchParams({
    title: "0",
    byline: "0",
    portrait: "0",
    dnt: "1",
  });
  if (hash) params.set("h", hash);
  return `https://player.vimeo.com/video/${id}?${params.toString()}`;
}
