import "../../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src="/assets/logo.png" alt="LCC Logo" className="footer-logo" />

          <p>
            Professional language coaching programs designed for academic,
            personal, and professional success.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="/#about">About Us</a>
            </li>
            <li>
              <a href="/courses">Courses</a>
            </li>zz
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#programs">Programs</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>

          <p>Casablanca, Morocco</p>
          <p>contact@lcc.com</p>
          <p>+212 XXX XXX XXX</p>
        </div>
        <div className="footer-bottom">
          <p>© 2026 LCC Language & Coaching Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
