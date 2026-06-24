import { NavLink } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home">

      <div className="home-container">

        <div className="home-content">

          <span className="home-badge">
            <FaLeaf />
            Protect Our Planet
          </span>

          <h1 className="home-title">
            Plastic Pollution Awareness
          </h1>

          <p className="home-subtitle">
            Small actions create big environmental impact.
            Together we can reduce plastic waste, protect wildlife
            and create a cleaner future for generations to come.
          </p>

          <div className="home-buttons">

            <NavLink
              to="/facts"
              className="home-btn primary"
            >
              Explore Facts
            </NavLink>

            <NavLink
              to="/take-action"
              className="home-btn secondary"
            >
              Take Action
            </NavLink>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Home;