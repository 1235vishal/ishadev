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


import "./Contactphase2.css";

const Contactphase2 = () => {
  const handleContactSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      address: formData.get("address"),
      message: formData.get("message"),
    };

    console.log("Contact Form Submitted:", data);
    alert("Thank you for contacting us!");
    e.target.reset();
  };

  return (
    <section className="contact-wrapper">
      {/* Map Section */}
      <div className="map-section">
        <iframe
          title="Google Map"
          className="map-embed"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19828.693848012265!2d-0.1276!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719860000000!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
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
          <input type="text" name="address" placeholder="Your Address" required />
          <textarea name="message" placeholder="Message" rows="4" required></textarea>
          <button type="submit" className="submit-button">SUBMIT NOW</button>
        </form>
      </div>
    </section>
  );
};

export default Contactphase2;