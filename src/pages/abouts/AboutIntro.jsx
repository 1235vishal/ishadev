import "./AboutIntro.css"; // We'll create this CSS file next

const AboutIntro = () => {
  return (
    <div className="aboutintro">
      <div className="aboutintro-container">
        <div className="aboutintro-content">
          <h1>Welcome to Grenda, a premier catering and event planning company in New York, USA.</h1>
          <p>
            Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside...
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