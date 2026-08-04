import React from "react";
import "../Components/CSS/Skills.css";

function Skills({skillset}) {
  return (
    <section className="skills-section" id="skills">
      <div className="container">

        <div className="text-center mb-5">
          <p className="section-tag">MY SKILLS</p>
          <h2 className="section-title">Technologies & Tools</h2>
          <p className="section-description">
            Technologies and tools I use to build responsive,
            scalable and modern web applications.
          </p>
        </div>

        <div className="row g-4">
          {
          skillset.map(i =>
            <div className="col-lg-3 col-md-4 col-6">
            
              <div className="skill-box">
                {i.skill}
              </div>
            </div>
          )
          }
          
        </div>
      </div>
    </section>
  );
}

export default Skills;