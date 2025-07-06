// import "./Styles/contact.css";
// import { handleSubmit } from "./contactHandler";

// const MainContact = () => {
//   return (
//     <section className="contact-section">
//       <div className="map-container">
//         <iframe
//           title="Google Map"
//           src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9934.34301614966!2d-0.1276!3d51.5074!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3333eaaeb3%3A0x3d1a16c354d654bb!2sLondon!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
//           allowFullScreen=""
//           loading="lazy"
//           className="google-map"
//         ></iframe>
//       </div>

//       <div className="form-container">
//         <h1 className="contact-title">Contact</h1>
//         <p className="contact-subtitle">LEAVE A FEEDBACK</p>

//         <form onSubmit={handleSubmit} className="contact-form">
//           <input type="text" name="name" placeholder="Your Name" required />
//           <input type="email" name="email" placeholder="Your Email" required />
//           <textarea name="message" placeholder="Message" rows="5" required></textarea>
//           <button type="submit" className="submit-btn">SUBMIT NOW</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default MainContact;


// import "./Styles/contact.css";
// import { handleSubmit } from "./contactHandler";

// const MainContact = () => {
//   return (
//     <section className="maincontact-section">
//       <div className="maincontact-map-container">
//         <iframe
//           title="Google Map"
//           src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9934.34301614966!2d-0.1276!3d51.5074!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3333eaaeb3%3A0x3d1a16c354d654bb!2sLondon!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
//           allowFullScreen=""
//           loading="lazy"
//           className="maincontact-google-map"
//         ></iframe>
//       </div>

//       <div className="maincontact-form-container">
//         <h1 className="maincontact-title">Contact</h1>
//         <p className="maincontact-subtitle">LEAVE A FEEDBACK</p>

//         <form onSubmit={handleSubmit} className="maincontact-form">
//           <input type="text" name="name" placeholder="Your Name" required />
//           <input type="email" name="email" placeholder="Your Email" required />
//           <textarea name="message" placeholder="Message" rows="5" required></textarea>
//           <button type="submit" className="maincontact-submit-btn">SUBMIT NOW</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default MainContact;

import { useState } from "react";
import "./Styles/contact.css";

const MainContact = () => {
  const [phoneAlert, setPhoneAlert] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const phone = formData.get("phone").trim();
    const phoneRegex = /^[0-9]{10,15}$/;

    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number (digits only, 10–15 characters).");
      return;
    }

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone,
      message: formData.get("message"),
    };

    console.log("Contact Form Submitted:", data);
    alert("Thank you for contacting us!");
    e.target.reset();
    setPhoneAlert("");
  };

  const handlePhoneInput = (e) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) {
      setPhoneAlert("Only numbers are allowed.");
    } else {
      setPhoneAlert("");
    }
  };

  return (
    <section className="maincontact-section">
      <div className="maincontact-map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.589093921854!2d-77.52176522407095!3d38.78419497177226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b65e65f56d169f%3A0x3d8d143c7bdf3095!2s7001%20Infantry%20Ridge%20Rd%2C%20Manassas%2C%20VA%2020109%2C%20USA!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          className="maincontact-google-map"
        ></iframe>

        <div className="maincontact-map-details">
         
        </div>
      </div>

      <div className="maincontact-form-container">
        <h1 className="maincontact-title">Contact</h1>
        <p className="maincontact-subtitle">LEAVE A FEEDBACK</p>

        <form onSubmit={handleSubmit} className="maincontact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            maxLength={15}
            onInput={handlePhoneInput}
            required
          />
          {phoneAlert && (
            <p style={{ color: "red", fontSize: "0.85rem", marginTop: "-8px", marginBottom: "10px" }}>
              {phoneAlert}
            </p>
          )}
          <textarea name="message" placeholder="Message" rows="5" required></textarea>
          <button type="submit" className="maincontact-submit-btn">SUBMIT NOW</button>
        </form>
      </div>
    </section>
  );
};

export default MainContact;
