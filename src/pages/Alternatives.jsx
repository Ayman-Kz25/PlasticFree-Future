const Alternatives = () => {
  return (
    <section className="alternatives">

      <div className="alternatives-container">

        <h1 className="alternatives-title">
          Eco-Friendly Alternatives
        </h1>

        <p className="alternatives-subtitle">
          Small lifestyle changes can significantly reduce plastic pollution.
        </p>

        <div className="alternatives-grid">

          <div className="alt-card">
            <h3>Reusable Water Bottles</h3>
            <p>
              Replace single-use plastic bottles with durable reusable ones to reduce waste daily.
            </p>
          </div>

          <div className="alt-card">
            <h3>Cloth Shopping Bags</h3>
            <p>
              Use cloth or jute bags instead of plastic bags while shopping.
            </p>
          </div>

          <div className="alt-card">
            <h3>Bamboo / Metal Straws</h3>
            <p>
              Switch to reusable straws made of bamboo or metal instead of plastic ones.
            </p>
          </div>

          <div className="alt-card">
            <h3>Refillable Containers</h3>
            <p>
              Choose refillable containers for food storage and daily use items.
            </p>
          </div>

          <div className="alt-card">
            <h3>Say No to Single-Use Plastic</h3>
            <p>
              Avoid items like plastic cutlery, cups, and packaging whenever possible.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Alternatives;