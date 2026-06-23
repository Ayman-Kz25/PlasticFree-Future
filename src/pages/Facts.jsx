const Facts = () => {
  return (
    <section className="facts">

      <div className="facts-container">

        <h1 className="facts-title">
          Facts About Plastic Pollution
        </h1>

        <p className="facts-subtitle">
          Understanding the problem is the first step toward solving it.
        </p>

        <div className="facts-grid">

          <div className="fact-card">
            <h3>Fact 1</h3>
            <p>
              Plastic can take up to 400–1000 years to decompose.
            </p>
          </div>

          <div className="fact-card">
            <h3>Fact 2</h3>
            <p>
              Over 8 million tons of plastic enter oceans every year.
            </p>
          </div>

          <div className="fact-card">
            <h3>Fact 3</h3>
            <p>
              More than 700 marine species are affected by plastic pollution.
            </p>
          </div>

          <div className="fact-card">
            <h3>Fact 4</h3>
            <p>
              Humans consume microplastics through food and water.
            </p>
          </div>

          <div className="fact-card">
            <h3>Fact 5</h3>
            <p>
              Only 9% of plastic waste is actually recycled worldwide.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Facts;