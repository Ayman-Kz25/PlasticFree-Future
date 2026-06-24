import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

const Join = () => {
  const [state, handleSubmit] = useForm("mwvdvrgv");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (state.succeeded) {
    return (
      <section className="join">
        <div className="join-container">
          <h1>Thank You 🌱</h1>
          <p>
            Your message has been sent successfully.
            We'll get back to you soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="join">

      <div className="join-container">

        <h1>Join the Movement 🌱</h1>

        <p>
          Want to support environmental awareness?
          Contact us and be part of the change.
        </p>

        <form
          className="join-form"
          onSubmit={handleSubmit}
        >

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

          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            disabled={state.submitting}
          >
            {state.submitting
              ? "Sending..."
              : "Send Message"}
          </button>

        </form>

      </div>

    </section>
  );
};

export default Join;