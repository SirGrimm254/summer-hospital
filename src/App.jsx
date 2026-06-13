import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import "./styles/main.css";

function App() {
  const SITE_DISABLED = true;

  if (SITE_DISABLED) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontFamily: "sans-serif",
          backgroundColor: "#0a0a0a",
          color: "#fff",
          padding: "20px",
        }}
      >
        <h1 style={{ fontSize: "3em", marginBottom: "10px" }}>404</h1>
        <h2 style={{ marginBottom: "20px" }}>Site Not Found</h2>
        <p style={{ maxWidth: "500px", color: "#aaa" }}>
          This site is currently unavailable. Please check back later.
        </p>
      </div>
    );
  }

  return (
    <Router>
      <div className="app-wrapper">
        <ScrollToTop />
        {/* Main content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} /> 
          </Routes>
        </div>

        {/* Universal footer */}
        <div className="universal-footer">
          <p>© {new Date().getFullYear()} Powered by Grimm — All Rights Reserved</p>
          <div className="footer-links">
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
      </div>
    </Router>
  );
}

export default App;
