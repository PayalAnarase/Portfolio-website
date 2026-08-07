import "./About.css";
import { FaLightbulb, FaLaptopCode, FaBookOpen, FaCode } from "react-icons/fa";

function About({ profile }) {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="section-title">
          <h2>About Me</h2>
          <p>Who I am beyond the code</p>
        </div>

        <div className="about-content">
          <p>
            {profile?.about}
          </p>
        </div>

        <div className="about-cards">

          <div className="about-card">
            <FaLightbulb className="about-icon" />
            <h3>What Drives Me</h3>

            <ul>
              <li>Building meaningful applications</li>
              <li>Solving real-world problems</li>
              <li>Writing clean, maintainable code</li>
              <li>Creating intuitive user experiences</li>
            </ul>
          </div>

          <div className="about-card">
            <FaLaptopCode className="about-icon" />
            <h3>Development Focus</h3>

            <ul>
              <li>Full Stack Web Development</li>
              <li>Responsive UI Design</li>
              <li>REST API Integration</li>
              <li>Modern React Applications</li>
            </ul>
          </div>

          <div className="about-card">
            <FaBookOpen className="about-icon" />
            <h3>Currently Learning</h3>

            <ul>
              <li>Advanced React</li>
              <li>Django REST Framework</li>
              <li>System Design Basics</li>
              <li>Backend Best Practices</li>
            </ul>
          </div>

          <div className="about-card">
            <FaCode className="about-icon" />
            <h3>Developer Mindset</h3>

            <ul>
              <li>Always curious</li>
              <li>Continuous improvement</li>
              <li>Attention to detail</li>
              <li>Learning by building</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;