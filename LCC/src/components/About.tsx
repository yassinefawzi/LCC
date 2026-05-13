import "../../styles/About.css";

import pic1 from "../assets/about1.webp";
import pic2 from "../assets/about2.webp";
import pic3 from "../assets/about3.webp";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            At LCC (Language Coaching Center), we help students develop
            real-world communication skills through structured, modern, and
            interactive learning.
          </p>

          <p>
            Our mission is to make language learning simple, practical, and
            effective for academic, professional, and personal growth.
          </p>

          <br />
          <button className="about-btn">Book A Free Visit</button>
        </div>
        <div className="about-image">
          <img src={pic1} alt="About Us 1" />
          <img src={pic2} alt="About Us 2" />
          <img src={pic3} alt="About Us 3" />
        </div>
      </div>
    </section>
  );
}
