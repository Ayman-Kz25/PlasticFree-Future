import { NavLink } from "react-router-dom";
import { FaRecycle } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
        <div className="navbar-logo">
          <FaRecycle className="logo-icon" />
          <h1>PlasticFree Future</h1>
        </div>

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

        {/* CTA */}
        <NavLink to="/join" className="navbar-btn">
          Join Movement
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
