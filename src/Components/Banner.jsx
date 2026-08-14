import React from "react";
import image from "../assets/Images/banner_new.png";
import "./CSS/Banner.css";

function Banner() {
  const role = "Python Full Stack Developer";

  return (
    <div
      id="banner"
      className="banner-section"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0,0,0,0.55),
            rgba(0,0,0,0.55)
          ),
          url(${image})
        `,
      }}
    >
      <div className="banner-content">

        <p className="banner-intro">
          Hello, I'm
        </p>

        <h1 className="banner-name">
          SANTHI <span>PRIYA</span>
        </h1>

        <h3 className="banner-role">
          {role}
        </h3>

      </div>
    </div>
  );
}

export default Banner;