import { useState } from "react";

import About from "../components/About";
import Courses from "../components/Courses";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import banner1 from "../assets/pic1.webp";
import banner2 from "../assets/pic2.webp";
import banner3 from "../assets/pic3.webp";

import hub1 from "../assets/hub1.webp";
import hub2 from "../assets/hub2.webp";
import hub3 from "../assets/hub3.webp";
import hub4 from "../assets/hub4.webp";

export default function Homepage() {
  // ---------------- BANNER SLIDER ----------------
  const banners = [
    {
      img: banner1,
      title: "Learn English the Smart Way",
      text: "Join our modern language coaching center and improve your skills fast.",
    },
    {
      img: banner2,
      title: "Build Confidence in Communication",
      text: "Practice real-world conversations with expert guidance.",
    },
    {
      img: banner3,
      title: "Achieve Your Academic Goals",
      text: "Structured learning for school, exams, and career success.",
    },
  ];

  const [bannerIndex, setBannerIndex] = useState(0);

  const nextBanner = () => {
    setBannerIndex((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setBannerIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  // ---------------- HUB SLIDER ----------------
  const hubs = [
    {
      img: hub1,
      title: "Interactive Learning",
      text: "Engage with fun and practical learning experiences.",
    },
    {
      img: hub2,
      title: "Modern Classrooms",
      text: "Comfortable environment designed for focus and growth.",
    },
    {
      img: hub3,
      title: "Group Activities",
      text: "Learn faster through collaboration and teamwork.",
    },
    {
      img: hub4,
      title: "Skill Development",
      text: "Improve speaking, writing, and comprehension skills.",
    },
  ];

  const [hubIndex, setHubIndex] = useState(0);

  const nextHub = () => {
    setHubIndex((prev) => (prev + 1) % hubs.length);
  };

  const prevHub = () => {
    setHubIndex((prev) => (prev === 0 ? hubs.length - 1 : prev - 1));
  };

  return (
    <main className="homepage">
      {/* NAVBAR */}
      <Navbar />

      <section className="hero" id="banner">
        <div className="hero-slider">
          <img src={banners[bannerIndex].img} alt="banner" />
        </div>
        <div className="hero-nav">
          <button className="hero-arrow left" onClick={prevBanner}>
            ‹
          </button>

          <button className="hero-arrow right" onClick={nextBanner}>
            ›
          </button>
        </div>
        <div className="hero-content">
          <h1>{banners[bannerIndex].title}</h1>
          <p>{banners[bannerIndex].text}</p>

          <div className="hero-buttons">
            <button>Explore Courses</button>
            <button>Contact Us</button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* COURSES */}
      <section id="courses">
        <Courses />
      </section>

      <section className="hub" id="hub">
        <button className="hub-btn left" onClick={prevHub}>
          ◀
        </button>

        <div className="hub-text">
          <h2>{hubs[hubIndex].title}</h2>
          <p>{hubs[hubIndex].text}</p>
        </div>

        <div className="hub-img">
          <img src={hubs[hubIndex].img} alt="hub" />
        </div>

        <button className="hub-btn right" onClick={nextHub}>
          ▶
        </button>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
