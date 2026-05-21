import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";

function Services() {
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

  const services = [
    {
      title: "General Check-ups & Preventive Care",
      image: "/images/gallery/gallery3.jpg",
      icon: "fas fa-user-doctor",
      description:
        "Our general consultation and preventive care services focus on maintaining your overall health through routine medical examinations, early diagnosis, health screenings, blood pressure monitoring, lifestyle assessments, and wellness planning. We aim to identify potential health concerns before they become serious conditions.",
      details: [
        "Routine medical examinations",
        "Blood pressure & diabetes screening",
        "Health risk assessments",
        "Preventive treatment plans",
        "Nutrition & lifestyle guidance",
      ],
    },
    {
      title: "Pediatric Care",
      image: "/images/doctoon.png",
      icon: "fas fa-baby",
      description:
        "We provide compassionate healthcare services for infants, children, and adolescents. Our pediatric specialists ensure children receive proper developmental assessments, vaccinations, nutritional advice, and treatment for common childhood illnesses.",
      details: [
        "Child wellness check-ups",
        "Growth & development monitoring",
        "Vaccinations & immunizations",
        "Treatment for childhood illnesses",
        "Nutrition counseling for children",
      ],
    },
    {
      title: "Women's Health Services",
      image: "/images/gallery/gallery6.jpg",
      icon: "fas fa-heart",
      description:
        "Our women’s healthcare department provides comprehensive medical services focused on reproductive health, prenatal care, family planning, routine screenings, and general wellness for women of all ages.",
      details: [
        "Prenatal & postnatal care",
        "Family planning services",
        "Routine gynecological exams",
        "Breast & cervical cancer screening",
        "Hormonal health consultations",
      ],
    },
    {
      title: "Chronic Disease Management",
      image: "/images/gallery/gallery5.jpg",
      icon: "fas fa-notes-medical",
      description:
        "We help patients manage chronic medical conditions such as diabetes, hypertension, asthma, and heart disease through regular monitoring, medication management, and personalized healthcare plans.",
      details: [
        "Diabetes management",
        "Hypertension monitoring",
        "Asthma treatment plans",
        "Medication reviews",
        "Long-term patient monitoring",
      ],
    },
    {
      title: "Immunizations & Vaccinations",
      image: "/images/gallery/gallery8.jpg",
      icon: "fas fa-syringe",
      description:
        "Our vaccination services help protect individuals and families against preventable diseases. We provide routine childhood vaccines, travel vaccines, seasonal flu shots, and adult immunizations.",
      details: [
        "Routine childhood immunizations",
        "Travel vaccinations",
        "Flu & seasonal vaccines",
        "COVID-19 vaccinations",
        "Adult booster shots",
      ],
    },
    {
      title: "Minor Surgical Procedures",
      image: "/images/gallery/gallery7.jpg",
      icon: "fas fa-user-nurse",
      description:
        "Our medical professionals perform safe and efficient outpatient surgical procedures using modern equipment and strict safety protocols in a comfortable environment.",
      details: [
        "Wound cleaning & stitching",
        "Abscess drainage",
        "Minor skin procedures",
        "Removal of small growths",
        "Post-surgical care",
      ],
    },
    {
      title: "Laboratory Services",
      image: "/images/gallery/gallery2.jpg",
      icon: "fas fa-flask",
      description:
        "Our in-house laboratory provides accurate and timely diagnostic testing services to support medical diagnosis and treatment planning.",
      details: [
        "Blood testing",
        "Urine analysis",
        "Diagnostic screenings",
        "Rapid test services",
        "Medical report generation",
      ],
    },
    {
      title: "Health Education & Counseling",
      image: "/images/gallery/gallery1.jpg",
      icon: "fas fa-comments",
      description:
        "We empower patients through health education, wellness counseling, mental health support, and lifestyle guidance to improve quality of life and promote healthier communities.",
      details: [
        "Mental health counseling",
        "Nutrition & wellness education",
        "Lifestyle disease prevention",
        "Stress management support",
        "Patient awareness programs",
      ],
    },
  ];

  return (
    <div className="services-page">
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
              <Link to="/services">
                <i className="fas fa-stethoscope"></i> Services
              </Link>
            </li>

            <li>
              <Link to="/about">
                <i className="fa-solid fa-users"></i> About Us
              </Link>
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
        <button className="close-btn" onClick={toggleSidebar}>
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
            <Link to="/about" onClick={toggleSidebar}>
              <i className="fas fa-users"></i> About Us
            </Link>
          </li>

          <li>
            <a href="#location" onClick={toggleSidebar}>
              <i className="fas fa-map-marker-alt"></i> Location
            </a>
          </li>
        </ul>
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

      {/* Services Hero */}
      <section className="services-hero">
        <div className="services-hero-overlay">
          <h1>Our Medical Services</h1>

          <p>
            Summer Medical Center provides professional, compassionate,
            and affordable healthcare services focused on improving
            the health and well-being of our patients and community.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>

            <div className="service-content">
              <div className="service-title">
                <i className={service.icon}></i>
                <h2>{service.title}</h2>
              </div>

              <p>{service.description}</p>

              <ul>
                {service.details.map((detail, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check-circle"></i>
                    {detail}
                  </li>
                ))}
              </ul>

              <button
                className="service-btn"
                onClick={handleBookAppointment}
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Back Home */}
      <div className="back-home">
        <Link to="/" className="back-link">
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
      </div>

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

export default Services;