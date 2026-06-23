import { useState } from "react";

const Join = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:your-email@example.com?subject=Join Movement Request&body=
Name: ${formData.name}%0D%0A
Email: ${formData.email}%0D%0A
Message: ${formData.message}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="join">

      <div className="join-container">

        <h1>Join the Movement ♻️</h1>

        <p>
          Want to support environmental awareness? Contact us and be part of the change.
        </p>

        <form className="join-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
};

export default Join;