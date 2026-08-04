import React from "react";
import profile from "../assets/Images/profile.png";
import "../Components/CSS/About.css";

function About({user}) {
  return (
    <section className="about-section" id="about">
      <div className="container">

        <div className="row align-items-center g-5">

          {/* Left Side */}
          <div className="col-lg-5 text-center">

            <div className="profile-wrapper">

              <div className="profile-circle"></div>

              <img
                src={profile}
                alt="Santhi Priya"
                className="profile-image"
              />

            </div>

          </div>

          {/* Right Side */}
          <div className="col-lg-7">

            <span className="about-tag">
              ABOUT ME
            </span>

            <h2 className="about-title">
              Building clean & modern web applications with Python and React.
            </h2>

            <p className="about-description">
              I'm <strong>{user.name}</strong>, a Python Full Stack Developer
              passionate about creating responsive, scalable, and user-friendly
              web applications. I enjoy transforming ideas into elegant digital
              solutions using Django, React, MySQL, HTML, CSS, JavaScript, and
              Bootstrap.
            </p>

            <p className="about-description">
              I believe in writing clean, maintainable code while continuously
              learning new technologies and delivering intuitive user
              experiences with attention to both performance and design.
            </p>

            {/* Information */}

            <div className="about-details">

              <div>
                <span>Name</span>
                <h6>{user.name}</h6>
              </div>

              <div>
                <span>Email</span>
                <h6>{user.email}</h6>
              </div>

              <div>
                <span>Education</span>
                <h6>{user.qualification}</h6>
              </div>

              <div>
                <span>Location</span>
                <h6>{user.location}</h6>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;