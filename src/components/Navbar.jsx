import { NavLink } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <NavLink to="/" className="navbar-logo">
          <FaLeaf className="logo-icon" />
          <h1>EcoWave</h1>
        </NavLink>

        {/* Links */}
        <ul className="navbar-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/facts"
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
            >
              Facts
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/effects"
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
            >
              Effects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/alternatives"
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
            >
              Alternatives
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/take-action"
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
            >
              Take Action
            </NavLink>
          </li>
        </ul>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* CTA */}
        <NavLink to="/join" className="navbar-btn">
          Join Movement
        </NavLink>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <NavLink to="/" className="mobile-link" onClick={()=>setMenuOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/facts" className="mobile-link" onClick={()=>setMenuOpen(false)}>
            Facts
          </NavLink>

          <NavLink to="/effects" className="mobile-link" onClick={()=>setMenuOpen(false)}>
            Effects
          </NavLink>

          <NavLink to="/alternatives" className="mobile-link" onClick={()=>setMenuOpen(false)}>
            Alternatives
          </NavLink>

          <NavLink to="/take-action" className="mobile-link" onClick={()=>setMenuOpen(false)}>
            Take Action
          </NavLink>

          <NavLink to="/join" className="mobile-cta" onClick={()=>setMenuOpen(false)}>
            Join Movement
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
