import {
  FaClock,
  FaWater,
  FaFish,
  FaRecycle,
  FaGlobeAsia,
} from "react-icons/fa";

const facts = [
  {
    icon: <FaClock />,
    title: "400-1000 Years",
    text: "Plastic can take hundreds of years to fully decompose in nature.",
  },
  {
    icon: <FaWater />,
    title: "8 Million Tons",
    text: "Plastic enters oceans every year, damaging marine ecosystems.",
  },
  {
    icon: <FaFish />,
    title: "700+ Species",
    text: "Marine animals are harmed by ingestion and entanglement.",
  },
  {
    icon: <FaGlobeAsia />,
    title: "Microplastics",
    text: "Humans consume microplastics through water, food and air.",
  },
  {
    icon: <FaRecycle />,
    title: "Only 9%",
    text: "A very small percentage of plastic waste gets recycled.",
  },
];

const Facts = () => {
  return (
    <section className="facts">
      <div className="facts-container">

        <div className="facts-header">
          <span className="facts-badge">
            Plastic Awareness
          </span>

          <h1 className="facts-title">
            The Reality of Plastic Pollution
          </h1>

          <p className="facts-subtitle">
            Plastic pollution affects oceans, wildlife, ecosystems and human
            health. Understanding the facts helps create meaningful change.
          </p>
        </div>

        <div className="facts-stats">
          <div className="stat-card">
            <h2>400+</h2>
            <p>Years To Decompose</p>
          </div>

          <div className="stat-card">
            <h2>8M+</h2>
            <p>Tons In Oceans Yearly</p>
          </div>

          <div className="stat-card">
            <h2>700+</h2>
            <p>Species Affected</p>
          </div>
        </div>

        <div className="facts-grid">
          {facts.map((fact, index) => (
            <div
              key={index}
              className={`fact-card ${
                index === 0 ? "fact-card-large" : ""
              }`}
            >
              <div className="fact-icon">
                {fact.icon}
              </div>

              <h3>{fact.title}</h3>

              <p>{fact.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Facts;