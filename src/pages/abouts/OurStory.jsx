// // OurStory.jsx
// import storyImage from "../../assets/imgi_37_about_img-300x203.jpg"; // Replace with actual path
// import "./OurStory.css";

// const OurStory = () => {
//   return (
//     <section className="our-story">
//       <div className="story-header">
//         <h2>Our Story</h2>
//         <p className="subheading">We have over 35 years of experience</p>
//       </div>

//       <div className="story-content">
//         <div className="story-image">
//           <img src={storyImage} alt="Decorated dining table" />
//         </div>
//         <div className="story-text">
//           <h3 className="story-year">1983</h3>
//           <p className="main-text">
//             In 1983, Susan Winlet opened the doors of Grenda, one of Newyork’s
//             first catering companies.
//           </p>
//           <p className="sub-text">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurStory;


// // OurStory.jsx
// import storyImage from "../../assets/imgi_37_about_img-300x203.jpg"; // Replace with your actual image path
// import "./OurStory.css";

// const OurStory = () => {
//   return (
//     <section className="our-story">
//       <div className="story-wrapper">
//         <div className="story-header">
//           <h2>Our Story</h2>
//           <p className="subheading">We have over 35 years of experience</p>
//         </div>

//         <div className="story-card">
//           <div className="story-image">
//             <img src={storyImage} alt="Dining Table" />
//           </div>
//           <div className="story-text">
//             <h3 className="story-year">1986</h3>
//             <p className="main-text">
//               In 1986, Susan Winlet opened the doors of Grenda, one of Newyork’s
//               first catering companies.
//             </p>
//             <p className="sub-text">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//               minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//               aliquip ex ea commodo consequat. Duis aute irure dolor in
//               reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//               pariatur.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurStory;


// import { useEffect, useState } from "react";
// import storyImage from "../../assets/imgi_37_about_img-300x203.jpg";
// import "./OurStory.css";

// const slides = [
//   {
//     year: "1986",
//     title: "Our Vision",
//     text: "At Magnoliya Grand Manor, our vision is to provide you with an unparalleled event experience. We believe that every gathering, from corporate conferences to life's most celebrated moments, deserves a setting that is both exceptional and effortlessly accommodating. Our dedicated team is here to bring your vision to life, ensuring every detail is impeccable.",
//   },
//   {
//     year: "1992",
//     title: "Exceptional Facilities",
//     text: "Our state-of-the-art event center boasts a range of versatile spaces suitable for gatherings of all sizes and purposes. Whether you're planning an intimate corporate retreat, a grand gala, or a dream wedding, our venues are thoughtfully designed to meet your unique needs. With advanced audiovisual capabilities and flexible configurations, your event will shine at MgM.",
//   },
//   {
//     year: "2005",
//     title: "Dedicated Service",
//     text: "At Magnoliya Grand Manor, we are committed to providing the highest level of service excellence. Our team of experienced professionals is passionate about creating exceptional experiences for our clients and their guests. From event planning to gourmet catering, our meticulous attention to detail ensures that your event runs seamlessly.",
//   },
//   {
//     year: "2023",
//     title: "Convenience and Accessibility",
//     text: "Located just outside the bustling capital city of Washington, D.C., and in close proximity to Dulles International Airport (IAD), MgM offers the perfect balance of accessibility and serenity. Our picturesque surroundings including Battlefield Park and Ample Parking make MgM an ideal choice for events of all kinds, attracting both local and out-of-town guests.",
//     },
//     {
//         year: "2023",
//         title: "Your Journey Begins Here",
//         text: "We invite you to explore Magnoliya Grand Manor further and discover the endless possibilities for your upcoming event. Whether you're planning a business meeting, a family celebration, or anything in between, we are here to make your vision a reality. Welcome to a world of grandeur, hospitality, and unforgettable moments.",
//       },
// ];

// const OurStory = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="our-story">
//       <div className="story-wrapper">
//         <div className="story-header">
//           <h2>Our Story</h2>
//           <p className="subheading">We have over 35 years of experience</p>
//         </div>

//         <div className="story-card">
//           <div className="story-image">
//             <img src={storyImage} alt="Dining Table" />
//           </div>
//           <div className="story-text">
//             <h3 className="story-year">{slides[activeIndex].year}</h3>
//             <p className="main-text">{slides[activeIndex].title}</p>
//             <p className="sub-text">{slides[activeIndex].text}</p>

//             <div className="dots-container">
//               {slides.map((_, idx) => (
//                 <span
//                   key={idx}
//                   className={`dot ${idx === activeIndex ? "active" : ""}`}
//                   onClick={() => setActiveIndex(idx)}
//                 ></span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurStory;

import { Building2, CalendarClock, MapPin, Star, Users2 } from "lucide-react"; // Icons
import { useEffect, useState } from "react";
import storyImage from "../../assets/imgi_37_about_img-300x203.jpg";
import "./OurStory.css";

const slides = [
  {
    icon: <CalendarClock size={40} color="#D4A574" />,
    title: "Our Vision",
    text: "At Magnoliya Grand Manor, our vision is to provide you with an unparalleled event experience. We believe that every gathering, from corporate conferences to life's most celebrated moments, deserves a setting that is both exceptional and effortlessly accommodating.",
  },
  {
    icon: <Building2 size={40} color="#D4A574" />,
    title: "Exceptional Facilities",
    text: "Our state-of-the-art event center boasts a range of versatile spaces suitable for gatherings of all sizes and purposes. With advanced audiovisual capabilities and flexible configurations, your event will shine at MgM.",
  },
  {
    icon: <Users2 size={40} color="#D4A574" />,
    title: "Dedicated Service",
    text: "Our team of experienced professionals is passionate about creating exceptional experiences for our clients. From event planning to gourmet catering, our meticulous attention to detail ensures that your event runs seamlessly.",
  },
  {
    icon: <MapPin size={40} color="#D4A574" />,
    title: "Convenience and Accessibility",
    text: "Located just outside Washington, D.C., and near Dulles Airport (IAD), MgM offers the perfect balance of accessibility and serenity, attracting both local and out-of-town guests.",
  },
  {
    icon: <Star size={40} color="#D4A574" />,
    title: "Your Journey Begins Here",
    text: "We invite you to explore Magnoliya Grand Manor further and discover the endless possibilities for your upcoming event. Welcome to a world of grandeur, hospitality, and unforgettable moments.",
  },
];

const OurStory = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="our-story">
      <div className="story-wrapper">
        <div className="story-header">
          <h2>Our Story</h2>
          <p className="subheading">We have over 35 years of experience</p>
        </div>

        <div className="story-card">
          <div className="story-image">
            <img src={storyImage} alt="Dining Table" />
          </div>
          <div className="story-text">
            <div className="story-icon">{slides[activeIndex].icon}</div>
            <p className="main-text">{slides[activeIndex].title}</p>
            <p className="sub-text">{slides[activeIndex].text}</p>

            <div className="dots-container">
              {slides.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${idx === activeIndex ? "active" : ""}`}
                  onClick={() => setActiveIndex(idx)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
