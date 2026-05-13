import "../../styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>
          Have questions? Send us a message and we’ll get back to you quickly.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>

          <p>📍 lot de la commune, N79, Casablanca</p>
          <p>📧 contact@lcc.com</p>
          <p>📞 +212 669-515050</p>

          <div className="social-links">
            <a href="#" className="social-link">
              <svg viewBox="0 0 24 24" className="icon">
                <path
                  fill="currentColor"
                  d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.5c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4V12H16l-.5 3h-2.3v7A10 10 0 0 0 22 12z"
                />
              </svg>
            </a>

            <a href="#" className="social-link">
              <svg viewBox="0 0 24 24" className="icon">
                <path
                  fill="currentColor"
                  d="M20.5 3.5A11 11 0 0 0 3.2 18.7L2 22l3.4-1.1A11 11 0 0 0 20.5 3.5zM12 20a8 8 0 0 1-4.1-1.1l-.3-.2-2 .6.6-2-.2-.3A8 8 0 1 1 12 20zm4.5-5.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.6.1-.2.2-.7.7-.9.9-.2.2-.3.2-.6.1-1.7-.8-2.8-1.9-3.7-3.6-.2-.3 0-.4.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.6.1-.9.4-.3.3-1 1-1 2.4s1 2.7 1.2 2.9c.2.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.2-.5 1.4-1 .2-.5.2-.9.2-1 0-.1-.2-.2-.4-.3z"
                />
              </svg>
            </a>

            <a href="#" className="social-link">
              <svg viewBox="0 0 24 24" className="icon">
                <path
                  fill="currentColor"
                  d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm6.5-.8a1.2 1.2 0 1 0-1.2-1.2 1.2 1.2 0 0 0 1.2 1.2z"
                />
              </svg>
            </a>

            <a href="#" className="social-link">
              <svg viewBox="0 0 24 24" className="icon">
                <path
                  fill="currentColor"
                  d="M21 8.5a8.5 8.5 0 0 1-5-1.6v7.2a6.5 6.5 0 1 1-6.5-6.5 6.7 6.7 0 0 1 1 .1v3.1a3.3 3.3 0 1 0 2.5 3.2V2h3a5 5 0 0 0 5 5.5z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.1918051786706!2d-7.648201223655351!3d33.52239844552082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d7d6685f253%3A0xd3533b31876097f0!2sLanguage%20Coaching%20Centre!5e0!3m2!1sen!2sma!4v1778621198864!5m2!1sen!2sma"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
