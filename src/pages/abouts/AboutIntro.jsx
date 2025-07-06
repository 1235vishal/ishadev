import "./AboutIntro.css"; // We'll create this CSS file next

const AboutIntro = () => {
  return (
    <div className="aboutintro">
      <div className="aboutintro-container">
        <div className="aboutintro-content">
                  <h1>Story Of Magnoliya Grand Manor</h1>
                  <h2> WELCOME TO MAGNOLIYA GRAND MANOR</h2>
          <p>
          Welcome to Magnoliya Grand Manor (MgM), where extraordinary events and unforgettable conferences find their home. Attached to the esteemed Hilton Garden Inn, we are proud to be your premier event destination conveniently nestled just 25 miles from the vibrant heart of Washington, D.C., and a mere 12 miles from Dulles International Airport (IAD), ensuring easy accessibility for all your guests.
          </p>
        </div>
        <div className="aboutintro-image">
          {/* Right side image - replace with your actual image */}
          <img src="./aboutpage/imgi_37_about_img-300x203.jpg" alt="Grenda Catering" />
        </div>
      </div>
      <div className="aboutintro-bottom-image">
        {/* Bottom full-width image - replace with your actual image */}
        <img src="./aboutpage/imgi_34_about_bg.jpg" alt="Grenda Event" />
      </div>
    </div>
  );
};

export default AboutIntro;