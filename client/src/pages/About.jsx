import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";

function About() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [showNavBar, setShowNavBar] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const isMobile = window.innerWidth <= 768;

      if (currentScrollY > lastScrollY) {
        // SCROLLING DOWN

        setShowHeader(false);

        if (!isMobile) {
          setShowNavBar(true);
        } else {
          setShowNavBar(false);
        }

      } else {
        // SCROLLING UP

        if (!isMobile) {
          setShowHeader(true);
          setShowNavBar(false);
        } else {
          setShowHeader(false);
          setShowNavBar(true);
        }
      }

      // TOP OF PAGE
      if (currentScrollY <= 10) {
        setShowHeader(true);
        setShowNavBar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleBookAppointment = () => setShowAlert(true);
  const closeAlert = () => setShowAlert(false);

  return (
    <div className="about-page">
      {/* Header */}
      <div className={`header ${showHeader ? "show-header" : "hide-header"}`}>
        <div className="logo">
          <img src="/images/logo.jpg" alt="logos" />
          <h1>Summer Medical Center</h1>
        </div>

        <nav className="page-nav">
          <ul>
            <li>
              <Link to="/">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>

            <li>
              <a href="#services">
                <i className="fas fa-stethoscope"></i> Services
              </a>
            </li>

            <li>
              <a href="#aboutus">
                <i className="fa-solid fa-users"></i> About Us
              </a>
            </li>

            <li>
              <a href="#contact" onClick={handleBookAppointment}>
                <i className="fas fa-envelope"></i> Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => {
          toggleSidebar();
          setShowNavBar(true);
          setShowHeader(true);
        }}>
          <i className="fas fa-times"></i>
        </button>

        <h2 style={{ marginBottom: "50px" }}>
          Welcome To Summer Medical Center
        </h2>

        <ul>
          <li>
            <Link to="/" onClick={toggleSidebar}>
              <i className="fas fa-home"></i> Home
            </Link>
          </li>

          <li>
            <Link to="/services" onClick={toggleSidebar}>
              <i className="fas fa-stethoscope"></i> Services
            </Link>
          </li>

          <li>
            <a href="#aboutus" onClick={toggleSidebar}>
              <i className="fas fa-users"></i> About Us
            </a>
          </li>

          <li>
            <a href="#location" onClick={toggleSidebar}>
              <i className="fas fa-map-marker-alt"></i> Location
            </a>
          </li>
        </ul>
        <p style={{ position: "fixed", bottom: "10px", width: "250px", textAlign: "center" }}>&copy; 2023 Summer Medical Center. All rights reserved.</p>
      </div>

      {/* NavBar */}
      <div
        className={`navBar 
          ${showNavBar ? "show-nav" : "hide-nav"}
          ${showHeader ? "nav-with-header" : "nav-no-header"}
        `}
      >
        <div className="searchBar">
          <input
            type="text"
            id="search"
            placeholder="Search by condition, treatment, speciality or doctor's name"
          />

          <button type="submit">
            <i className="fas fa-search"></i> Search
          </button>
        </div>

        <div className="headlogo">
          <h2 style={{ color: "white" }}>Welcome Guest</h2>
        </div>

        <div
          className="hamburger"
          onClick={() => {
            toggleSidebar();
            setShowNavBar(false);
            setShowHeader(false);
          }}
        >
          <i className="fas fa-bars"></i>
        </div>
      </div>

      {/* Contact */}
      <div className="contact-info">
        <div className="emailContact">
          <a href="mailto:summermedicalcentre@gmail.com">
            <i className="fas fa-envelope"></i>
            summermedicalcentre@gmail.com
          </a>

          <a href="tel:+254722491930">
            <i className="fas fa-phone"></i>
            (+254) 722 491 930 / (+254) 745 295 680
          </a>

          <a href="#location">
            <p style={{ cursor: "pointer" }}>Location: Ruiru</p>
          </a>
        </div>

        <div className="contactIcons">
          <p>Contact Us :| </p>

          <div className="icons">
            <Link to="https://facebook.com">
              <i className="fab fa-facebook"></i>
            </Link>

            <Link to="https://x.com">
              <i className="fab fa-x-twitter"></i>
            </Link>

            <Link to="https://instagram.com">
              <i className="fab fa-instagram"></i>
            </Link>

            <Link to="https://linkedin.com">
              <i className="fab fa-linkedin"></i>
            </Link>

            <Link to="https://whatsapp.com">
              <i className="fab fa-whatsapp"></i>
            </Link>

            <Link to="https://telegram.com">
              <i className="fab fa-telegram"></i>
            </Link>
          </div>
        </div>
      </div>

      <section className="services-hero" id="location">
        <div className="services-hero-overlay">
          <h2>Our Location</h2>
          <p>
            We are located in Ruiru, just a short drive from Nairobi. Our address is
            123 Main Street, Ruiru, Kenya. We are easily accessible by car and public
            transportation.
          </p>
        </div>
        <div className="map-container" id="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!3m2!1sen!2ske!4v1756502805350!5m2!1sen!2ske!6m8!1m7!1szrCLQ7l8GJQ7MGB2bXOs6g!2m2!1d-1.14653808299398!2d36.95801614763142!3f254.76088334796765!4f0.22908690545432364!5f0.7820865974627469"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Summer Medical Center Location"
          ></iframe>
        </div>
      </section>

      <div className="footer" id="footer">
        <div className="sub-foot1">
          <div className="footer-logo">
            <img src="/images/logo.jpg" alt="logos" />
            <h1>Summer Medical Center</h1>
          </div>
          <p>
            A Healthcare Institution dedicated to delivering compassionate,
            comprehensive, and affordable medical services to the community.
          </p>
        </div>

        <div className="links">
          <div className="menu-links">
            <h2>Menu Links</h2>
            <Link to="/"><i className="fas fa-home"></i> Home</Link>
            <a href="#services"><i className="fas fa-stethoscope"></i> Services</a>
            <a href="#aboutus"><i className="fa-solid fa-users"></i> About Us</a>
            <a href="#footer" style={{ border: "none" }}
              onClick={handleBookAppointment}
            >
              <i className="fas fa-envelope"></i> Contact
            </a>
          </div>
          <div className="quick-links">
            <h2>Quick Links</h2>
            <Link onClick={handleBookAppointment}>Appointment Booking</Link>
            <a href="#services">Other Services</a>
            <Link onClick={handleBookAppointment}>Talk to Our Agents</Link>
            <Link to="/" style={{ border: "none" }}>Privacy Policy</Link>
          </div>
          <div className="contact-us">
            <h2>Contact Us</h2>
            <div className="info">
              <i className="fa-solid fa-clock"></i>
              <p>Open Hours</p>
              <p>Mon-Sun: 24 hours</p>
            </div>
            <div className="info">
              <i className="fa-solid fa-phone"></i>
              <p>Tel: 0722 491 930</p>
              <p>Tel: 0745 295 680</p>
              <p>Email: summermedicalcentre@gmail.com</p>
            </div>
            <div className="info">
              <i className="fas fa-map-marker-alt"></i>
              <p>Location: Ruiru</p>
            </div>
          </div>
        </div>
      </div>

      <div className="floating-bubble help-bubble">
        <a
          href="https://wa.me/254745295680?"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>

      <div
        className="floating-bubble appointment-bubble"
        onClick={handleBookAppointment}
      >
        📅 Book an Appointment
      </div>

      {showAlert && (
        <div className="custom-alert-overlay">
          <div className="custom-alert-box">
            <p className="alert-title">Contact Us On</p>
            <p className="alert-phone">0722 491 930 <br /> or <br />0745 295 680</p>
            <button onClick={closeAlert} className="alert-close">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;