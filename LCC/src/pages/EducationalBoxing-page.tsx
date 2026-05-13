import "../../styles/Boxing.css";
import { useState } from "react";

import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

/* HERO */
import banner1 from "../assets/boxing/banner1.webp";
import banner2 from "../assets/boxing/banner2.webp";
import banner3 from "../assets/boxing/banner3.webp";

/* WORKSHOPS */
import space1 from "../assets/boxing/space1.webp";
import space2 from "../assets/boxing/space2.webp";
import space3 from "../assets/boxing/space3.webp";
import space4 from "../assets/boxing/space4.webp";

export default function EducationalBoxing() {
  const banners = [
    {
      img: banner1,
      title: " Educational Boxing Program",
      text: "Train the body and mind together through structured boxing education.",
    },
    {
      img: banner2,
      title: " Discipline & Focus Training",
      text: "Improve concentration, reaction speed, and emotional control.",
    },
    {
      img: banner3,
      title: " Strength + Confidence",
      text: "Build self-confidence through safe and guided boxing activities.",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((p) => (p + 1) % banners.length);
  const prev = () => setIndex((p) => (p === 0 ? banners.length - 1 : p - 1));

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="boxing">
      <Navbar />

      {/* HERO */}
      <section className="boxing-hero">
        <div className="boxing-slider">
          <img src={banners[index].img} alt="boxing banner" />
        </div>

        <div className="boxing-nav">
          <button className="boxing-arrow left" onClick={prev}>
            ‹
          </button>
          <button className="boxing-arrow right" onClick={next}>
            ›
          </button>
        </div>

        <div className="boxing-content">
          <h1>{banners[index].title}</h1>
          <p>{banners[index].text}</p>

          <div className="boxing-buttons">
            <button onClick={() => scrollTo("program")}>
              🥊 Explore Training
            </button>
            <button onClick={() => scrollTo("contact")}>📩 Contact Us</button>
          </div>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="boxing-section objectives">
        <h2> Objectives</h2>

        <div className="objectives-grid">
          <div className="objective-card">🥊 Discipline & focus</div>
          <div className="objective-card">🧠 Brain-body coordination</div>
          <div className="objective-card">🔥 Confidence building</div>
          <div className="objective-card">⚡ Reaction speed improvement</div>
        </div>
      </section>

      {/* SPACE */}
      <section className="boxing-section boxing-space">
        <h2> Training Environment</h2>
        <p className="boxing-subtitle">
          A safe, structured and motivating space for children to grow
          physically and mentally.
        </p>

        <div className="boxing-space-grid">
          <div className="space-card">
            <img src={space1} alt="gym space" />
            <div className="space-overlay">🥊 Training Area</div>
          </div>

          <div className="space-card">
            <img src={space2} alt="gym space" />
            <div className="space-overlay">🧠 Focus Zone</div>
          </div>

          <div className="space-card">
            <img src={space3} alt="gym space" />
            <div className="space-overlay">💪 Physical Training</div>
          </div>

          <div className="space-card">
            <img src={space4} alt="gym space" />
            <div className="space-overlay">🔥 Sparring Area</div>
          </div>
        </div>
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
