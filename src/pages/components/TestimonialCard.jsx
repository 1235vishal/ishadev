// import { useState } from "react";
// import bgImage from "../../../public/Image.png"; // Rename ffgg.png to background.jpg or import directly
// import "./Styles/TestimonialCard.css";

// const testimonials = [
//   {
//     quote:
//       "It was my first time at Grenda for me and my friends. Was a great time and the staff are great.",
//     name: "Aenean",
//     role: "Customer",
//     image: "https://i.imgur.com/7k12EPD.png", // Replace with your image if needed
//   },
//   // Add more testimonials if needed
// ];

// const Testimonial = () => {
//   const [index, setIndex] = useState(0);

//   const handlePrev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);
//   const handleNext = () => setIndex((index + 1) % testimonials.length);

//   return (
//     <div className="testimonial-container" style={{ backgroundImage: `url(${bgImage})` }}>
//       <div className="testimonial-overlay">
//         <div className="testimonial-card">
//           <div className="quote">“{testimonials[index].quote}”</div>
//           <div className="author">
//             <img src={testimonials[index].image} alt={testimonials[index].name} />
//             <h4>{testimonials[index].name}</h4>
//             <span>{testimonials[index].role}</span>
//           </div>
//           <div className="nav-buttons">
//             <button onClick={handlePrev}>←</button>
//             <button onClick={handleNext}>→</button>
//           </div>
//         </div>
//         <div className="testimonial-image"></div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;


// // Testimonial.jsx
// import { useState } from "react";
// import bgImage from "../../../public/Image.png";
// import "./Styles/TestimonialCard.css";

// const testimonials = [
//   {
//     quote:
//       "It was my first time at Grenda for me and my friends. Was a great time and the staff are great.",
//     name: "Aenean",
//     role: "Customer",
//     image: "https://i.imgur.com/7k12EPD.png",
//   },
// ];

// const Testimonial = () => {
//   const [index, setIndex] = useState(0);

//   const handlePrev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);
//   const handleNext = () => setIndex((index + 1) % testimonials.length);

//   return (
//     <div
//       className="testimonial-container"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//           <div className="testimonial-card">
              
//               <div className="testmonialtext">
//                    <div className="quote-icon">&ldquo;</div>
//         <p className="quote">{testimonials[index].quote}</p>

//         <div className="divider">
//           <span className="decor-line" />
//           <span className="decor-icon">&#10084;</span>
//           <span className="decor-line" />
//         </div>

//         <div className="author-box">
//           <button onClick={handlePrev} className="nav-button">
//             &#8592;
//           </button>
//           <img src={testimonials[index].image} alt="user" />
//           <button onClick={handleNext} className="nav-button filled">
//             &#8594;
//           </button>
//         </div>

//         <h4>{testimonials[index].name}</h4>
//         <p className="role">{testimonials[index].role}</p>
//       </div>
//     </div>
//               </div>


       
//   );
// };

// export default Testimonial;


// Testimonial.jsx
import { useEffect, useState } from "react";
import bgImage from "../../../public/Image.png";
import "./Styles/TestimonialCard.css";

const testimonials = [
    {
      quote:
        "It was my first time at Grenda for me and my friends. Was a great time and the staff are great.",
      name: "Aenean",
      role: "Customer",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      quote:
        "Amazing ambiance and top-notch service. Truly memorable experience!",
      name: "Brenda",
      role: "Guest",
      image: "https://i.pravatar.cc/150?img=24",
    },
    {
      quote:
        "My wedding here was nothing short of magical. Highly recommended!",
      name: "Carlos",
      role: "Groom",
      image: "https://i.pravatar.cc/150?img=33",
    },
    {
      quote:
        "Their hospitality is beyond expectations. Loved every moment!",
      name: "Dana",
      role: "Visitor",
      image: "https://i.pravatar.cc/150?img=47",
    },
    {
      quote:
        "We held a corporate retreat here. Flawless arrangements.",
      name: "Evan",
      role: "Manager",
      image: "https://i.pravatar.cc/150?img=52",
    },
    {
      quote:
        "A peaceful getaway spot with amazing food and service.",
      name: "Fiona",
      role: "Traveler",
      image: "https://i.pravatar.cc/150?img=65",
    },
  ];
  

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () =>
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  const handleNext = () =>
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);

  useEffect(() => {
    const autoScroll = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(autoScroll);
  }, []);

  return (
    <div
      className="testimonial-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="testimonial-card">
        <div className="testmonialtext">
          <div className="quote-icon">&ldquo;</div>
          <p className="quote">{testimonials[index].quote}</p>

          <div className="divider">
            <span className="decor-line" />
            <span className="decor-icon">&#10084;</span>
            <span className="decor-line" />
          </div>

          <div className="author-box">
            <button onClick={handlePrev} className="nav-button">
              &#8592;
            </button>
            <img src={testimonials[index].image} alt="user" />
            <button onClick={handleNext} className="nav-button filled">
              &#8594;
            </button>
          </div>

          <h4>{testimonials[index].name}</h4>
          <p className="role">{testimonials[index].role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
