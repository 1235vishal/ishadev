import { useState } from 'react';
import { FaBed, FaCoffee, FaParking, FaSnowflake, FaStar, FaTv, FaUmbrellaBeach, FaWifi, FaWineGlassAlt } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { MdApartment, MdClose, MdHotel, MdKingBed, MdTouchApp, MdWater, MdZoomOutMap } from 'react-icons/md';
import './Rooms.css';

const Rooms = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showTourModal, setShowTourModal] = useState(false);
  const [currentRoomTitle, setCurrentRoomTitle] = useState('');
  const [tourLink, setTourLink] = useState('');

  // Room data with tour links - updated to match screenshot names
  const roomData = [
    {
      id: 'king-suite',
      title: 'King Suite',
      price: '$499',
      category: ['suites', 'premium'],
      badge: 'Luxury',
      description: 'Our most spacious suite featuring a king bed, separate living area, and premium amenities for the ultimate luxury experience.',
      features: ['King Bed', 'Separate Living Area', '60 sqm', 'Executive Lounge Access'],
      images: [
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=500&fit=crop',
      ],
      amenities: [
        { name: 'King Size Bed', icon: <MdKingBed /> },
        { name: 'Separate Living Area', icon: <MdApartment /> },
        { name: '60 sqm', icon: <MdZoomOutMap /> },
        { name: 'Executive Lounge', icon: <FaStar /> },
        { name: 'Premium WiFi', icon: <FaWifi /> },
        { name: 'Luxury Bedding', icon: <FaBed /> },
        { name: 'Entertainment System', icon: <FaTv /> },
        { name: 'Kitchenette', icon: <FaCoffee /> }
      ],
      tourLink: 'https://www.gotyoulooking.com/1hiltongardenmanassasva/mht.html'
    },
    {
      id: 'standard-king',
      title: 'Standard King',
      price: '$299',
      category: ['standard'],
      badge: 'Popular',
      description: 'Comfortable king room with modern amenities, perfect for business travelers and couples.',
      features: ['King Bed', 'City View', '30 sqm', 'Work Desk'],
      images: [
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=500&fit=crop',
      ],
      amenities: [
        { name: 'King Size Bed', icon: <MdKingBed /> },
        { name: 'City View', icon: <MdApartment /> },
        { name: '30 sqm', icon: <MdZoomOutMap /> },
        { name: 'Free WiFi', icon: <FaWifi /> },
        { name: 'Air Conditioning', icon: <FaSnowflake /> },
        { name: 'Flat Screen TV', icon: <FaTv /> },
        { name: 'Coffee Maker', icon: <FaCoffee /> },
        { name: 'Work Desk', icon: <MdZoomOutMap /> }
      ],
      tourLink: 'https://www.gotyoulooking.com/1hiltongardenmanassasva/mht.html'
    },
    {
      id: 'standard-double-queen',
      title: 'Standard Double Queen',
      price: '$329',
      category: ['standard'],
      badge: 'Family',
      description: 'Spacious room with two queen beds, ideal for families or small groups traveling together.',
      features: ['Two Queen Beds', 'City View', '35 sqm', 'Extra Space'],
      images: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=500&fit=crop',
      ],
      amenities: [
        { name: 'Two Queen Beds', icon: <FaBed /> },
        { name: 'City View', icon: <MdApartment /> },
        { name: '35 sqm', icon: <MdZoomOutMap /> },
        { name: 'Free WiFi', icon: <FaWifi /> },
        { name: 'Air Conditioning', icon: <FaSnowflake /> },
        { name: 'Flat Screen TV', icon: <FaTv /> },
        { name: 'Coffee Maker', icon: <FaCoffee /> },
        { name: 'Extra Seating', icon: <FaParking /> }
      ],
      tourLink: 'https://www.gotyoulooking.com/1hiltongardenmanassasva/mht.html'
    },
    {
      id: 'accessible-king',
      title: 'Accessible King',
      price: '$299',
      category: ['accessible', 'standard'],
      badge: 'Accessible',
      description: 'King room designed for accessibility with wider doorways, roll-in shower, and other ADA-compliant features.',
      features: ['King Bed', 'ADA Compliant', 'Roll-in Shower', '35 sqm'],
      images: [
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=500&fit=crop',
      ],
      amenities: [
        { name: 'King Size Bed', icon: <MdKingBed /> },
        { name: 'ADA Compliant', icon: <FaParking /> },
        { name: 'Roll-in Shower', icon: <MdWater /> },
        { name: '35 sqm', icon: <MdZoomOutMap /> },
        { name: 'Free WiFi', icon: <FaWifi /> },
        { name: 'Air Conditioning', icon: <FaSnowflake /> },
        { name: 'Flat Screen TV', icon: <FaTv /> },
        { name: 'Emergency Features', icon: <FaStar /> }
      ],
      tourLink: 'https://www.gotyoulooking.com/1hiltongardenmanassasva/mht.html'
    },
    {
      id: 'accessible-double-queen',
      title: 'Accessible Double Queen',
      price: '$329',
      category: ['accessible', 'standard'],
      badge: 'Accessible',
      description: 'Spacious accessible room with two queen beds, designed for comfort and accessibility.',
      features: ['Two Queen Beds', 'ADA Compliant', 'Roll-in Shower', '40 sqm'],
      images: [
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=500&fit=crop',
      ],
      amenities: [
        { name: 'Two Queen Beds', icon: <FaBed /> },
        { name: 'ADA Compliant', icon: <FaParking /> },
        { name: 'Roll-in Shower', icon: <MdWater /> },
        { name: '40 sqm', icon: <MdZoomOutMap /> },
        { name: 'Free WiFi', icon: <FaWifi /> },
        { name: 'Air Conditioning', icon: <FaSnowflake /> },
        { name: 'Flat Screen TV', icon: <FaTv /> },
        { name: 'Emergency Features', icon: <FaStar /> }
      ],
      tourLink: 'https://www.gotyoulooking.com/1hiltongardenmanassasva/mht.html'
    },
    {
      id: 'premium-king',
      title: 'Premium King',
      price: '$399',
      category: ['premium'],
      badge: 'Premium',
      description: 'Upgraded king room with premium amenities, enhanced comfort, and superior views.',
      features: ['King Bed', 'Premium View', '40 sqm', 'Enhanced Amenities'],
      images: [
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=500&fit=crop',
      ],
      amenities: [
        { name: 'King Size Bed', icon: <MdKingBed /> },
        { name: 'Premium View', icon: <MdApartment /> },
        { name: '40 sqm', icon: <MdZoomOutMap /> },
        { name: 'Premium WiFi', icon: <FaWifi /> },
        { name: 'Enhanced Bedding', icon: <FaBed /> },
        { name: 'Smart TV', icon: <FaTv /> },
        { name: 'Mini Bar', icon: <FaWineGlassAlt /> },
        { name: 'Bathrobes', icon: <FaUmbrellaBeach /> }
      ],
      tourLink: 'https://www.gotyoulooking.com/1hiltongardenmanassasva/mht.html'
    }
  ];

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const openVirtualTour = (title, link) => {
    setCurrentRoomTitle(title);
    setTourLink(link);
    setShowTourModal(true);
  };

  const closeVirtualTour = () => {
    setShowTourModal(false);
  };

  const bookRoom = (title) => {
    alert(`Booking request initiated for: ${title}\n\nYou will be redirected to our booking system.`);
  };

  const filteredRooms = activeFilter === 'all' 
    ? roomData 
    : roomData.filter(room => room.category.includes(activeFilter));

  // Update filter buttons to match new categories
  const filterButtons = [
    { key: 'all', label: 'All Rooms', icon: <MdHotel /> },
    { key: 'standard', label: 'Standard', icon: <FaBed /> },
    { key: 'premium', label: 'Premium', icon: <FaStar /> },
    { key: 'suites', label: 'Suites', icon: <MdKingBed /> },
    { key: 'accessible', label: 'Accessible', icon: <FaParking /> }
  ];

  return (
    <div className="rooms-page">
      {/* Hero Section with Iframe */}
      <section className="rooms-hero">
        <div className="hero-iframe-container">
          <iframe 
            src="https://www.gotyoulooking.com/1hiltongardenmanassasva/mht.html" 
            title="Hotel Virtual Tour"
            className="hero-iframe"
            allowFullScreen
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Luxury Accommodations</h1>
          <p className="hero-description">
            Discover our exquisite collection of rooms and suites, each designed 
            to provide the ultimate in comfort and sophistication with breathtaking views.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">4.9</span>
              <span className="stat-label">Rating</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">200+</span>
              <span className="stat-label">Rooms</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5★</span>
              <span className="stat-label">Luxury</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <div className="filter-section">
        <div className="filter-container">
          <div className="filter-header">
            <h3>Filter by Category</h3>
            <span className="filter-count">{filteredRooms.length} rooms available</span>
          </div>
          <div className="filter-buttons">
            {filterButtons.map(filter => (
              <button
                key={filter.key}
                className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                onClick={() => handleFilterChange(filter.key)}
              >
                <span className="filter-icon">{filter.icon}</span>
                <span className="filter-label">{filter.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Rooms Grid */}
      <section className="rooms-section">
        <div className="container">
          <div className="rooms-grid">
            {filteredRooms.map(room => (
              <div className="room-card" key={room.id}>
                <div className="room-image">
                  <img src={room.images[0]} alt={room.title} />
                  <div className="room-badge">{room.badge}</div>
                  <button 
                    className="virtual-tour-btn"
                    onClick={() => openVirtualTour(room.title, room.tourLink)}
                  >
                    <span className="tour-icon">360°</span>
                    <span>Virtual Tour</span>
                  </button>
                  <div className="room-overlay">
                    <div className="room-features-preview">
                      {room.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="feature-preview">{feature}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="room-content">
                  <div className="room-header">
                    <h3 className="room-title">{room.title}</h3>
                    <div className="room-rating">
                      <span className="stars">★★★★★</span>
                      <span className="rating-score">4.8</span>
                    </div>
                  </div>
                  <div className="room-features">
                    {room.features.map((feature, index) => (
                      <span key={index} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                  <p className="room-description">{room.description}</p>
                  
                  <div className="room-amenities">
                    <h4>Key Amenities:</h4>
                    <div className="amenities-grid">
                      {room.amenities.slice(0, 8).map((amenity, index) => (
                        <div key={index} className="amenity-item">
                          <span className="amenity-icon">{amenity.icon}</span>
                          <span className="amenity-name">{amenity.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="room-price">
                    <div className="price-info">
                      <span className="price">{room.price}</span>
                      <span className="price-unit">per night</span>
                    </div>
                    <div className="price-note">
                      <span className="original-price">${parseInt(room.price.slice(1)) + 50}</span>
                      <span className="discount">Save $50</span>
                    </div>
                  </div>
                  <button 
                    className="book-btn"
                    onClick={() => bookRoom(room.title)}
                  >
                    <span className="book-text">Book Now</span>
                    <span className="book-arrow"><IoIosArrowForward /></span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Modal */}
      {showTourModal && (
        <div className="virtual-tour-modal">
          <div className="modal-overlay" onClick={closeVirtualTour}></div>
          <div className="tour-viewer">
            <button 
              className="close-tour-btn"
              onClick={closeVirtualTour}
            >
              <MdClose />
            </button>
            <div className="tour-content">
              <div className="tour-header">
                <h2>{currentRoomTitle}</h2>
                <span className="tour-subtitle">360° Virtual Experience</span>
              </div>
              <div className="tour-frame">
                <iframe
                  src={tourLink}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  title={`${currentRoomTitle} Virtual Tour`}
                />
              </div>
              <div className="tour-instructions">
                <div className="instruction-item">
                  <span className="instruction-icon"><MdZoomOutMap /></span>
                  <span>Drag to look around</span>
                </div>
                <div className="instruction-item">
                  <span className="instruction-icon"><MdZoomOutMap /></span>
                  <span>Scroll to zoom</span>
                </div>
                <div className="instruction-item">
                  <span className="instruction-icon"><MdTouchApp /></span>
                  <span>Touch & drag on mobile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rooms;