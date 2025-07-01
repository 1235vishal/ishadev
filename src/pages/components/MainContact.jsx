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


import "./Styles/contact.css";
import { handleSubmit } from "./contactHandler";

const MainContact = () => {
  return (
    <section className="maincontact-section">
      <div className="maincontact-map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9934.34301614966!2d-0.1276!3d51.5074!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3333eaaeb3%3A0x3d1a16c354d654bb!2sLondon!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          className="maincontact-google-map"
        ></iframe>
      </div>

      <div className="maincontact-form-container">
        <h1 className="maincontact-title">Contact</h1>
        <p className="maincontact-subtitle">LEAVE A FEEDBACK</p>

        <form onSubmit={handleSubmit} className="maincontact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Message" rows="5" required></textarea>
          <button type="submit" className="maincontact-submit-btn">SUBMIT NOW</button>
        </form>
      </div>
    </section>
  );
};

export default MainContact;
