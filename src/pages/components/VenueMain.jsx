import { useState } from 'react';
import './Styles/VenueMain.css';

const VenueMain = () => {
  const [activeVenue, setActiveVenue] = useState(null);
  const [activeLayouts, setActiveLayouts] = useState({
    'grand-ballroom': 'Banquet',
    'small-ballrooms': 'Banquet',
    'garden-area': 'Ceremony',
    'rooftop-terrace': 'Cocktail',
    'water-view-lounge': 'Lounge'
  });

  const handlePinClick = (venueId) => {
    setActiveVenue(venueId);
  };

  const handleLayoutClick = (venueId, layout) => {
    setActiveLayouts(prev => ({
      ...prev,
      [venueId]: layout
    }));
  };

  const handle360View = (e) => {
    e.target.style.background = 'linear-gradient(135deg, #ff6b6b, #ee5a52)';
    e.target.textContent = 'Loading 360° Tour...';

    setTimeout(() => {
      e.target.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
      e.target.textContent = 'View 360° Tour';
    }, 2000);
  };

  return (
    <div className="venumain-container">
      {/* Background Video */}
      <div className="venumain-video-background">
        <video autoPlay loop muted playsInline>
          <source src="https://assets.mixkit.co/videos/preview/mixkit-wedding-venue-hall-with-chandeliers-15800-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="venumain-video-overlay"></div>
      </div>

      <div className="venumain-content">
        <div className="venumain-header">
          <h1>Elegant Event Venues</h1>
          <p>Discover our premium venues with interactive map and detailed information</p>
        </div>

        <div className="venumain-main-content">
          <div className="venumain-map-container">
            <h2>Interactive Venue Map</h2>
            <div className="venumain-venue-map">
              <div 
                className={`venumain-venue-pin venumain-pin-grand-ballroom ${activeVenue === 'grand-ballroom' ? 'venumain-active' : ''}`}
                onClick={() => handlePinClick('grand-ballroom')}
              >
                <div className="venumain-pin-label">Grand Ballroom</div>
              </div>
              <div 
                className={`venumain-venue-pin venumain-pin-small-ballrooms ${activeVenue === 'small-ballrooms' ? 'venumain-active' : ''}`}
                onClick={() => handlePinClick('small-ballrooms')}
              >
                <div className="venumain-pin-label">Small Ballrooms</div>
              </div>
              <div 
                className={`venumain-venue-pin venumain-pin-garden-area ${activeVenue === 'garden-area' ? 'venumain-active' : ''}`}
                onClick={() => handlePinClick('garden-area')}
              >
                <div className="venumain-pin-label">Garden Area</div>
              </div>
              <div 
                className={`venumain-venue-pin venumain-pin-rooftop-terrace ${activeVenue === 'rooftop-terrace' ? 'venumain-active' : ''}`}
                onClick={() => handlePinClick('rooftop-terrace')}
              >
                <div className="venumain-pin-label">Rooftop Terrace</div>
              </div>
              <div 
                className={`venumain-venue-pin venumain-pin-water-view-lounge ${activeVenue === 'water-view-lounge' ? 'venumain-active' : ''}`}
                onClick={() => handlePinClick('water-view-lounge')}
              >
                <div className="venumain-pin-label">Water View Lounge</div>
              </div>
            </div>
          </div>

          <div className="venumain-info-panel">
            {!activeVenue ? (
              <div className="venumain-default-info">
                <h3>Welcome to Our Venues</h3>
                <p>
                  Click on any pin on the map to explore detailed information about
                  each venue, including capacity charts, layout options, and photo
                  galleries.
                </p>
              </div>
            ) : (
              <>
                {/* Grand Ballroom Info */}
                {activeVenue === 'grand-ballroom' && (
                  <div className="venumain-venue-info venumain-active">
                    <h2>Grand Ballroom</h2>
                    <p>
                      Our flagship venue featuring elegant chandeliers, marble floors,
                      and state-of-the-art audiovisual equipment.
                    </p>

                    <div className="venumain-capacity-chart">
                      <h4>Capacity by Layout</h4>
                      <p><strong>Banquet:</strong> 250 guests</p>
                      <p><strong>Theater:</strong> 400 guests</p>
                      <p><strong>Classroom:</strong> 120 guests</p>
                    </div>

                    <div className="venumain-layout-options">
                      <button 
                        className={`venumain-layout-btn ${activeLayouts['grand-ballroom'] === 'Banquet' ? 'venumain-active' : ''}`}
                        onClick={() => handleLayoutClick('grand-ballroom', 'Banquet')}
                      >
                        Banquet
                      </button>
                      <button 
                        className={`venumain-layout-btn ${activeLayouts['grand-ballroom'] === 'Theater' ? 'venumain-active' : ''}`}
                        onClick={() => handleLayoutClick('grand-ballroom', 'Theater')}
                      >
                        Theater
                      </button>
                      <button 
                        className={`venumain-layout-btn ${activeLayouts['grand-ballroom'] === 'Classroom' ? 'venumain-active' : ''}`}
                        onClick={() => handleLayoutClick('grand-ballroom', 'Classroom')}
                      >
                        Classroom
                      </button>
                    </div>

                    <ul className="venumain-features-list">
                      <li>Climate controlled environment</li>
                      <li>Professional lighting system</li>
                      <li>Built-in sound system</li>
                      <li>Bridal suite access</li>
                    </ul>

                    <div className="venumain-photo-gallery">
                      <div className="venumain-photo-placeholder">
                        <img src="https://images.unsplash.com/photo-1519671482749-fd09be917c85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Grand Ballroom Interior" />
                      </div>
                      <div className="venumain-photo-placeholder">
                        <img src="https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Grand Ballroom Stage" />
                      </div>
                      <div className="venumain-photo-placeholder">
                        <img src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Grand Ballroom Dining" />
                      </div>
                      <div className="venumain-photo-placeholder">
                        <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Grand Ballroom Reception" />
                      </div>
                    </div>

                    <button className="venumain-view-360" onClick={handle360View}>View 360° Tour</button>
                  </div>
                )}

                {/* Small Ballrooms Info */}
                {activeVenue === 'small-ballrooms' && (
                  <div className="venumain-venue-info venumain-active">
                    <h2>Small Ballrooms</h2>
                    <p>
                      Intimate spaces perfect for smaller gatherings, corporate
                      meetings, and private celebrations.
                    </p>

                    <div className="venumain-capacity-chart">
                      <h4>Capacity by Layout</h4>
                      <p><strong>Banquet:</strong> 80 guests</p>
                      <p><strong>Theater:</strong> 120 guests</p>
                      <p><strong>Classroom:</strong> 50 guests</p>
                    </div>

                    <div className="venumain-layout-options">
                      <button 
                        className={`venumain-layout-btn ${activeLayouts['small-ballrooms'] === 'Banquet' ? 'venumain-active' : ''}`}
                        onClick={() => handleLayoutClick('small-ballrooms', 'Banquet')}
                      >
                        Banquet
                      </button>
                      <button 
                        className={`venumain-layout-btn ${activeLayouts['small-ballrooms'] === 'Theater' ? 'venumain-active' : ''}`}
                        onClick={() => handleLayoutClick('small-ballrooms', 'Theater')}
                      >
                        Theater
                      </button>
                      <button 
                        className={`venumain-layout-btn ${activeLayouts['small-ballrooms'] === 'Classroom' ? 'venumain-active' : ''}`}
                        onClick={() => handleLayoutClick('small-ballrooms', 'Classroom')}
                      >
                        Classroom
                      </button>
                    </div>

                    <ul className="venumain-features-list">
                      <li>Modular room dividers</li>
                      <li>Natural lighting</li>
                      <li>Private entrance</li>
                      <li>Catering kitchen access</li>
                    </ul>

                    <div className="venumain-photo-gallery">
                      <div className="venumain-photo-placeholder">
                        <img src="https://images.unsplash.com/photo-1572111504020-d1d8d5ca3a1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Small Ballroom Main" />
                      </div>
                      <div className="venumain-photo-placeholder">
                        <img src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Small Ballroom Meeting" />
                      </div>
                      <div className="venumain-photo-placeholder">
                        <img src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Small Ballroom Cocktail" />
                      </div>
                      <div className="venumain-photo-placeholder">
                        <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Small Ballroom Dining" />
                      </div>
                    </div>

                    <button className="venumain-view-360" onClick={handle360View}>View 360° Tour</button>
                  </div>
                )}

                {/* Garden Area Info */}
                {activeVenue === 'garden-area' && (
                  <div className="venumain-venue-info venumain-active">
                    <h2>Garden Area</h2>
                    <p>
                      Beautiful outdoor space surrounded by landscaped gardens, perfect
                      for ceremonies and receptions.
                    </p>

                    <div className="venumain-capacity-chart">
                      <h4>Capacity by Layout</h4>
                      <p><strong>Ceremony:</strong> 200 guests</p>
                      <p><strong>Reception:</strong> 150 guests</p>
                      <p><strong>Cocktail:</strong> 250 guests</p>
                    </div>

                    <div className="venumain-layout-options">
                      <button 
                        className={`venumain-layout-btn ${activeLayouts['garden-area'] === 'Ceremony' ? 'venumain-active' : ''}`}
                        onClick={() => handleLayoutClick('garden-area', 'Ceremony')}
                      >
                        Ceremony
                      </button>
                      <button 
                        className={`venumain-layout-btn ${activeLayouts['garden-area'] === 'Reception' ? 'venumain-active' : ''}`}
                        onClick={() => handleLayoutClick('garden-area', 'Reception')}
                      >
                        Reception
                      </button>
                      <button 
                        className={`venumain-layout-btn ${activeLayouts['garden-area'] === 'Cocktail' ? 'venumain-active' : ''}`}
                        onClick={() => handleLayoutClick('garden-area', 'Cocktail')}
                      >
                        Cocktail
                      </button>
                    </div>

                    <ul className="venumain-features-list">
                      <li>Seasonal flower arrangements</li>
                      <li>Weather protection tent option</li>
                      <li>Garden lighting</li>
                      <li>Fountain centerpiece</li>
                    </ul>

                    <div className="venumain-photo-gallery">
                      <div className="venumain-photo-placeholder">
                        <img src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Garden View" />
                      </div>
                      <div className="venumain-photo-placeholder">
                        <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Garden Ceremony" />
                      </div>
                      <div className="venumain-photo-placeholder">
                        <img src="https://images.unsplash.com/photo-1519671482749-fd09be917c85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Garden Evening" />
                      </div>
                      <div className="venumain-photo-placeholder">
                        <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Garden Fountain" />
                      </div>
                    </div>

                    <button className="venumain-view-360" onClick={handle360View}>View 360° Tour</button>
                  </div>
                )}

                {/* Rooftop Terrace Info */}
                {activeVenue === 'rooftop-terrace' && (
                  <div className="venumain-venue-info venumain-active">
                    <h2>Rooftop Terrace</h2>
                    <p>
                      Stunning elevated venue with panoramic city views, ideal for
                      cocktail parties and exclusive events.
                    </p>

                    <div className="venumain-capacity-chart">
                      <h4>Capacity by Layout</h4>
                      <p><strong>Cocktail:</strong> 180 guests</p>
                      <p><strong>Seated Dinner:</strong> 100 guests</p>
                      <p><strong>Standing Reception:</strong> 220 guests</p>
                    </div>

                    <div className="venumain-layout-options">
                      <button 
                        className={`venumain-layout-btn ${activeLayouts['rooftop-terrace'] === 'Cocktail' ? 'venumain-active' : ''}`}
                        onClick={() => handleLayoutClick('rooftop-terrace', 'Cocktail')}
                      >
                        Cocktail
                      </button>
                      <button 
                        className={`venumain-layout-btn ${activeLayouts['rooftop-terrace'] === 'Seated' ? 'venumain-active' : ''}`}
                        onClick={() => handleLayoutClick('rooftop-terrace', 'Seated')}
                      >
                        Seated
                      </button>
                      <button 
                        className={`venumain-layout-btn ${activeLayouts['rooftop-terrace'] === 'Reception' ? 'venumain-active' : ''}`}
                        onClick={() => handleLayoutClick('rooftop-terrace', 'Reception')}
                      >
                        Reception
                      </button>
                    </div>

                    <ul className="venumain-features-list">
                      <li>360° city skyline views</li>
                      <li>Retractable canopy</li>
                      <li>Built-in bar stations</li>
                      <li>Glass windscreens</li>
                    </ul>

                    <div className="venumain-photo-gallery">
                      <div className="venumain-photo-placeholder">
                        <img src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Rooftop Skyline" />
                      </div>
                      <div className="venumain-photo-placeholder">
                        <img src="https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Rooftop Sunset" />
                      </div>
                      <div className="venumain-photo-placeholder">
                        <img src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Rooftop Bar" />
                      </div>
                      <div className="venumain-photo-placeholder">
                        <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Rooftop Party" />
                      </div>
                    </div>

                    <button className="venumain-view-360" onClick={handle360View}>View 360° Tour</button>
                  </div>
                )}

                {/* Water View Lounge Info */}
                {activeVenue === 'water-view-lounge' && (
                  <div className="venumain-venue-info venumain-active">
                    <h2>Water View Lounge</h2>
                    <p>
                      Sophisticated lounge space with floor-to-ceiling windows
                      overlooking the waterfront.
                    </p>

                    <div className="venumain-capacity-chart">
                      <h4>Capacity by Layout</h4>
                      <p><strong>Lounge Style:</strong> 75 guests</p>
                      <p><strong>Theater:</strong> 90 guests</p>
                      <p><strong>Boardroom:</strong> 25 guests</p>
                    </div>

                    <div className="venumain-layout-options">
                      <button 
                        className={`venumain-layout-btn ${activeLayouts['water-view-lounge'] === 'Lounge' ? 'venumain-active' : ''}`}
                        onClick={() => handleLayoutClick('water-view-lounge', 'Lounge')}
                      >
                        Lounge
                      </button>
                      <button 
                        className={`venumain-layout-btn ${activeLayouts['water-view-lounge'] === 'Theater' ? 'venumain-active' : ''}`}
                        onClick={() => handleLayoutClick('water-view-lounge', 'Theater')}
                      >
                        Theater
                      </button>
                      <button 
                        className={`venumain-layout-btn ${activeLayouts['water-view-lounge'] === 'Boardroom' ? 'venumain-active' : ''}`}
                        onClick={() => handleLayoutClick('water-view-lounge', 'Boardroom')}
                      >
                        Boardroom
                      </button>
                    </div>

                    <ul className="venumain-features-list">
                      <li>Waterfront panoramic views</li>
                      <li>Modern furnishings</li>
                      <li>Premium sound system</li>
                      <li>Private balcony access</li>
                    </ul>

                    <div className="venumain-photo-gallery">
                      <div className="venumain-photo-placeholder">
                        <img src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Water View" />
                      </div>
                      <div className="venumain-photo-placeholder">
                        <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Lounge Setup" />
                      </div>
                      <div className="venumain-photo-placeholder">
                        <img src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Balcony View" />
                      </div>
                      <div className="venumain-photo-placeholder">
                        <img src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Interior Design" />
                      </div>
                    </div>

                    <button className="venumain-view-360" onClick={handle360View}>View 360° Tour</button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueMain;