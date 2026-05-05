import { useState } from "react";
import "./Contact.css";

const EMAIL = "karimxfahmy@gmail.com";
const PHONE_DISPLAY = "+201060984474";
const PHONE_HREF = "tel:+201060984474";

const SOCIALS = [
  { label: "Twitter", href: "https://x.com/kxfvisuals" },
  { label: "LinkedIn", href: "https://linkedin.com/in/kxf/" },
  { label: "Instagram", href: "https://instagram.com/karimxfahmy/" },
];

export default function Contact() {
  return (
    <section className="section section--contact">
      <h2 className="section-heading">Have a Project Idea?</h2>

      <p className="section-text contact-intro">
        After investigations, we gathered more clues about Karim. If you want to
        connect with him or send him a message, check below:
      </p>

      <div className="contact-social">
        <ul className="contact-link-list">
          <li>
            <a className="contact-link" href={`mailto:${EMAIL}`}>
              <SmallDot /> <span>{EMAIL}</span>
            </a>
          </li>
          <li>
            <a className="contact-link" href={PHONE_HREF}>
              <SmallDot /> <span>{PHONE_DISPLAY}</span>
            </a>
          </li>
        </ul>

        <ul className="contact-link-list">
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a
                className="contact-link"
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                <SmallDot /> <span>{s.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="contact-form-wrap">
        <h3 className="contact-form-heading">
          Have any Clues? Leave them here.
        </h3>
        <ContactForm />
      </div>
    </section>
  );
}

function SmallDot() {
  return <span className="contact-dot" aria-hidden="true" />;
}

function ContactForm() {
  const [status, setStatus] = useState("idle");

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("submitting");
    // Simulated submit (the original Framer form had no real backend either).
    setTimeout(() => {
      setStatus("sent");
      form.reset();
    }, 600);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-row">
        <label className="contact-field">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            autoComplete="name"
          />
        </label>
        <label className="contact-field">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            autoComplete="email"
          />
        </label>
      </div>

      <label className="contact-field contact-field--block">
        <textarea
          name="message"
          placeholder="Write a message..."
          required
          rows={5}
        />
      </label>

      <label className="contact-checkbox">
        <input type="checkbox" name="agreement" required />
        <span>I read and agree with Privacy Policies</span>
      </label>

      <button
        type="submit"
        className="contact-submit"
        disabled={status === "submitting"}
      >
        {status === "sent"
          ? "Message Sent"
          : status === "submitting"
          ? "Sending..."
          : "Send Message"}
      </button>
    </form>
  );
}
