import "./Projects.css";
import API from "../../services/api";
import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await API.get("projects/");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p>
          Here are some of the projects I have developed using modern web
          technologies.
        </p>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {(project.technology || "")
                  .split(",")
                  .filter((tech) => tech.trim() !== "")
                  .map((tech, index) => (
                    <span className="tech-badge" key={index}>
                      {tech.trim().replace(/['"]/g, "")}
                    </span>
                  ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-btn"
                >
                  View GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;