
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/main.css";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        {/* Main content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
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
