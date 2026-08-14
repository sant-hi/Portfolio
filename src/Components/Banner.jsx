import React from 'react'
import image from "../assets/Images/banner_new.png";
import "./CSS/Banner.css";
function Banner() {
  const name="Santhi Priya"
  const role="Python Full Stack Developer"
  return (
    <div id="banner"
          className="container-fluid d-flex align-items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${image})`,
            minHeight: "110vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
        
       <div
  style={{
    maxWidth: "700px",
    color: "#fff",
    padding: "40px",
  }}
>
  {/* Small Intro */}
  <p
    style={{
      color: "#cfcfcf",
      fontSize: "15px",
      letterSpacing: "4px",
      textTransform: "uppercase",
      marginBottom: "15px",
      fontWeight: "500",
    }}
  >
     Hello, I'm
  </p>

  {/* Name */}
  <h1
    style={{
      fontSize: "5rem",
      fontWeight: "800",
      lineHeight: "1",
      letterSpacing: "-2px",
      marginBottom: "15px",
      textTransform: "uppercase",
    }}
  >
    SANTHI
    <span style={{ color: "#e0dddd" }}> PRIYA</span>
  </h1>

  {/* Role */}
  <h3
    style={{
      fontWeight: "300",
      color: "#a8a8a8",
      letterSpacing: "6px",
      textTransform: "uppercase",
      marginBottom: "25px",
    }}
  >
    {role}
  </h3>
</div>
        
    </div>
  )
}

export default Banner