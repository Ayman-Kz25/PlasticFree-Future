import {
  FaBottleWater,
  FaBagShopping,
  FaGlassWater,
  FaBox,
  FaUtensils,
} from "react-icons/fa6";

const alternatives = [
  {
    old: "Plastic Bottles",
    icon: <FaBottleWater />,
    replacement: "Reusable Water Bottles",
    result: "Less plastic waste every single day",
  },
  {
    old: "Plastic Bags",
    icon: <FaBagShopping />,
    replacement: "Cloth or Jute Bags",
    result: "Cleaner streets and healthier oceans",
  },
  {
    old: "Plastic Straws",
    icon: <FaGlassWater />,
    replacement: "Metal or Bamboo Straws",
    result: "Reduced single-use plastic consumption",
  },
  {
    old: "Disposable Containers",
    icon: <FaBox />,
    replacement: "Refillable Containers",
    result: "Lower household waste generation",
  },
  {
    old: "Plastic Cutlery",
    icon: <FaUtensils />,
    replacement: "Reusable Utensils",
    result: "A more sustainable daily lifestyle",
  },
];

const Alternatives = () => {
  return (
    <section className="alternatives">

      <div className="alternatives-container">

        <div className="alternatives-header">

          <span className="alternatives-badge">
            Better Choices
          </span>

          <h1 className="alternatives-title">
            Small Changes Today.
            A Cleaner Tomorrow.
          </h1>

          <p className="alternatives-subtitle">
            Sustainability doesn't always require major sacrifices.
            Sometimes the best solution is simply choosing a better alternative.
          </p>

        </div>

        <div className="alternatives-showcase">

          {alternatives.map((item, index) => (
            <div className="alternative-card" key={index}>

              <div className="old-choice">
                {item.old}
              </div>

              <div className="arrow">
                ↓
              </div>

              <div className="new-choice">

                <div className="alt-icon">
                  {item.icon}
                </div>

                <h3>{item.replacement}</h3>

              </div>

              <div className="result">
                🌱 {item.result}
              </div>

            </div>
          ))}

        </div>

        <div className="future-section">

          <h2>
            Every Sustainable Choice Shapes the Future
          </h2>

          <p>
            Cleaner oceans, healthier wildlife, safer ecosystems and a better
            planet begin with everyday decisions made by millions of people.
          </p>

        </div>

      </div>

    </section>
  );
};

export default Alternatives;