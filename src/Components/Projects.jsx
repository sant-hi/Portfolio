import React from "react";
import traffic from "../assets/Images/traffic.jpeg";
import job from "../assets/Images/job.jpeg";
import ecommerce from "../assets/Images/ecommerce.jpeg";
import "../Components/CSS/Projects.css";

function Projects({projects}) {
  

  return (
    <section className="projects-section" id="projects">
      <div className="container">

        <div className="text-center mb-5">
          <span className="project-tag">MY WORK</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="project-subtitle">
            A collection of projects showcasing my skills in Python,
            Django, React, and modern web development.
          </p>
        </div>

        <div className="row g-4">
          {
          projects.map(i => 
            <div className="col-lg-4 col-md-6">
              <div className="project-card">
                <img src={i.image} alt={i.title} className="project-image"/>
                <div className="project-content">
                  <h4>{i.title}</h4>
                  <p>{i.description}</p>
                  <div className="tech-stack">
  {i.tech.map((tech, index) => (
    <span key={index}>{tech}</span>
  ))}
</div>
                    
                  <div className="mt-4">
                    <a
  href={i.github}
  target="_blank"
  rel="noopener noreferrer"
  className="btn project-btn me-2"
>
  GitHub
</a>

                    <a
  href={i.liveDemo}
  target="_blank"
  rel="noopener noreferrer"
  className="btn project-btn"
>
  Live Demo
</a>
                  </div>

                </div>

              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
}

export default Projects;