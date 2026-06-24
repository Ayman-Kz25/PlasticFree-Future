import { NavLink } from "react-router-dom";
import { FaRecycle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo + Text */}
        <div className="footer-brand">
          <div className="footer-logo">
            <FaRecycle className="footer-icon" />
            <h2>EcoWave</h2>
          </div>

          <p>
            Protecting the planet from plastic pollution through awareness and action.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/facts">Facts</NavLink>
          <NavLink to="/effects">Effects</NavLink>
          <NavLink to="/alternatives">Alternatives</NavLink>
          <NavLink to="/take-action">Take Action</NavLink>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} EcoWave. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;