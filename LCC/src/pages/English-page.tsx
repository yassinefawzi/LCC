import "../../styles/English.css";
import { useState } from "react";

import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

/* BANNERS */
import banner1 from "../assets/english/banner1.webp";
import banner2 from "../assets/english/banner2.webp";
import banner3 from "../assets/english/banner3.webp";

/* FOCUS IMAGES */
import focus1 from "../assets/english/focus1.webp";
import focus2 from "../assets/english/focus2.webp";
import focus3 from "../assets/english/focus3.webp";
import Footer from "../components/Footer";

/ * WORKSHOP IMAGES */
import workshop1 from "../assets/english/workshop1.webp";
import workshop2 from "../assets/english/workshop2.webp";
import workshop3 from "../assets/english/workshop3.webp";
import workshop4 from "../assets/english/workshop4.webp";

export default function English() {
  const banners = [
    {
      img: banner1,
      title: "🧠 Neurological English Learning",
      text: "A smarter way for children to absorb English naturally through brain-based coaching.",
    },
    {
      img: banner2,
      title: "🗣️ Speak with Confidence",
      text: "Interactive speaking games that remove fear and build natural communication.",
    },
    {
      img: banner3,
      title: "🎯 Learn. Grow. Succeed.",
      text: "Structured learning that improves school performance and long-term skills.",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((p) => (p + 1) % banners.length);
  const prev = () => setIndex((p) => (p === 0 ? banners.length - 1 : p - 1));

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="english">
      <Navbar />

      <section className="english-hero" id="banner">
        <div className="english-slider">
          <img src={banners[index].img} alt="banner" />
        </div>

        <div className="english-nav">
          <button className="english-arrow left" onClick={prev}>
            ‹
          </button>

          <button className="english-arrow right" onClick={next}>
            ›
          </button>
        </div>

        <div className="english-content">
          <h1>{banners[index].title}</h1>
          <p>{banners[index].text}</p>

          <div className="english-buttons">
            <button
              onClick={() =>
                document
                  .getElementById("program")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Program
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* FOCUS */}
      <section className="english-section">
        <h2>Our Focus</h2>

        <div className="english-grid focus-grid">
          <div className="english-card focus-card">
            <img src={focus1} />
            <div>
              <h3>👩‍🏫 Small Groups</h3>
              <p>Every child gets personal attention and guided learning.</p>
            </div>
          </div>

          <div className="english-card focus-card">
            <img src={focus2} />
            <div>
              <h3>🧠 Neurological Method</h3>
              <p>
                We activate natural language learning pathways in the brain.
              </p>
            </div>
          </div>

          <div className="english-card focus-card">
            <img src={focus3} />
            <div>
              <h3>❤️ Safe Environment</h3>
              <p>Stress-free learning that builds confidence naturally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="english-section objectives-section">
        <h2>Our Objectives</h2>
        <div className="objectives-grid">
          <div className="objective-card">
            🎯 Fun & natural English learning
          </div>
          <div className="objective-card">
            🧠 Improve memory & brain development
          </div>
          <div className="objective-card">
            🌱 Build independence & confidence
          </div>
          <div className="objective-card">
            🗣️ Strong speaking & communication skills
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section className="english-section" id="program">
        <h2>📘 Our Workshops</h2>

        <div className="workshops-grid">
          <div className="workshop-card">
            <img src={workshop1} alt="Science workshop" />
            <div className="workshop-content">
              <h3>🔬 Science</h3>
              <p>Fun experiments in English that build curiosity and logic.</p>
            </div>
          </div>

          <div className="workshop-card">
            <img src={workshop2} alt="Creative arts workshop" />
            <div className="workshop-content">
              <h3>🎨 Creativity</h3>
              <p>Drawing, crafts, and imagination-based activities.</p>
            </div>
          </div>

          <div className="workshop-card">
            <img src={workshop3} alt="Writing workshop" />
            <div className="workshop-content">
              <h3>✍️ Writing</h3>
              <p>Learn structured English writing in a simple way.</p>
            </div>
          </div>

          <div className="workshop-card">
            <img src={workshop4} alt="Reading workshop" />
            <div className="workshop-content">
              <h3>📖 Reading</h3>
              <p>Stories and interactive comprehension activities.</p>
            </div>
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
