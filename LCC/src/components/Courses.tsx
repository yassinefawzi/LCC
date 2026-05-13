import Card from "./Card";
import "../../styles/Cards.css";
import "../../styles/Courses.css";

import boxing from "../assets/boxing.webp";
import english from "../assets/class.webp";
import summer from "../assets/camp.webp";

export default function Courses() {
  return (
    <section className="courses">
      <h2>Our Courses</h2>
      <div className="courses-grid">
        
		<Card
          title="English Classes"
          description="Start your English learning journey with our comprehensive course designed for beginners. Build a strong foundation in grammar, vocabulary, and conversational skills."
          image={english}
          buttonText="Explore Program"
          onClick={() => console.log("kids Development")}
		  className="course"
        />
		<Card
          title="Educational Boxing"
          description="Start your English learning journey with our comprehensive course designed for beginners. Build a strong foundation in grammar, vocabulary, and conversational skills."
          image={boxing}
          buttonText="Explore Program"
          onClick={() => console.log("Teens Development")}
		  className="course"
        />
		<Card
          title="Summer Camp"
          description="Join our summer camp to improve your English skills in a fun and engaging environment. Perfect for children and teenagers."
          image={summer}
          buttonText="Explore Program"
          onClick={() => console.log("Summer Camp")}
		  className="course"
		  id="summer"
        />
      </div>
    </section>
  );
}
