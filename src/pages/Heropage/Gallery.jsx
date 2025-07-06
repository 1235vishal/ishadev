import { useEffect, useRef } from "react";
import aboutBackground from "../../assets/imgi_8_banner-6.jpg"; // Adjust path if needed
import "./AboutUsHero.css";
import { initAboutUsAnimation } from "./aboutUsAnimations";

const Gallery = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    initAboutUsAnimation(heroRef);
  }, []);

  return (
    <section className="about-hero-section" ref={heroRef}>
      <div
        className="parallax-bg"
        style={{ backgroundImage: `url(${aboutBackground})` }}
      ></div>
      <div className="hero-content">
        <h1>Gallery</h1>
        <p>
          <span className="breadcrumb">HOME</span> &nbsp; ❯ &nbsp;
          <span className="breadcrumb-active">Gallery</span>
        </p>
      </div>
    </section>
  );
};

export default Gallery;
