// import { useState } from "react";
// import "./HotelDining.css";

// const HotelDining = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedRestaurant, setSelectedRestaurant] = useState("");
//   const [formData, setFormData] = useState({
//     restaurant: "",
//     name: "",
//     email: "",
//     phone: "",
//     date: "",
//     time: "",
//     guests: "",
//     specialRequests: "",
//   });

//   const scrollToSection = (sectionId) => {
//     document.getElementById(sectionId).scrollIntoView({
//       behavior: "smooth",
//     });
//   };

//   const openReservationModal = (restaurantName) => {
//     setSelectedRestaurant(restaurantName);
//     setFormData((prev) => ({ ...prev, restaurant: restaurantName }));
//     setModalOpen(true);
//     document.body.style.overflow = "hidden";
//   };

//   const closeReservationModal = () => {
//     setModalOpen(false);
//     document.body.style.overflow = "auto";
//   };

//   const downloadMenu = (menuFile) => {
//     alert(`Menu download would start here for: ${menuFile}`);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(
//       "Reservation request submitted successfully! We will contact you shortly to confirm your booking."
//     );
//     closeReservationModal();
//     setFormData({
//       restaurant: "",
//       name: "",
//       email: "",
//       phone: "",
//       date: "",
//       time: "",
//       guests: "",
//       specialRequests: "",
//     });
//   };

//   const restaurants = [
//     {
//       id: 1,
//       name: "Le Jardin",
//       cuisine: "French Fine Dining",
//       description:
//         "Experience the pinnacle of French culinary artistry in our elegant dining room, where classic techniques meet contemporary presentation in an atmosphere of refined luxury.",
//       image:
//         "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
//       badge: "Michelin ⭐",
//       features: ["Michelin Recommended", "Wine Pairing", "Private Dining"],
//       recommendation:
//         "Try our signature Duck Confit with seasonal vegetables and our award-winning wine selection from Burgundy.",
//       menu: "french-menu.pdf",
//     },
//     {
//       id: 2,
//       name: "Sakura Sushi",
//       cuisine: "Authentic Japanese",
//       description:
//         "Immerse yourself in the art of Japanese cuisine with our authentic sushi bar and traditional teppanyaki experience, featuring the freshest ingredients.",
//       image:
//         "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80",
//       badge: "Authentic",
//       features: ["Sushi Counter", "Teppanyaki", "Sake Selection"],
//       recommendation:
//         "Don't miss our Omakase experience featuring the freshest seasonal fish and our signature miso-glazed cod.",
//       menu: "japanese-menu.pdf",
//     },
//     {
//       id: 3,
//       name: "Villa Italiana",
//       cuisine: "Traditional Italian",
//       description:
//         "Savor authentic Italian flavors in our warm, family-style atmosphere with house-made pasta and wood-fired pizzas crafted by Italian masters.",
//       image:
//         "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
//       badge: "Traditional",
//       features: ["Wood-Fired Oven", "Fresh Pasta", "Italian Wines"],
//       recommendation:
//         "Our handmade Truffle Risotto and Neapolitan Pizza Margherita are must-try dishes paired with our Chianti Classico.",
//       menu: "italian-menu.pdf",
//     },
//     {
//       id: 4,
//       name: "Garden Terrace",
//       cuisine: "Contemporary International",
//       description:
//         "Enjoy fresh, healthy cuisine on our beautiful outdoor terrace with panoramic city views and farm-to-table ingredients sourced locally.",
//       image:
//         "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//       badge: "Farm-to-Table",
//       features: ["Outdoor Dining", "Farm-to-Table", "Vegetarian Options"],
//       recommendation:
//         "Our quinoa-crusted salmon with organic vegetables and our signature avocado toast are perfect for a healthy, delicious meal.",
//       menu: "contemporary-menu.pdf",
//     },
//   ];

//   /* JavaScript for Enhanced Parallax Effect */
//   document.addEventListener("DOMContentLoaded", function () {
//     const hero = document.querySelector(".DiningHero");
//     const bg = document.querySelector(".DiningHero-bg");

