import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p className="site-footer__copy">© Copyright {year}</p>
    </footer>
  );
}
