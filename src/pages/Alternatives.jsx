import {
  FaTint,
  FaShoppingBag,
  FaLeaf,
  FaBoxOpen,
  FaBan,
} from "react-icons/fa";

const alternatives = [
  {
    icon: <FaTint />,
    title: "Reusable Water Bottle",
    impact: "High Impact",
    difficulty: "Easy",
    text: "Carry a reusable bottle and avoid purchasing single-use plastic bottles.",
  },
  {
    icon: <FaShoppingBag />,
    title: "Cloth Shopping Bags",
    impact: "High Impact",
    difficulty: "Easy",
    text: "Keep reusable bags with you for grocery shopping and daily errands.",
  },
  {
    icon: <FaLeaf />,
    title: "Bamboo & Metal Straws",
    impact: "Medium Impact",
    difficulty: "Easy",
    text: "Replace disposable plastic straws with reusable alternatives.",
  },
  {
    icon: <FaBoxOpen />,
    title: "Refillable Containers",
    impact: "High Impact",
    difficulty: "Medium",
    text: "Store food and household items in reusable containers instead of disposable packaging.",
  },
  {
    icon: <FaBan />,
    title: "Avoid Single Use Plastics",
    impact: "Very High Impact",
    difficulty: "Medium",
    text: "Say no to disposable cups, cutlery, plates and unnecessary plastic packaging.",
  },
];

const Alternatives = () => {
  return (
    <section className="alternatives">

      <div className="alternatives-container">

        <div className="alternatives-header">

          <span className="alternatives-badge">
            Start Today
          </span>

          <h1 className="alternatives-title">
            Small Habits. Big Environmental Impact.
          </h1>

          <p className="alternatives-subtitle">
            You don't need to change everything overnight.
            A few simple choices can significantly reduce plastic waste.
          </p>

        </div>

        <div className="alternatives-grid">

          {alternatives.map((item, index) => (
            <div className="habit-card" key={index}>

              <div className="habit-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <div className="habit-tags">
                <span>{item.impact}</span>
                <span>{item.difficulty}</span>
              </div>

              <p>{item.text}</p>

            </div>
          ))}

        </div>

        <div className="challenge-box">

          <h2>
            Your 7-Day Eco Challenge 🌱
          </h2>

          <p>
            Pick just one habit from above and practice it for the next 7 days.
            Small actions repeated consistently create meaningful change.
          </p>

          <div className="challenge-steps">
            <span>Day 1: Choose a habit</span>
            <span>Day 3: Stay consistent</span>
            <span>Day 5: Inspire someone</span>
            <span>Day 7: Make it permanent</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Alternatives;