//     if (window.innerWidth > 768) {
//       window.addEventListener("scroll", function () {
//         const scrollPosition = window.pageYOffset;
//         bg.style.transform = `translateY(${
//           scrollPosition * 0.5
//         }px) translateZ(-1px) scale(2)`;
//       });
//     }
//   });

//   return (
//     <div className="DiningContainer">
//       {/* Hero Section */}
//       <section className="DiningHero">
//         <div className="DiningHero-bg"></div>
//         <div className="DiningHero-content">
//           <h1>Culinary Excellence</h1>
//           <p>
//             Embark on a gastronomic journey through our world-class restaurants,
//             where master chefs create extraordinary dining experiences that
//             blend tradition with innovation in the most elegant settings.
//           </p>
//           <button
//             className="DiningCta-button"
//             onClick={() => scrollToSection("restaurants")}
//           >
//             Explore Our Restaurants
//           </button>
//         </div>
//       </section>

//       {/* Restaurants Section */}
//       <section className="DiningRestaurants-section" id="restaurants">
//         <div className="DiningContainer-inner">
//           <h2 className="DiningSection-title">Our Signature Restaurants</h2>
//           <p className="DiningSection-subtitle">
//             Discover exceptional dining experiences crafted by world-renowned
//             chefs in stunning settings
//           </p>

//           <div className="DiningRestaurants-grid">
//             {restaurants.map((restaurant) => (
//               <div className="DiningRestaurant-card" key={restaurant.id}>
//                 <div className="DiningRestaurant-image">
//                   <img
//                     src={restaurant.image}
//                     alt={`${restaurant.name} Restaurant`}
//                   />
//                   <div className="DiningRestaurant-badge">
//                     {restaurant.badge}
//                   </div>
//                 </div>
//                 <div className="DiningRestaurant-content">
//                   <h3 className="DiningRestaurant-name">{restaurant.name}</h3>
//                   <p className="DiningCuisine-type">{restaurant.cuisine}</p>
//                   <p className="DiningRestaurant-description">
//                     {restaurant.description}
//                   </p>

//                   <div className="DiningRestaurant-features">
//                     {restaurant.features.map((feature, index) => (
//                       <span className="DiningFeature-tag" key={index}>
//                         {feature}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="DiningChef-recommendation">
//                     <div className="DiningChef-rec-title">
//                       Chef's Recommendation
//                     </div>
//                     <div className="DiningChef-rec-content">
//                       {restaurant.recommendation}
//                     </div>
//                   </div>

//                   <div className="DiningRestaurant-actions">
//                     <button
//                       className="DiningAction-btn DiningPrimary-btn"
//                       onClick={() => openReservationModal(restaurant.name)}
//                     >
//                       Reserve Table
//                     </button>
//                     <button
//                       className="DiningAction-btn DiningSecondary-btn"
//                       onClick={() => downloadMenu(restaurant.menu)}
//                     >
//                       View Menu
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="DiningFooter">
//         <div className="DiningContainer-inner">
//           <div className="DiningFooter-content">
//             <div className="DiningFooter-section">
//               <h3>Contact Us</h3>
//               <p>Phone: +1 (555) 123-4567</p>
//               <p>Email: dining@grandhotel.com</p>
//               <p>Reservations: reservations@grandhotel.com</p>
//             </div>
//             <div className="DiningFooter-section">
//               <h3>Dining Hours</h3>
//               <p>Breakfast: 7:00 AM - 11:00 AM</p>
//               <p>Lunch: 12:00 PM - 3:00 PM</p>
//               <p>Dinner: 6:00 PM - 11:00 PM</p>
//             </div>
//             <div className="DiningFooter-section">
//               <h3>Location</h3>
//               <p>123 Luxury Avenue</p>
//               <p>Downtown District</p>
//               <p>City, State 12345</p>
//             </div>
//           </div>
//           <div className="DiningFooter-bottom">
//             <p>&copy; 2024 Grand Hotel. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>

