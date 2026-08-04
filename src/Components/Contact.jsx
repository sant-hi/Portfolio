import React from "react";
import "../Components/CSS/Contact.css"
function Contact() {
  return (
    <section id="contact" className="py-5"
      style={{ backgroundColor: "#0b0b0b", color: "#fff" }}
    >
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <p
            className="text-uppercase text-secondary project-tag"
            style={{ letterSpacing: "4px" }}
          >
            Get In Touch
          </p>

          <h2 className="section-title">Contact Me</h2>

          <p className="section-description">
            Have a project in mind or looking for a Python Full Stack
            Developer? Feel free to reach out. I'd love to connect with you.
          </p>
        </div>

        <div className="row g-4">

          {/* Contact Information */}
          <div className="col-lg-5">

            <div
              className="card bg-dark text-light border-secondary shadow-lg h-100"
              style={{ borderRadius: "20px" }}
            >
              <div className="card-body p-4">

                <h3 className="mb-4">Let's Connect</h3>

                <div className="mb-4">
                  <h6 className="text-secondary">Email</h6>
                  <p className="mb-0">spsh103@gmail.com</p>
                </div>

                <div className="mb-4">
                  <h6 className="text-secondary">Phone</h6>
                  <p className="mb-0">+91 7736769578</p>
                </div>

                <div className="mb-4">
                  <h6 className="text-secondary">Location</h6>
                  <p className="mb-0">Kannur, Kerala, India</p>
                </div>

                <div className="mb-4">
                  <h6 className="text-secondary">Availability</h6>
                  <span className="badge bg-success px-3 py-2">
                    Open to Opportunities
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="col-lg-7">

            <div
              className="card bg-dark text-light border-secondary shadow-lg"
              style={{ borderRadius: "20px" }}
            >
              <div className="card-body p-4">

                <form>

                  <div className="row">

                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control bg-black text-light border-secondary"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <input
                        type="email"
                        className="form-control bg-black text-light border-secondary"
                        placeholder="Email Address"
                      />
                    </div>

                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control bg-black text-light border-secondary"
                      placeholder="Subject"
                    />
                  </div>

                  <div className="mb-4">
                    <textarea
                      rows="6"
                      className="form-control bg-black text-light border-secondary"
                      placeholder="Write your message..."
                    ></textarea>
                  </div>

                  <button className="btn btn-light px-4 py-2 fw-semibold">
                    Send Message
                  </button>

                </form>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;