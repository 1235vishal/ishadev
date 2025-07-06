import bgImage from "../../assets/footerherobg.jpg"; // Replace with your image path
import "./Styles/FooterHero.css";

const FooterHero = () => {
  return (
    <section className="footer-hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="footer-content">
        <p className="top-text">UPCOMING EVENTS? BOOK NOW</p>
        <h1>Let Us Make Your Events Flawless</h1>
        <button className="Footerhero-button">SEND REQUEST</button>
      </div>
    </section>
  );
};

export default FooterHero;
