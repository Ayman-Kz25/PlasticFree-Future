import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">

      <div className="home-container">

        <h1 className="home-title">
          Plastic Pollution Awareness
        </h1>

        <p className="home-subtitle">
          Small actions create big environmental impact.
          Together we can reduce plastic waste and protect our planet.
        </p>

        <div className="home-buttons">
          <NavLink to="/facts" className="home-btn primary">
            Explore Facts
          </NavLink>

          <NavLink to="/take-action" className="home-btn secondary">
            Take Action
          </NavLink>
        </div>
      </div>

    </section>
  );
};

export default Home;