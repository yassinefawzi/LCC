import { useNavigate } from "react-router-dom";
import "../../styles/Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const goCourses = () => {
    navigate("/courses");
  };

  const scrollToSection = (id: string) => {
    navigate("/");

    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;

      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  return (
    <header>
      <div className="logo">
        <img src="" alt="LCC Logo" className="logo-img" />
        <span className="logo-text">Language Coaching centre</span>
      </div>

      <nav className="nav-links">
        <a onClick={() => scrollToSection("home")}>Home</a>

        <a onClick={() => scrollToSection("courses")}>Courses</a>

        <a onClick={() => scrollToSection("about")}>About</a>

        <a onClick={() => scrollToSection("hub")}>Hub</a>

        <a onClick={() => scrollToSection("contact")}>Contact</a>

        <button className="nav-btn">Enroll Now</button>
      </nav>
    </header>
  );
}