//       {/* Reservation Modal */}
//       {modalOpen && (
//         <div
//           className="DiningModal"
//           id="reservationModal"
//           onClick={(e) =>
//             e.target === e.currentTarget && closeReservationModal()
//           }
//         >
//           <div className="DiningModal-content">
//             <span className="DiningClose-modal" onClick={closeReservationModal}>
//               &times;
//             </span>
//             <h2>Make a Reservation</h2>
//             <form id="reservationForm" onSubmit={handleSubmit}>
//               <div className="DiningForm-group">
//                 <label htmlFor="restaurant">Restaurant:</label>
//                 <input
//                   type="text"
//                   id="restaurant"
//                   name="restaurant"
//                   value={formData.restaurant}
//                   readOnly
//                 />
//               </div>
//               <div className="DiningForm-group">
//                 <label htmlFor="name">Full Name:</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   required
//                   placeholder="Enter your full name"
//                 />
//               </div>
//               <div className="DiningForm-group">
//                 <label htmlFor="email">Email Address:</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   required
//                   placeholder="Enter your email"
//                 />
//               </div>
//               <div className="DiningForm-group">
//                 <label htmlFor="phone">Phone Number:</label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   required
//                   placeholder="Enter your phone number"
//                 />
//               </div>
//               <div className="DiningForm-group">
//                 <label htmlFor="date">Reservation Date:</label>
//                 <input
//                   type="date"
//                   id="date"
//                   name="date"
//                   value={formData.date}
//                   onChange={handleInputChange}
//                   min={new Date().toISOString().split("T")[0]}
//                   required
//                 />
//               </div>
//               <div className="DiningForm-group">
//                 <label htmlFor="time">Preferred Time:</label>
//                 <select
//                   id="time"
//                   name="time"
//                   value={formData.time}
//                   onChange={handleInputChange}
//                   required
//                 >
//                   <option value="">Select Time</option>
//                   <option value="18:00">6:00 PM</option>
//                   <option value="18:30">6:30 PM</option>
//                   <option value="19:00">7:00 PM</option>
//                   <option value="19:30">7:30 PM</option>
//                   <option value="20:00">8:00 PM</option>
//                   <option value="20:30">8:30 PM</option>
//                   <option value="21:00">9:00 PM</option>
//                 </select>
//               </div>
//               <div className="DiningForm-group">
//                 <label htmlFor="guests">Number of Guests:</label>
//                 <select
//                   id="guests"
//                   name="guests"
//                   value={formData.guests}
//                   onChange={handleInputChange}
//                   required
//                 >
//                   <option value="">Select Number of Guests</option>
//                   <option value="1">1 Guest</option>
//                   <option value="2">2 Guests</option>
//                   <option value="3">3 Guests</option>
//                   <option value="4">4 Guests</option>
//                   <option value="5">5 Guests</option>
//                   <option value="6">6 Guests</option>
//                   <option value="7">7 Guests</option>
//                   <option value="8">8 Guests</option>
//                 </select>
//               </div>
//               <div className="DiningForm-group">
//                 <label htmlFor="special-requests">Special Requests:</label>
//                 <textarea
//                   id="special-requests"
//                   name="specialRequests"
//                   value={formData.specialRequests}
//                   onChange={handleInputChange}
//                   rows="3"
//                   placeholder="Any dietary restrictions, allergies, or special occasions..."
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="DiningAction-btn DiningPrimary-btn"
//                 style={{ width: "100%" }}
//               >
//                 Confirm Reservation
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HotelDining;

import { useState } from "react";
import "./HotelDining.css";

