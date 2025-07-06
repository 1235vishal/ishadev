// // import "./Contactphase2.css";

// // const Contactphase2 = () => {
// //   const handleContactSubmit = (e) => {
// //     e.preventDefault();
// //     const formData = new FormData(e.target);

// //     const data = {
// //       name: formData.get("name"),
// //       email: formData.get("email"),
// //       address: formData.get("address"),
// //       message: formData.get("message"),
// //     };

// //     console.log("Contact Form Submitted:", data);
// //     alert("Thank you for contacting us!");
// //     e.target.reset();
// //   };

// //   return (
// //     <section className="contact-wrapper">
// //       {/* Map Section */}
// //       <div className="map-section">
// //         <iframe
// //           title="Google Map"
// //           className="map-embed"
// //           src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19828.693848012265!2d-0.1276!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719860000000!5m2!1sen!2sin"
// //           allowFullScreen=""
// //           loading="lazy"
// //         ></iframe>
// //       </div>

// //       {/* Form Section */}
// //       <div className="form-section">
// //         <p className="form-subtitle">GET IN TOUCH</p>
// //         <h2 className="form-title">Feel Free To Contact Us</h2>
// //         <form onSubmit={handleContactSubmit} className="contact-form">
// //           <div className="form-row">
// //             <input type="text" name="name" placeholder="Your Name" required />
// //             <input type="email" name="email" placeholder="Your Email" required />
// //           </div>
// //           <input type="text" name="address" placeholder="Your Address" required />
// //           <textarea name="message" placeholder="Message" rows="4" required></textarea>
// //           <button type="submit" className="submit-button">SUBMIT NOW</button>
// //         </form>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Contactphase2;


// import "./Contactphase2.css";

// const Contactphase2 = () => {
//   const handleContactSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);

//     const data = {
//       name: formData.get("name"),
//       email: formData.get("email"),
//       address: formData.get("address"),
//       message: formData.get("message"),
//     };

//     console.log("Contact Form Submitted:", data);
//     alert("Thank you for contacting us!");
//     e.target.reset();
//   };

//   return (
//     <section className="contact-wrapper">
//       {/* Map Section */}
//       <div className="map-section">
//         <iframe
//           title="Google Map"
//           className="map-embed"
//           src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19828.693848012265!2d-0.1276!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719860000000!5m2!1sen!2sin"
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </div>

//       {/* Form Section */}
//       <div className="form-section">
//         <p className="form-subtitle">GET IN TOUCH</p>
//         <h2 className="form-title">Feel Free To Contact Us</h2>
//         <form onSubmit={handleContactSubmit} className="contact-form">
//           <div className="form-row">
//             <input type="text" name="name" placeholder="Your Name" required />
//             <input type="email" name="email" placeholder="Your Email" required />
//           </div>
//           <input type="text" name="address" placeholder="Your Address" required />
//           <textarea name="message" placeholder="Message" rows="4" required></textarea>
//           <button type="submit" className="submit-button">SUBMIT NOW</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contactphase2;
import { useState } from "react";
import "./Contactphase2.css";

const Contactphase2 = () => {
  const [phoneAlert, setPhoneAlert] = useState("");

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const phone = formData.get("phone").trim();
    const phoneRegex = /^[0-9]{10,15}$/;

    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number (digits only, 10–15 digits).");
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
      setPhoneAlert("Only numbers are allowed in phone field.");
    } else {
      setPhoneAlert("");
    }
  };

  return (
    <section className="contact-wrapper">
      {/* Map Section */}
      {/* <div className="map-section">
        <iframe
          title="Google Map"
          className="map-embed"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19828.693848012265!2d-0.1276!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719860000000!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <div className="map-address">
          <span className="map-pin">📍</span>
          7001 Infantry Ridge Rd, Manassas, VA 20109, USA
        </div>
      </div> */}
          <div className="map-section">
  <iframe
    title="Google Map"
    className="map-embed"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.589093921854!2d-77.52176522407095!3d38.78419497177226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b65e65f56d169f%3A0x3d8d143c7bdf3095!2s7001%20Infantry%20Ridge%20Rd%2C%20Manassas%2C%20VA%2020109%2C%20USA!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
    allowFullScreen=""
    loading="lazy"
  ></iframe>
  <p className="map-address">
  </p>
</div>


      {/* Form Section */}
      <div className="form-section">
        <p className="form-subtitle">GET IN TOUCH</p>
        <h2 className="form-title">Feel Free To Contact Us</h2>
        <form onSubmit={handleContactSubmit} className="contact-form">
          <div className="form-row">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            required
            onInput={handlePhoneInput}
            maxLength={15}
          />
          {phoneAlert && (
            <p style={{ color: "red", fontSize: "0.9rem", marginTop: "5px" }}>
              {phoneAlert}
            </p>
          )}
          <textarea name="message" placeholder="Message" rows="4" required></textarea>
          <button type="submit" className="submit-button">SUBMIT NOW</button>
        </form>
      </div>
    </section>
  );
};

export default Contactphase2;
