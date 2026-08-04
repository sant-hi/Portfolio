import React from "react";

function My_Footer() {
  return (
    <footer
      className="bg-black text-light border-top border-secondary py-4"
      style={{ borderColor: "#222 !important" }}
    >
      <div className="container">

        <div className="row align-items-center">

          {/* Left */}
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">

            <h4 className="fw-bold mb-1">
              SANTHI PRIYA
            </h4>

            <p className="text-secondary mb-0">
              Python Full Stack Developer
            </p>

          </div>

          {/* Right */}
          <div className="col-md-6 text-center text-md-end">

            <a
              href="https://github.com/sant-hi"
              className="btn btn-outline-light btn-sm rounded-circle me-2"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/santhi-priya578/"
              className="btn btn-outline-light btn-sm rounded-circle me-2"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>

            <a
              href="mailto:santhipriya9578@gmail.com"
              className="btn btn-outline-light btn-sm rounded-circle"
            >
              <i className="bi bi-envelope-fill"></i>
            </a>

          </div>

        </div>

        <hr className="border-secondary my-4" />

        <div className="text-center text-secondary">

          <small>
            © {new Date().getFullYear()} Santhi Priya. All Rights Reserved.
          </small>

        </div>

      </div>
    </footer>
  );
}

export default My_Footer;