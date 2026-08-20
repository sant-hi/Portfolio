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
import portfolio from "./assets/Images/portfolio.avif";
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
    title: "Recruitment and Applicant Tracking System",
    image: job,
    description:
      "A web-based recruitment and applicant tracking system for managing job postings, applications, candidates, and interviews.",
    tech: ["Python", "Django", "HTML", "CSS", "JavaScript", "MySQL"],
    github: "https://github.com/sant-hi/Recruitment-and-Applicant-Management-System",
    liveDemo: "YOUR_RECRUITMENT_LIVE_DEMO_LINK"
  },

  {
    title: "Personal Portfolio",
    image: portfolio,
    description:
      "A responsive personal portfolio website showcasing my skills, projects, experience, and contact information.",
    tech: ["React", "JavaScript", "HTML", "CSS", "Bootstrap","Django"],
    github: "https://github.com/sant-hi/Portfolio",
    liveDemo: "YOUR_PORTFOLIO_LIVE_DEMO_LINK"
  },

  {
    title: "E-Commerce Website",
    image: ecommerce,
    description:
      "An e-commerce website with product management, shopping cart, checkout, and payment functionality.",
    tech: ["Python", "Django", "HTML", "CSS", "JavaScript", "MySQL"],
    github: "YOUR_ECOMMERCE_GITHUB_LINK",
    liveDemo: "YOUR_ECOMMERCE_LIVE_DEMO_LINK"
  }
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