import {
  FaRecycle,
  FaBullhorn,
  FaLeaf,
} from "react-icons/fa";

const TakeAction = () => {
  return (
    <section className="take-action">

      <div className="take-action-container">

        <div className="take-action-header">

          <span className="action-badge">
            Make An Impact
          </span>

          <h1 className="take-action-title">
            Take Action Today
          </h1>

          <p className="take-action-subtitle">
            Positive change begins with everyday decisions.
            Small actions, repeated consistently, create lasting impact.
          </p>

        </div>

        <div className="action-grid">

          <div className="action-card">

            <div className="action-icon">
              <FaRecycle />
            </div>

            <h3>Reduce Plastic Use</h3>

            <p>
              Start by avoiding single-use plastics and choosing reusable
              products whenever possible.
            </p>

          </div>

          <div className="action-card">

            <div className="action-icon">
              <FaBullhorn />
            </div>

            <h3>Spread Awareness</h3>

            <p>
              Share information with friends, family and your community.
              Awareness inspires action.
            </p>

          </div>

          <div className="action-card">

            <div className="action-icon">
              <FaLeaf />
            </div>

            <h3>Adopt Eco Habits</h3>

            <p>
              Support sustainable alternatives and make environmentally
              conscious choices part of your routine.
            </p>

          </div>

        </div>

        <div className="commitment-box">

          <h2>
            Be The Change 🌱
          </h2>

          <p>
            Every bottle refused, every reusable bag carried and every
            conversation shared contributes to a cleaner future.
          </p>

          <div className="share-text">
            Share this project and inspire someone else to take the first step.
          </div>

        </div>

      </div>

    </section>
  );
};

export default TakeAction;