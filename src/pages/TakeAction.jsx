const TakeAction = () => {
  return (
    <section className="take-action">

      <div className="take-action-container">

        <h1 className="take-action-title">
          Take Action Today
        </h1>

        <p className="take-action-subtitle">
          Change starts with small actions. Your choices matter more than you think.
        </p>

        <div className="action-grid">

          <div className="action-card">
            <h3>Reduce Plastic Use</h3>
            <p>
              Start by avoiding single-use plastics in your daily routine.
            </p>
          </div>

          <div className="action-card">
            <h3>Spread Awareness</h3>
            <p>
              Share knowledge with friends, family, and social media platforms.
            </p>
          </div>

          <div className="action-card">
            <h3>Adopt Eco Habits</h3>
            <p>
              Use reusable products and support sustainable alternatives.
            </p>
          </div>

        </div>

        {/* Commitment Section */}
        <div className="commitment-box">

          <h2>Be the Change 🌱</h2>

          <p>
            Every small step contributes to a cleaner and healthier planet.
            Your actions inspire others to do the same.
          </p>

          <div className="share-text">
            <p>
              Share this project with others and help spread awareness 🌍
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default TakeAction;