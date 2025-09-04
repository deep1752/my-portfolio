'use client';

import React, { useState } from 'react';
import axios from 'axios';
import Image from "next/image";

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAlert({ message: '', type: '' });

    try {
      const res = await axios.post(`https://gymstar-api-p8bv.onrender.com/contact/`, formData);
      setAlert({
        message: 'Message sent successfully! We will get back to you soon.',
        type: 'success',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      const errorMessage =
        err.response?.data?.detail || 'Error sending message. Please try again later.';
      setAlert({
        message: errorMessage,
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

return (
    <>
      <div className="wrapper">
        <div className="sidebar">
          <div className="sidebar-header">
            <img src="img/profile.jpg" alt="Profile" />
          </div>
          <div className="sidebar-content">
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
              <a href="#" className="navbar-brand">
                Navigation
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="nav navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#header">
                      Home
                      <i className="fa fa-home" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      About
                      <i className="fa fa-address-card" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#experience">
                      Experience
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#portfolio">
                      Portfolio
                      <i className="fa fa-file-archive" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact
                      <i className="fa fa-envelope" />
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="sidebar-footer">
            <a className="btn" href="https://www.facebook.com/share/14GpMwh9n3v/?mibextid=wwXIfr">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="btn" href="https://www.linkedin.com/in/deepak-kumawat-a96831362?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
              <i className="fab fa-linkedin-in" />
            </a>
            <a className="btn" href="https://www.instagram.com/deepakkumawat8800?igsh=ems4N2R0Z2l0dmJ0&utm_source=qr">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
        <div className="content">
          {/* Header Start */}
          <div className="header" id="header">
            <div className="content-inner">
              <p>I'm</p>
              <h1>Deepak Kumawat</h1>
              <h2 />
              <div className="typed-text">
                Mern Stack Developer
              </div>
            </div>
          </div>
          {/* Header End */}
          {/* Large Button Start */}
          <div className="large-btn">
            <div className="content-inner">
              <a className="btn" href="/Deepak-Mern-Stack-Developer.pdf" download>
                <i className="fa fa-download" />
                Resume
              </a>
              <a className="btn" href="#contact">
                <i className="fa fa-hands-helping" />
                Hire Me
              </a>
            </div>
          </div>
          {/* Large Button End */}
          {/* About Start */}
          <div className="about" id="about">
            <div className="content-inner">
              <div className="content-header">
                <h2>About Me</h2>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6 col-lg-5">
                  <img src="img/about.jpg" alt="About Image" />
                </div>
                <div className="col-md-6 col-lg-7">
                  <p>
                    Highly motivated MERN Stack Developer skilled in building scalable full-stack applications using React.js, Next.js, Node.js, Express.js, MongoDB, and SQL. Experienced in developing REST APIs, implementing secure authentication, and applying modern software development practices. Demonstrates strong problem-solving and debugging skills, with a commitment to contributing effectively within Agile teams and adapting quickly to new technologies.
                  </p>
                  <a className="btn" href="#contact">
                    Hire Me
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="skills">
                    <div className="content-header">
                      <h2>SKILLS</h2>
                    </div>
                    <ul className="skills-list">
                      <li><strong>Professional Skills:</strong> Problem Solving, Responsive Web Design, Team Collaboration, Agile & Sprint-based Development</li>
                      <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React.js, Next.js</li>
                      <li><strong>Backend:</strong> Node.js, Express.js, REST APIs, JWT Authentication</li>
                      <li><strong>Database:</strong> MongoDB, SQL / MySQL</li>
                      <li><strong>DevOps & Tools:</strong> Git, GitHub, Postman, Stripe, Render, Vercel, Google Cloud</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* About End */}
          {/* Education Start */}
          <div className="education" id="education">
            <div className="content-inner">
              <div className="content-header">
                <h2>Education</h2>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="edu-col">
                    <h3>Master of Computer Applications (MCA)</h3>
                    <p>
                      SGVU, Jaipur, Rajasthan.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="edu-col">
                    <h3>Mern Stack Development Diploma Course</h3>
                    <p>
                      DAAC, Jaipur, Rajasthan.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="edu-col">
                    <h3>Bachelor Degree</h3>
                    <p>
                      SKN University, Jobner,Jaipur
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="edu-col">
                    <h3>Senior Secondary Education</h3>
                    <p>
                      Bhagasara Bal Mandir, Jobner, Jaipur(Board of Secondary Education Rajasthan).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Education End */}
          {/* Experience Start */}
          <div className="experience" id="experience">
            <div className="content-inner">
              <div className="content-header">
                <h2>Experience</h2>
              </div>
              <div className="row align-items-center">
                <div className="col-md-12">
                  <div className="exp-col">
                    <span>
                      June 2025 <i>to</i> Present
                    </span>
                    <h3>Doomshell Softwares Pvt Ltd</h3>
                    <h4>Jaipur, Rajasthan</h4>
                    <h5>MERN Stack Developer Intern</h5>
                    <p>
                      Developed and deployed full-stack web applications using MongoDB, Express.js,
                      React.js, and Node.js (MERN stack), improving performance and maintainability.
                      Delivered 2 live projects (<strong>EduVertas</strong>, <strong>DryMate</strong>)
                      with secure authentication, RESTful APIs, and responsive UI, achieving 20% faster
                      user onboarding. Collaborated in Agile teams (sprint planning, stand-ups,
                      iterative releases) and reduced development cycle time by 15%. Supported
                      code reviews, debugging, and feature enhancements to ensure clean, scalable,
                      high-quality code.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Experience End */}
          {/* Portfolio Start */}
          <div className="portfolio" id="portfolio">
            <div className="content-inner">
              <div className="content-header">
                <h2>Portfolio</h2>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <ul id="portfolio-flters">
                    <li data-filter="*" className="filter-active">
                      All
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row portfolio-container">
                <div className="col-lg-4 col-md-6 portfolio-item dig-mar">
                  <div className="portfolio-wrap">
                    <figure>
                      <img src="img/portfolio-6.jpg" className="img-fluid" alt="" />
                      <a
                        href="img/portfolio-6.jpg"
                        className="link-preview"
                        data-lightbox="portfolio"
                        data-title="NGO"
                        title="Preview"
                      >
                        <i className="fa fa-eye" />
                      </a>
                      <a href="https://eduv-react.vercel.app/" className="link-details" title="More Details">
                        <i className="fa fa-link" />
                      </a>
                      <a className="portfolio-title" href="https://eduv-react.vercel.app/">
                        EduVertas <span>Learning Management Platform</span>
                      </a>
                    </figure>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item web-dev">
                  <div className="portfolio-wrap">
                    <figure>
                      <img src="img/portfolio-4.jpg" className="img-fluid" alt="" />
                      <a
                        href="img/portfolio-4.jpg"
                        className="link-preview"
                        data-lightbox="portfolio"
                        data-title="DryMate"
                        title="Preview"
                      >
                        <i className="fa fa-eye" />
                      </a>
                      <a href="https://www.drymatemushrooms.in" className="link-details" title="More Details">
                        <i className="fa fa-link" />
                      </a>
                      <a className="portfolio-title" href="https://www.drymatemushrooms.in">
                        DryMate <span>Organic Mushroom Farming Traiing and Products </span>
                      </a>
                    </figure>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item web-des">
                  <div className="portfolio-wrap">
                    <figure>
                      <img src="img/portfolio-1.jpg" className="img-fluid" alt="" />
                      <a
                        href="img/portfolio-1.jpg"
                        data-lightbox="portfolio"
                        data-title="GymStar"
                        className="link-preview"
                        title="Preview"
                      >
                        <i className="fa fa-eye" />
                      </a>
                      <a href="https://gym-star-master-nu.vercel.app" className="link-details" title="More Details">
                        <i className="fa fa-link" />
                      </a>
                      <a className="portfolio-title" href="https://gym-star-master-nu.vercel.app">
                        GymStar <span>Get Gym Membership Plan</span>
                      </a>
                    </figure>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item dig-mar">
                  <div className="portfolio-wrap">
                    <figure>
                      <img src="img/portfolio-5.jpg" className="img-fluid" alt="" />
                      <a
                        href="img/portfolio-5.jpg"
                        className="link-preview"
                        data-lightbox="portfolio"
                        data-title="E shop"
                        title="Preview"
                      >
                        <i className="fa fa-eye" />
                      </a>
                      <a href="https://e-shop-master-khaki.vercel.app" className="link-details" title="More Details">
                        <i className="fa fa-link" />
                      </a>
                      <a className="portfolio-title" href="https://e-shop-master-khaki.vercel.app">
                        E shop <span>Online Shoping</span>
                      </a>
                    </figure>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item web-des">
                  <div className="portfolio-wrap">
                    <figure>
                      <img src="img/portfolio-2.jpg" className="img-fluid" alt="" />
                      <a
                        href="img/portfolio-2.jpg"
                        className="link-preview"
                        data-lightbox="portfolio"
                        data-title="My Bus"
                        title="Preview"
                      >
                        <i className="fa fa-eye" />
                      </a>
                      <a href="https://my-bus-master.vercel.app" className="link-details" title="More Details">
                        <i className="fa fa-link" />
                      </a>
                      <a className="portfolio-title" href="https://my-bus-master.vercel.app">
                        My Bus <span>Book Online Bus Ticket</span>
                      </a>
                    </figure>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item web-dev">
                  <div className="portfolio-wrap">
                    <figure>
                      <img src="img/portfolio-3.jpg" className="img-fluid" alt="" />
                      <a
                        href="img/portfolio-3.jpg"
                        className="link-preview"
                        data-lightbox="portfolio"
                        data-title="Building Construction"
                        title="Preview"
                      >
                        <i className="fa fa-eye" />
                      </a>
                      <a href="https://building-construction-rho.vercel.app/" className="link-details" title="More Details">
                        <i className="fa fa-link" />
                      </a>
                      <a className="portfolio-title" href="https://building-construction-rho.vercel.app/">
                        Building Construction <span>Web Development</span>
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Portfolio Start */}
          {/* Contact Start */}
          <div className="contact" id="contact">
            <div className="content-inner">
              <div className="content-header">
                <h2>Contact</h2>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="contact-info">
                    <p>
                      <i className="fa fa-user" />
                      Deepak Kumawat
                    </p>
                    <p>
                      <i className="fa fa-tag" />
                      Mern Stack Developer
                    </p>
                    <p>
                      <i className="fa fa-envelope" />
                      <a href="mailto:deepakkumawat1751@gmail.com">deepakkumawat1751@gmail.com</a>
                    </p>
                    <p>
                      <i className="fa fa-phone" />
                      <a href="tel:7727880048">+91 7727880048</a>
                    </p>
                    <p>
                      <i className="fa fa-map-marker" />
                      Jobner, Jaipur, Rajasthan(303328)
                    </p>
                    <div className="social">
                      <a className="btn" href="https://www.facebook.com/share/14GpMwh9n3v/?mibextid=wwXIfr">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn" href="https://www.linkedin.com/in/deepak-kumawat-a96831362?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a className="btn" href="https://www.instagram.com/deepakkumawat8800?igsh=ems4N2R0Z2l0dmJ0&utm_source=qr">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form">
                    {alert.message && (
                      <div className={`alert ${alert.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
                        {alert.message}
                      </div>
                    )}
                    <form onSubmit={handleSubmit}>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <input
                            name="name"
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            name="email"
                            type="email"
                            className="form-control"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          name="subject"
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          rows={5}
                          placeholder="Message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <button className="btn" type="submit" disabled={loading}>
                          {loading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2"></span> Sending...
                            </>
                          ) : (
                            'Send Message'
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact End */}
          {/* Footer Start */}
          <div className="footer">
            <div className="content-inner">
              <div className="row align-items-center">
                <div className="col-md-6">
                </div>
                <div className="col-md-6">
                </div>
              </div>
            </div>
          </div>
          {/* Footer Start */}
        </div>
      </div>
    </>
  );
};