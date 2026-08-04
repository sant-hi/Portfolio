import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "./CSS/Navigation.css";

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={scrolled ? "custom-navbar scrolled" : "custom-navbar"}
    >
      <Container>

        <Navbar.Brand href="#banner" className="logo">
          Santhi Priya
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar" />

        <Navbar.Collapse id="navbar">

          <Nav className="mx-auto">

            <Nav.Link href="#banner">Home</Nav.Link>

            <Nav.Link href="#about">About</Nav.Link>

            <Nav.Link href="#skills">Skills</Nav.Link>

            <Nav.Link href="#projects">Projects</Nav.Link>

            <Nav.Link href="#contact">Contact</Nav.Link>

          </Nav>

          <a
  href="/Resume_SANTHIPRIYA.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-outline-light rounded-pill px-4 resume-btn-nav"
>
  View Resume
</a>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Navigation;