const HotelDining = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState("");
  const [previewMenu, setPreviewMenu] = useState(null);
  const [formData, setFormData] = useState({
    restaurant: "",
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    specialRequests: "",
  });

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
    });
  };

  const openReservationModal = (restaurantName) => {
    setSelectedRestaurant(restaurantName);
    setFormData((prev) => ({ ...prev, restaurant: restaurantName }));
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeReservationModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleMenuAction = (menuFile, action) => {
    if (action === "download") {
      alert(`Downloading menu: ${menuFile}`);
    } else {
      setPreviewMenu(menuFile);
    }
  };

  const closeMenuPreview = () => {
    setPreviewMenu(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Reservation request submitted successfully! We will contact you shortly to confirm your booking."
    );
    closeReservationModal();
    setFormData({
      restaurant: "",
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      specialRequests: "",
    });
  };

  const restaurants = [
    {
      id: 1,
      name: "Le Jardin",
      cuisine: "French Fine Dining",
      description:
        "Experience the pinnacle of French culinary artistry in our elegant dining room, where classic techniques meet contemporary presentation in an atmosphere of refined luxury.",
      image:
        "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      badge: "Michelin ⭐",
      features: ["Michelin Recommended", "Wine Pairing", "Private Dining"],
      recommendation:
        "Try our signature Duck Confit with seasonal vegetables and our award-winning wine selection from Burgundy.",
      menu: "french-menu.pdf",
    },
    {
      id: 2,
      name: "Sakura Sushi",
      cuisine: "Authentic Japanese",
      description:
        "Immerse yourself in the art of Japanese cuisine with our authentic sushi bar and traditional teppanyaki experience, featuring the freshest ingredients.",
      image:
        "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80",
      badge: "Authentic",
      features: ["Sushi Counter", "Teppanyaki", "Sake Selection"],
      recommendation:
        "Don't miss our Omakase experience featuring the freshest seasonal fish and our signature miso-glazed cod.",
      menu: "japanese-menu.pdf",
    },
    {
      id: 3,
      name: "Villa Italiana",
      cuisine: "Traditional Italian",
      description:
        "Savor authentic Italian flavors in our warm, family-style atmosphere with house-made pasta and wood-fired pizzas crafted by Italian masters.",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      badge: "Traditional",
      features: ["Wood-Fired Oven", "Fresh Pasta", "Italian Wines"],
      recommendation:
        "Our handmade Truffle Risotto and Neapolitan Pizza Margherita are must-try dishes paired with our Chianti Classico.",
      menu: "italian-menu.pdf",
    },
    {
      id: 4,
      name: "Garden Terrace",
      cuisine: "Contemporary International",
      description:
        "Enjoy fresh, healthy cuisine on our beautiful outdoor terrace with panoramic city views and farm-to-table ingredients sourced locally.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      badge: "Farm-to-Table",
      features: ["Outdoor Dining", "Farm-to-Table", "Vegetarian Options"],
      recommendation:
        "Our quinoa-crusted salmon with organic vegetables and our signature avocado toast are perfect for a healthy, delicious meal.",
      menu: "contemporary-menu.pdf",
    },
  ];

  return (
    <div className="DiningContainer">
      {/* Hero Section */}
      <section className="DiningHero">
        <div className="DiningHero-bg"></div>
        <div className="DiningHero-content">
          <h1>Culinary Excellence</h1>
          <p>
            Embark on a gastronomic journey through our world-class restaurants,
            where master chefs create extraordinary dining experiences.
          </p>
          <button
            className="DiningCta-button"
            onClick={() => scrollToSection("restaurants")}
          >
            Explore Our Restaurants
          </button>
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="DiningRestaurants-section" id="restaurants">
        <div className="DiningContainer-inner">
          <h2 className="DiningSection-title">Our Signature Restaurants</h2>
          <p className="DiningSection-subtitle">
            Discover exceptional dining experiences crafted by world-renowned
            chefs
          </p>

          <div className="DiningRestaurants-grid">
            {restaurants.map((restaurant) => (
              <div className="DiningRestaurant-card" key={restaurant.id}>
                <div className="DiningRestaurant-image">
                  <img
                    src={restaurant.image}
                    alt={`${restaurant.name} Restaurant`}
                  />
                  <div className="DiningRestaurant-badge">
                    {restaurant.badge}
                  </div>
                </div>
                <div className="DiningRestaurant-content">
                  <h3 className="DiningRestaurant-name">{restaurant.name}</h3>
                  <p className="DiningCuisine-type">{restaurant.cuisine}</p>
                  <p className="DiningRestaurant-description">
                    {restaurant.description}
                  </p>

                  <div className="DiningRestaurant-features">
                    {restaurant.features.map((feature, index) => (
                      <span className="DiningFeature-tag" key={index}>
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="DiningChef-recommendation">
                    <div className="DiningChef-rec-title">
                      Chef's Recommendation
                    </div>
                    <div className="DiningChef-rec-content">
                      {restaurant.recommendation}
                    </div>
                  </div>

                  <div className="DiningRestaurant-actions">
                    <button
                      className="DiningAction-btn DiningPrimary-btn"
                      onClick={() => openReservationModal(restaurant.name)}
                    >
                      Reserve Table
                    </button>
                    <div className="DiningMenu-options">
                      <button
                        className="DiningAction-btn DiningSecondary-btn"
                        onClick={() =>
                          handleMenuAction(restaurant.menu, "preview")
                        }
                      >
                        Preview Menu
                      </button>
                      <button
                        className="DiningAction-btn DiningTertiary-btn"
                        onClick={() =>
                          handleMenuAction(restaurant.menu, "download")
                        }
                      >
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      {/* <footer className="DiningSimpleFooter">
        <p>
          &copy; {new Date().getFullYear()} Grand Hotel Dining. All rights
          reserved.
        </p>
      </footer> */}

      {/* Reservation Modal */}
      {modalOpen && (
        <div
          className="DiningModal"
          id="reservationModal"
          onClick={(e) =>
            e.target === e.currentTarget && closeReservationModal()
          }
        >
          <div className="DiningModal-content">
            <span className="DiningClose-modal" onClick={closeReservationModal}>
              &times;
            </span>
            <h2>Make a Reservation</h2>
            <form id="reservationForm" onSubmit={handleSubmit}>
              <div className="DiningForm-group">
                <label htmlFor="restaurant">Restaurant:</label>
                <input
                  type="text"
                  id="restaurant"
                  name="restaurant"
                  value={formData.restaurant}
                  readOnly
                />
              </div>
              <div className="DiningForm-group">
                <label htmlFor="name">Full Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div className="DiningForm-group">
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="DiningForm-group">
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="DiningForm-group">
                <label htmlFor="date">Reservation Date:</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split("T")[0]}
                  required
                />
              </div>
              <div className="DiningForm-group">
                <label htmlFor="time">Preferred Time:</label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Time</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="18:30">6:30 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="19:30">7:30 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="20:30">8:30 PM</option>
                  <option value="21:00">9:00 PM</option>
                </select>
              </div>
              <div className="DiningForm-group">
                <label htmlFor="guests">Number of Guests:</label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Number of Guests</option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="7">7 Guests</option>
                  <option value="8">8 Guests</option>
                </select>
              </div>
              <div className="DiningForm-group">
                <label htmlFor="special-requests">Special Requests:</label>
                <textarea
                  id="special-requests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Any dietary restrictions, allergies, or special occasions..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="DiningAction-btn DiningPrimary-btn"
                style={{ width: "100%" }}
              >
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Menu Preview Modal */}
      {previewMenu && (
        <div className="DiningModal" onClick={closeMenuPreview}>
          <div className="DiningModal-content menu-preview">
            <span className="DiningClose-modal" onClick={closeMenuPreview}>
              &times;
            </span>
            <h2>Menu Preview: {previewMenu}</h2>
            <div className="DiningMenu-preview">
              <div className="DiningMenu-header">
                <h3>{restaurants.find((r) => r.menu === previewMenu)?.name}</h3>
                <p>
                  {restaurants.find((r) => r.menu === previewMenu)?.cuisine}
                </p>
              </div>
              <div className="DiningMenu-section">
                <h4>Starters</h4>
                <ul>
                  <li>Seasonal Soup - $12</li>
                  <li>House Salad - $14</li>
                  <li>Bruschetta - $10</li>
                  <li>Signature Pâté - $16</li>
                </ul>
              </div>
              <div className="DiningMenu-section">
                <h4>Main Courses</h4>
                <ul>
                  <li>Chef's Special - $32</li>
                  <li>Vegetarian Option - $26</li>
                  <li>Premium Cut Steak - $42</li>
                  <li>Fresh Catch of the Day - $38</li>
                </ul>
              </div>
              <div className="DiningMenu-section">
                <h4>Desserts</h4>
                <ul>
                  <li>Chocolate Soufflé - $12</li>
                  <li>Crème Brûlée - $10</li>
                  <li>Seasonal Sorbet - $8</li>
                  <li>Cheese Plate - $14</li>
                </ul>
              </div>
              <button
                className="DiningAction-btn DiningPrimary-btn"
                onClick={() => handleMenuAction(previewMenu, "download")}
              >
                Download Full Menu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelDining;
