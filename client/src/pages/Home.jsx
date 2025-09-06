import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [banners, setBanners] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Load banners from /public/images/banners
  useEffect(() => {
    setBanners([
      "/images/banners/banner1.jpg",
      "/images/banners/banner2.jpg",
      "/images/banners/banner3.jpg",
      "/images/banners/banner4.jpg",
      "/images/banners/banner5.jpg",
      "/images/banners/banner6.jpg",
    ]);
  }, []);

  // Auto-slide every 5s
  useEffect(() => {
    if (!banners.length) return;
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, [banners]);

  // Load gallery from /public/images/gallery
  useEffect(() => {
    setGallery([
      { src: "/images/gallery/gallery1.jpg", desc: "Front view of Summer Medical Centre." },
      { src: "/images/gallery/gallery2.jpg", desc: "State of the art medical laboratory with advanced diagnostic equipments." },
      { src: "/images/gallery/gallery3.jpg", desc: "Professional doctor checking patient's blood pressure for accurate diagnosis and care." },
      { src: "/images/gallery/gallery4.jpg", desc: "Modern X-ray machine setup for accurate imaging and diagnostics." },
      { src: "/images/gallery/gallery5.jpg", desc: "Advanced patient monitoring and life support ensuring accurate diagnosis and safe treatment." },
      { src: "/images/gallery/gallery6.jpg", desc: "Ear, Nose and Throat check ups available" },
      { src: "/images/gallery/gallery7.jpg", desc: "Comfortable hospital bed equipped with essential medical facilities to ensure patient safety and proper recovery." },
      { src: "/images/gallery/gallery8.jpg", desc: "Our modern laboratory is fully equipped for accurat diagnostic testing, including blood analysis, imaging and health screening to support timely medical care." },
    ]);
  }, []);

  const restartTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
  };

  const nextSlide = () => {
    if (!banners.length) return;
    setCurrentIndex((prev) => (prev + 1) % banners.length);
    restartTimer();
  };

  const prevSlide = () => {
    if (!banners.length) return;
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
    restartTimer();
  };

  const handleBookAppointment = () => setShowAlert(true);
  const closeAlert = () => setShowAlert(false);

  return (
    <div className="page">
      {/* Header */}
      <div className="header">
        <div className="logo">
          <img src="/images/logo.jpg" alt="logos" />
          <h1>Summer Medical Center</h1>
        </div>
        <nav className="page-nav">
          <ul>
            <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
            <li><a href="#services"><i className="fas fa-stethoscope"></i> Services</a></li>
            <li><a href="#aboutus"><i className="fa-solid fa-users"></i> About Us</a></li>
            <li><a onClick={handleBookAppointment}><i className="fas fa-envelope"></i> Contact</a></li>
          </ul>
        </nav>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          <i className="fas fa-times"></i>
        </button>
        <h2 style={{ marginBottom: "50px" }}>Welcome To Summer Medical Center</h2>
        <ul>
          <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
          <li><a href="#services"><i className="fas fa-stethoscope"></i> Services</a></li>
          <li><a href="#aboutus"><i className="fas fa-users"></i> About Us</a></li>
          <li><a href="#location"><i className="fas fa-map-marker-alt"></i> Location</a></li>
        </ul>
      </div>

      {/* Top Nav Bar */}
      <div className="navBar">
        <div className="searchBar">
          <input
            type="text"
            id="search"
            placeholder="Search by condition, treatment, speciality or doctor's name"
          />
          <button type="submit"><i className="fas fa-search"></i> Search</button>
        </div>
        <div className="headlogo">
          <h2 style={{ color: "white" }}>Welcome Guest</h2>
        </div>
        <div className="hamburger" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
        </div>
      </div>

      {/* Contact Info */}
      <div className="contact-info">
        <div className="emailContact">
          <a href="mailto:summermedicalcentre@gmail.com"><i className="fas fa-envelope"></i> summermedicalcentre@gmail.com</a>
          <a href="tel:+254722491930"><i className="fas fa-phone"></i> (+254) 722 491 930 / (+254) 745 295 680</a>
          <a href="#location"><p style={{ cursor: "pointer" }}>Location: Ruiru</p></a>
        </div>
        <div className="contactIcons">
          <p>Contact Us :| </p>
          <div className="icons">
            <Link to="https://facebook.com"><i className="fab fa-facebook"></i></Link>
            <Link to="https://x.com"><i className="fab fa-x-twitter"></i></Link>
            <Link to="https://instagram.com"><i className="fab fa-instagram"></i></Link>
            <Link to="https://linkedin.com"><i className="fab fa-linkedin"></i></Link>
            <Link to="https://whatsapp.com"><i className="fab fa-whatsapp"></i></Link>
            <Link to="https://telegram.com"><i className="fab fa-telegram"></i></Link>
          </div>
        </div>
      </div>

      <div className="body-page">
        {/* Banner Carousel */}
        <div className="banner-carousel">
          {banners.length > 0 ? (
            <>
              <button
                type="button"
                className="carousel-btn left"
                aria-label="Previous banner"
                onClick={prevSlide}
              >
                ❮
              </button>

              <div
                className="banner-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {banners.map((src, idx) => (
                  <div className="banner-item" key={idx}>
                    <img src={src} alt={`banner-${idx + 1}`} />
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="carousel-btn right"
                aria-label="Next banner"
                onClick={nextSlide}
              >
                ❯
              </button>
            </>
          ) : (
            <div className="banner-placeholder">No banners available</div>
          )}
        </div>

        <div className="main-content">
          <div className="first-div">
            <section className="section1">
              <h2>Trusted Healthcare Provider</h2>
              <h3>COMPREHENSIVE HOME-BASED MEDICAL CARE</h3>
              <p>
                Modern healthcare institution dedicated to delivering compassionate,
                comprehensive, and affordable medical services to the community.
                Guided by a vision of holistic wellness, the hospital combines advanced
                technology with a patient-centered approach, ensuring every individual
                receives personalized attention.
              </p>
              <img src="/images/doctors.jpg" alt="doctors" />
              <h2>We Are Here For You</h2>
              <p>
                From primary care and emergency services to specialized treatment in
                pediatrics, internal medicine, and expert diagnosis, Summer Medical
                Center serves as a trusted partner in health. With a team of skilled
                doctors, nurses, and support staff, the center strives to create a
                welcoming environment where healing, innovation, and care come together.
              </p>
              <img src="/images/hereforyou.jpg" alt="here for you" />
            </section>

            <section className="services" id="services">
              <h3>We Offer a Variety of Medical Services</h3>
              <img src="/images/doctoon.png" alt="Doctor illustration" className="services-img" />

              <div className="services-grid">
                {/* Laboratory Tests */}
                <div className="service-category">
                  <h4>Laboratory Tests</h4>
                  <ul>
                    <li><strong>Routine:</strong> Basic health screening tests.</li>
                    <li><strong>Microbiology:</strong> Detection of bacterial, viral, and fungal infections.</li>
                    <li><strong>Haematology:</strong> Blood-related tests including complete blood counts.</li>
                    <li><strong>Biochemistry:</strong> Liver, kidney, and metabolic function tests.</li>
                    <li><strong>Immunoassay:</strong> Hormone levels, infection markers, and immune system tests.</li>
                  </ul>
                </div>

                {/* X-Ray Services */}
                <div className="service-category">
                  <h4>X-Ray Services</h4>
                  <ul>
                    <li><strong>General Body Part X-rays:</strong> Imaging for bones and soft tissues.</li>
                    <li><strong>H.S.G:</strong> Specialized X-ray for reproductive health.</li>
                    <li><strong>Barium Meal:</strong> Gastrointestinal tract imaging.</li>
                    <li><strong>Shielded X-ray:</strong> Radiation-safe imaging for sensitive areas.</li>
                    <li><strong>Dental X-ray:</strong> Imaging for teeth and jaw assessment.</li>
                  </ul>
                </div>

                {/* Ultrasound Scan Services */}
                <div className="service-category">
                  <h4>Ultrasound Scan Services</h4>
                  <ul>
                    <li><strong>General Scan:</strong> Routine ultrasound for overall health.</li>
                    <li><strong>Obstetric Scan:</strong> Monitoring pregnancy and fetal development.</li>
                    <li><strong>TVS:</strong> Transvaginal scans for reproductive health.</li>
                    <li><strong>Regional Scan:</strong> Imaging of specific body regions.</li>
                    <li><strong>Organ Scan:</strong> Detailed scan of individual organs.</li>
                    <li><strong>Biopsy Guidance:</strong> Ultrasound-assisted tissue sampling.</li>
                    <li><strong>Colour Doppler:</strong> Blood flow assessment.</li>
                    <li><strong>E.C.G:</strong> Heart electrical activity recording.</li>
                    <li><strong>Echo:</strong> Ultrasound of the heart (echocardiogram).</li>
                    <li><strong>Plastering:</strong> Orthopedic plaster and immobilization services.</li>
                  </ul>
                </div>

                {/* Medical Clinic Services */}
                <div className="service-category">
                  <h4>Medical Clinic Services</h4>
                  <ul>
                    <li><strong>Out Patient:</strong> General consultations and treatment.</li>
                    <li><strong>Examination, Diagnosis, Treatment:</strong> Comprehensive patient care.</li>
                    <li><strong>General & Minor Surgery:</strong> Safe surgical procedures for common conditions.</li>
                    <li><strong>Chronic Disease Management:</strong> Long-term care and follow-up for conditions like diabetes and hypertension.</li>
                    <li><strong>Counselling:</strong> Support for mental, emotional, and lifestyle issues.</li>
                    <li><strong>Nutrition & Dietetics:</strong> Dietary guidance for healthy living.</li>
                    <li><strong>Obstetrics & Gynecology:</strong> Women’s health, fertility, and maternal care.</li>
                    <li><strong>Youth Friendly Services:</strong> Care tailored for young people.</li>
                    <li><strong>Mother & Child Clinic:</strong> Comprehensive care for mothers and children.</li>
                    <li><strong>ANC (Antenatal Care):</strong> Regular checkups for pregnant mothers.</li>
                    <li><strong>Pain Management:</strong> Treatment and control of acute or chronic pain.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="aboutus" id="aboutus">
            <h1>Why You Should Choose Us</h1>
            <div className="medal-icons">
              <i className="fas fa-certificate"></i>
              <i className="fas fa-award"></i>
              <i className="fas fa-shield-alt"></i>
            </div>
            <p
              style={{
                color: "rgba(0, 0, 0, 0.1)",
                fontSize: "1.6em",
                marginBottom: "30px",
                padding: "20px",
              }}
            >
              At <strong>Summer Medical Center</strong>, we are committed to providing
              exceptional healthcare services with a focus on patient safety, trust,
              and compassion. Our team of qualified professionals is dedicated to
              serving our community with modern facilities, personalized care,
              and a strong commitment to your well-being.
              Your health and satisfaction remain our top priority.
            </p>

            <section className="gallery">
              {gallery.length > 0 ? (
                gallery.map((item, idx) => (
                  <div key={idx} className="gallery-item">
                    <img src={item.src} alt={`Gallery ${idx + 1}`} />
                    <p className="gallery-desc">{item.desc}</p>
                  </div>
                ))
              ) : (
                <p>No gallery images available.</p>
              )}
            </section>
          </div>

          <div className="second-div">
            <div className="info-task">
              <h2>Our Services</h2>
              <a href="#location" style={{ textDecoration: "none" }}><p style={{ color: "white", fontSize: "1.3em" }}>Located in Ruiru</p></a>
              <p
                style={{
                  marginTop: "20px",
                  fontSize: "1.3em",
                  marginBottom: "10px",
                }}
              >
                <b>Clinic Open Hours</b>
              </p>
              <ul>
                <li style={{ marginLeft: "20px" }}><i className="fas fa-clock" style={{ marginRight: "10px" }}></i> Open 24 Hours</li>
              </ul>
              <p
                style={{
                  marginTop: "20px",
                  fontSize: "1.3em",
                  marginBottom: "10px",
                }}
              >
                <b>Services</b>
              </p>
              <ul>
                <li>Consultations</li>
                <li>Pediatrics</li>
                <li>Obstetrics & Gynecology</li>
                <li>Dental Services</li>
                <li>Dermatology</li>
                <li>ENT (Ear, Nose, Throat)</li>
                <li>Laboratory & Diagnostics</li>
                <li>Pharmacy Services</li>
              </ul>
            </div>
          </div>
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

export default Home;
