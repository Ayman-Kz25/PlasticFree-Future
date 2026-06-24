import {
  FaWater,
  FaFish,
  FaSeedling,
  FaHeartbeat,
  FaGlobe,
} from "react-icons/fa";

const effectsData = [
  {
    icon: <FaWater />,
    title: "Ocean Pollution",
    text: "Millions of tons of plastic waste enter oceans every year, creating floating garbage patches and disrupting marine ecosystems.",
  },
  {
    icon: <FaFish />,
    title: "Marine Life Harm",
    text: "Sea turtles, whales, birds and fish often mistake plastic for food, causing injury, starvation and death.",
  },
  {
    icon: <FaSeedling />,
    title: "Soil Contamination",
    text: "Plastic waste breaks into tiny particles and releases chemicals that reduce soil quality and agricultural productivity.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Human Health Risks",
    text: "Microplastics are now found in drinking water, food and even the human body.",
  },
  {
    icon: <FaGlobe />,
    title: "Climate Impact",
    text: "Plastic production and disposal release greenhouse gases that contribute to global warming.",
  },
];

const Effects = () => {
  return (
    <section className="effects">

      <div className="effects-container">

        <div className="effects-header">

          <span className="effects-badge">
            The Ripple Effect
          </span>

          <h1 className="effects-title">
            One Plastic Bottle Can Affect Far More Than You Think
          </h1>

          <p className="effects-subtitle">
            Plastic pollution doesn't stop where it is thrown away.
            Its impact travels through oceans, wildlife, ecosystems,
            communities and future generations.
          </p>

        </div>

        <div className="impact-timeline">

          {effectsData.map((effect, index) => (
            <div className="impact-item" key={index}>

              <div className="impact-icon">
                {effect.icon}
              </div>

              <div className="impact-content">
                <h3>{effect.title}</h3>
                <p>{effect.text}</p>
              </div>

            </div>
          ))}

        </div>

        <div className="effects-message">

          <h2>
            Every Piece of Plastic Has a Story
          </h2>

          <p>
            The choices we make today determine the health of our oceans,
            wildlife and communities tomorrow.
          </p>

        </div>

      </div>

    </section>
  );
};

export default Effects;