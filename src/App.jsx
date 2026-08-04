import { useState } from "react";
import "./App.css";

// Components
import Navigation from "./Components/Navigation";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import My_Footer from "./Components/My_Footer";

// Project Images
import traffic from "./assets/Images/traffic.jpeg";
import job from "./assets/Images/job.jpeg";
import ecommerce from "./assets/Images/ecommerce.jpeg";

function App() {
  const [count, setCount] = useState(0);

  // User Details
  const user = {
    name: "Santhi Priya",
    role: "Python Full Stack Developer",
    email: "spsh103@gmail.com",
    qualification: "Bachelor of Technology in Computer Science and Engineering",
    ph: "7736769578",
    location: "Kannur, Kerala",
  };

  // Skills
  const skillset = [
    { skill: "Python" },
    { skill: "Django" },
    { skill: "React" },
    { skill: "JavaScript" },
    { skill: "HTML5" },
    { skill: "CSS3" },
    { skill: "Bootstrap" },
    { skill: "MySQL" },
  
  ];

  // Projects
  const projects = [
    {
      id: 1,
      title: "Intelligent Traffic Management System",
      image: traffic,
      tech: ["Python", "Flask", "OpenCV", "YOLO"],
      description:
        "Density-based traffic signal control system using computer vision for intelligent traffic management.",
      github: "https://github.com/yourusername/traffic-management",
      demo: "#",
    },
    {
      id: 2,
      title: "Job Portal",
      image: job,
      tech: ["Django", "MySQL", "Bootstrap"],
      description:
        "A recruitment platform connecting recruiters and candidates with job applications and profile management.",
      github: "https://github.com/yourusername/job-portal",
      demo: "#",
    },
    {
      id: 3,
      title: "E-Commerce Website",
      image: ecommerce,
      tech: ["React", "Bootstrap", "JavaScript"],
      description:
        "Responsive shopping website with product browsing, cart management, and secure checkout flow.",
      github: "https://github.com/yourusername/ecommerce",
      demo: "#",
    },
  ];

  return (
    <>
      <Navigation />

      <Banner user={user} />

      <About user={user} />

      <Skills skillset={skillset} />

      <Projects projects={projects} />

      <Contact user={user} />

      <My_Footer user={user} />
    </>
  );
}

export default App;