import React from "react";
import "../Components/CSS/Contact.css"
import { sendContactMessage } from "../services/api";
import { useState } from "react";
function Contact() {

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: ""
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await sendContactMessage(formData);

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

  } catch (error) {
    console.error(error);
    alert("Failed to send message.");
  }
};




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

                <form onSubmit={handleSubmit}>

                  <div className="row">

                    <div className="col-md-6 mb-3">
                      <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  className="form-control bg-black text-light border-secondary"
  placeholder="Your Name"
  required
/>
                    </div>

                    <div className="col-md-6 mb-3">
                      <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  className="form-control bg-black text-light border-secondary"
  placeholder="Email Address"
  required
/>
                    </div>

                  </div>

                  <div className="mb-3">
                    <input
  type="text"
  name="subject"
  value={formData.subject}
  onChange={handleChange}
  className="form-control bg-black text-light border-secondary"
  placeholder="Subject"
  required
/>
                  </div>

                  <div className="mb-4">
                    <textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  rows="6"
  className="form-control bg-black text-light border-secondary"
  placeholder="Write your message..."
  required
></textarea>
                  </div>

                  <button
  type="submit"
  className="btn btn-light px-4 py-2 fw-semibold"
>
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