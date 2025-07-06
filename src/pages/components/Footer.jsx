// import { ChevronUp, Facebook, Instagram, MapPin, Twitter, Youtube } from 'lucide-react';

// const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* Main Footer Content */}
//         <div className="footer-content">
//           {/* Left Section - Contact & Brand */}
//           <div className="footer-left">
//             <div className="contact-section">
//               <h3 className="contact-title">Call us for any help</h3>
//               <a href="tel:+17038435553" className="phone-number">+1 (703) 843-553</a>
//             </div>
            
//             <div className="email-section">
//               <h3 className="email-title">Email us for support</h3>
//               <a href="mailto:sales@magnoliyagrand.com" className="email-address">sales@magnoliyagrand.com</a>
//             </div>

//             {/* Brand Section */}
//             <div className="brand-section">
//               <div className="logo-container">
//                 <img 
//                   src="../../../public/logobest.png" 
//                   alt="Grenda Logo" 
//                   className="logo-image"
//                 />
//               </div>
//               <p className="brand-description">
//                 Apparently we had reached a great height in the atmo-sphere, for the sky was a dead black, and the stars had ceased to twinkle.
//               </p>
//             </div>
//           </div>

//           {/* Center Section - Navigation */}
//           <div className="footer-center">
//             <h3 className="section-title">Explore</h3>
//             <nav className="nav-menu">
//               <a href="#about-us" className="nav-link">About Us</a>
//               <a href="#services" className="nav-link">Services</a>
//               <a href="#gallery" className="nav-link">Gallery</a>
//               <a href="#blog" className="nav-link">Blog</a>
//               <a href="#contact" className="nav-link">Contact</a>
//             </nav>
//           </div>

//           {/* Right Section - Newsletter */}
//           <div className="footer-right">
//             <h3 className="section-title">Join Our Mailing List</h3>
//             <p className="newsletter-description">
//               Receive invitations, updates and bonuses for purchasing
//             </p>
//             <div className="newsletter-form">
//               <input 
//                 type="email" 
//                 placeholder="Enter Email..." 
//                 className="email-input"
//               />
//               <button type="submit" className="subscribe-btn">
//                 SUBSCRIBE
//               </button>
//             </div>

//             {/* Social Media Icons */}
//             <div className="social-icons">
//               <a href="#" className="social-icon" aria-label="Facebook">
//                 <Facebook size={16} />
//               </a>
//               <a href="#" className="social-icon" aria-label="Twitter">
//                 <Twitter size={16} />
//               </a>
//               <a href="#" className="social-icon" aria-label="YouTube">
//                 <Youtube size={16} />
//               </a>
//               <a href="#" className="social-icon" aria-label="Instagram">
//                 <Instagram size={16} />
//               </a>
//               <a href="#" className="social-icon" aria-label="Pinterest">
//                 <MapPin size={16} />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="footer-bottom">
//           <div className="footer-bottom-content">
//             <p className="copyright">
//               Copyright © 2025. All Rights Reserved.
//             </p>
//             <div className="footer-bottom-right">
//               <p className="crafted-by">
//                 Carefully crafted by <strong> Magnoliya Grand.</strong>
//               </p>
//               <button 
//                 onClick={scrollToTop}
//                 className="back-to-top"
//                 aria-label="Back to top"
//               >
//                 <span>BACK TO TOP</span>
//                 <ChevronUp size={16} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .footer {
//           background-color:#FFFFFF;
//           padding: 60px 0 0;
//           font-family: 'Arial', sans-serif;
//           color: #333;
//         }

//         .footer-container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 20px;
//         }

//         .footer-content {
//           display: grid;
//           grid-template-columns: 2fr 1fr 1.5fr;
//           gap: 60px;
//           margin-bottom: 40px;
//         }

//         /* Left Section */
//         .footer-left {
//           display: flex;
//           flex-direction: column;
//           gap: 40px;
//         }

//         .contact-section h3,
//         .email-section h3 {
//           font-size: 14px;
//           color: #999;
//           margin: 0 0 8px 0;
//           font-weight: normal;
//         }

//         .phone-number {
//           font-size: 24px;
//           font-weight: bold;
//           color: #333;
//           text-decoration: none;
//           display: block;
//         }

//         .phone-number:hover {
//           color: #d4a574;
//         }

//         .email-address {
//           font-size: 18px;
//           color: #d4a574;
//           text-decoration: none;
//           display: block;
//         }

//         .email-address:hover {
//           opacity: 0.8;
//         }

//         .brand-section {
//           margin-top: 20px;
//         }

//         .logo-container {
//           display: flex;
//           justify-content: flex-start;
//           margin-bottom: 20px;
//         }

//         .logo-image {
//           max-width: 200px;
//           height: auto;
//           max-height: 80px;
//         }

//         .logo {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 50px;
//           height: 50px;
//           background: linear-gradient(135deg, #333 0%, #666 100%);
//           border-radius: 4px;
//           position: relative;
//         }

//         .logo-m,
//         .logo-g {
//           font-size: 18px;
//           font-weight: bold;
//           color: white;
//           position: absolute;
//         }

//         .logo-m {
//           top: 8px;
//           left: 12px;
//         }

//         .logo-g {
//           bottom: 8px;
//           right: 12px;
//         }

//         .brand-text h2 {
//           font-size: 28px;
//           margin: 0;
//           color: #333;
//           font-weight: bold;
//         }

//         .brand-text p {
//           font-size: 14px;
//           margin: 2px 0 0 0;
//           color: #666;
//         }

//         .brand-description {
//           font-size: 14px;
//           color: #999;
//           margin: 0;
//           font-style: italic;
//         }

//         /* Center Section */
//         .footer-center .section-title {
//           font-size: 22px;
//           color: #333;
//           margin: 0 0 25px 0;
//           font-weight: bold;
//         }

//         .nav-menu {
//           display: flex;
//           flex-direction: column;
//           gap: 12px;
//         }

//         .nav-link {
//           color: #999;
//           text-decoration: none;
//           font-size: 16px;
//           transition: color 0.3s ease;
//         }

//         .nav-link:hover {
//           color: #d4a574;
//         }

//         /* Right Section */
//         .footer-right .section-title {
//           font-size: 22px;
//           color: #333;
//           margin: 0 0 15px 0;
//           font-weight: bold;
//         }

//         .newsletter-description {
//           font-size: 14px;
//           color: #999;
//           margin: 0 0 25px 0;
//           line-height: 1.5;
//         }

//         .newsletter-form {
//           display: flex;
//           flex-direction: column;
//           gap: 15px;
//           margin-bottom: 30px;
//         }

//         .email-input {
//           padding: 12px 15px;
//           border: 1px solid #ddd;
//           border-radius: 4px;
//           font-size: 14px;
//           outline: none;
//         }

//         .email-input:focus {
//           border-color: #d4a574;
//         }

//         .email-input::placeholder {
//           color: #999;
//         }

//         .subscribe-btn {
//           padding: 12px 25px;
//           background-color: #d4a574;
//           color: white;
//           border: none;
//           border-radius: 25px;
//           font-size: 14px;
//           font-weight: bold;
//           cursor: pointer;
//           letter-spacing: 0.5px;
//           transition: background-color 0.3s ease;
//         }

//         .subscribe-btn:hover {
//           background-color: #c19660;
//         }

//         .social-icons {
//           display: flex;
//           gap: 10px;
//         }

//         .social-icon {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 32px;
//           height: 32px;
//           background-color: #f0f0f0;
//           color: #999;
//           text-decoration: none;
//           border-radius: 50%;
//           transition: all 0.3s ease;
//         }

//         .social-icon:hover {
//           background-color: #d4a574;
//           color: white;
//         }

//         /* Bottom Section */
//         .footer-bottom {
//           border-top: 1px solid #eee;
//           padding: 25px 0;
//         }

//         .footer-bottom-content {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         .copyright {
//           font-size: 14px;
//           color: #999;
//           margin: 0;
//         }

//         .footer-bottom-right {
//           display: flex;
//           align-items: center;
//           gap: 30px;
//         }

//         .crafted-by {
//           font-size: 14px;
//           color: #999;
//           margin: 0;
//         }

//         .crafted-by strong {
//           color: #333;
//         }

//         .back-to-top {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           background: none;
//           border: none;
//           color: #999;
//           cursor: pointer;
//           font-size: 12px;
//           letter-spacing: 0.5px;
//           transition: color 0.3s ease;
//         }

//         .back-to-top:hover {
//           color: #d4a574;
//         }

//         /* Responsive Design */
//         @media (max-width: 768px) {
//           .footer {
//             padding: 40px 0 0;
//           }

//           .footer-container {
//             padding: 0 15px;
//           }

//           .footer-content {
//             grid-template-columns: 1fr;
//             gap: 40px;
//           }

//           .footer-left {
//             gap: 30px;
//           }

//           .contact-section,
//           .email-section {
//             text-align: center;
//           }

//           .phone-number {
//             font-size: 20px;
//           }

//           .email-address {
//             font-size: 16px;
//           }

//           .logo-container {
//             justify-content: center;
//           }

//           .brand-text {
//             text-align: center;
//           }

//           .brand-text h2 {
//             font-size: 24px;
//           }

//           .brand-description {
//             text-align: center;
//           }

//           .footer-center,
//           .footer-right {
//             text-align: center;
//           }

//           .nav-menu {
//             align-items: center;
//           }

//           .social-icons {
//             justify-content: center;
//           }

//           .footer-bottom-content {
//             flex-direction: column;
//             gap: 15px;
//             text-align: center;
//           }

//           .footer-bottom-right {
//             flex-direction: column;
//             gap: 15px;
//           }
//         }

//         @media (max-width: 480px) {
//           .footer-content {
//             gap: 30px;
//           }

//           .brand-text h2 {
//             font-size: 20px;
//           }

//           .section-title {
//             font-size: 18px !important;
//           }

//           .newsletter-form {
//             max-width: 280px;
//             margin: 0 auto 30px;
//           }

//           .phone-number {
//             font-size: 18px;
//           }
//         }
//       `}</style>
//     </footer>
//   );
// };

// export default Footer;


import { ChevronUp, Facebook, Instagram, MapPin, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom'; // ✅ Import Link


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="hotelfooter">
      <div className="hotelfooter-container">
        {/* Main Footer Content */}
        <div className="hotelfooter-content">
          {/* Left Section - Contact & Brand */}
          <div className="hotelfooter-left">
            <div className="hotelfooter-contact-section">
              <h3 className="hotelfooter-contact-title">Call us for any help</h3>
              <a href="tel:+17038435553" className="hotelfooter-phone-number">+1 (703) 843-553</a>
            </div>
            
            <div className="hotelfooter-email-section">
              <h3 className="hotelfooter-email-title">Email us for support</h3>
              <a href="mailto:sales@magnoliyagrand.com" className="hotelfooter-email-address">sales@magnoliyagrand.com</a>
            </div>

            {/* Brand Section */}
            <div className="hotelfooter-brand-section">
              <div className="hotelfooter-logo-container">
                <img 
                  src="../../../public/logobest.png" 
                  alt="Grenda Logo" 
                  className="hotelfooter-logo-image"
                />
              </div>
              <p className="hotelfooter-brand-description">
                Apparently we had reached a great height in the atmo-sphere, for the sky was a dead black, and the stars had ceased to twinkle.
              </p>
            </div>
          </div>

          {/* Center Section - Navigation */}
          <div className="hotelfooter-center">
            <h3 className="hotelfooter-section-title">Explore</h3>
            <nav className="hotelfooter-nav-menu">
            <Link to="/Aboutus" className="hotelfooter-nav-link">About Us</Link>
    <Link to="/services" className="hotelfooter-nav-link">Services</Link>
    <Link to="/Gallerypage" className="hotelfooter-nav-link">Gallery</Link>
    <Link to="/blog" className="hotelfooter-nav-link">Blog</Link>
    <Link to="/ContactUs" className="hotelfooter-nav-link">Contact</Link>
            </nav>
          </div>

          {/* Right Section - Newsletter */}
          <div className="hotelfooter-right">
            <h3 className="hotelfooter-section-title">Join Our Mailing List</h3>
            <p className="hotelfooter-newsletter-description">
              Receive invitations, updates and bonuses for purchasing
            </p>
            <div className="hotelfooter-newsletter-form">
              <input 
                type="email" 
                placeholder="Enter Email..." 
                className="hotelfooter-email-input"
              />
              <button type="submit" className="hotelfooter-subscribe-btn">
                SUBSCRIBE
              </button>
            </div>

            {/* Social Media Icons */}
           {/* Social Media Icons */}
<div className="hotelfooter-social-icons">
  <a
    href="https://www.facebook.com/magnoliyagrand/"
    className="hotelfooter-social-icon"
    aria-label="Facebook"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Facebook size={16} />
  </a>

  <a
    href="https://x.com/MagnoliyaGrand"
    className="hotelfooter-social-icon"
    aria-label="Twitter"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Twitter size={16} />
  </a>

  <a
    href="https://www.youtube.com/channel/UCNG6YVfx2i9b5O98vgE7rFw"
    className="hotelfooter-social-icon"
    aria-label="YouTube"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Youtube size={16} />
  </a>

  <a
    href="https://www.instagram.com/magnoliyagrand/"
    className="hotelfooter-social-icon"
    aria-label="Instagram"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Instagram size={16} />
  </a>

  <a
    href="https://www.linkedin.com/in/magnoliya-grand-7727b92ab"
    className="hotelfooter-social-icon"
    aria-label="LinkedIn"
    target="_blank"
    rel="noopener noreferrer"
  >
    <MapPin size={16} />
  </a>

  <a
  href="https://www.tiktok.com/@magnoliyagrand?_t=ZT-8tbtueOhSP5&_r=1"
  className="hotelfooter-social-icon"
  aria-label="TikTok"
  target="_blank"
  rel="noopener noreferrer"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12.43 1.5h3.77a5.29 5.29 0 0 0 4.3 4.32v3.66a8.74 8.74 0 0 1-4.15-1.06v6.95a6.96 6.96 0 1 1-6.96-6.96c.8 0 1.55.15 2.24.44v3.77a3.25 3.25 0 1 0 1.8 2.91V1.5z" />
  </svg>
</a>

</div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="hotelfooter-bottom">
          <div className="hotelfooter-bottom-content">
            <p className="hotelfooter-copyright">
              Copyright © 2025. All Rights Reserved.
            </p>
            <div className="hotelfooter-bottom-right">
              <p className="hotelfooter-crafted-by">
                Carefully crafted by <strong> Magnoliya Grand.</strong>
              </p>
              <button 
                onClick={scrollToTop}
                className="hotelfooter-back-to-top"
                aria-label="Back to top"
              >
                <span>BACK TO TOP</span>
                <ChevronUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hotelfooter {
          background-color:#FFFFFF;
          padding: 60px 0 0;
          font-family: 'Arial', sans-serif;
          color: #333;
        }

        .hotelfooter-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .hotelfooter-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 60px;
          margin-bottom: 40px;
        }

        /* Left Section */
        .hotelfooter-left {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .hotelfooter-contact-section h3,
        .hotelfooter-email-section h3 {
          font-size: 14px;
          color: #999;
          margin: 0 0 8px 0;
          font-weight: normal;
        }

        .hotelfooter-phone-number {
          font-size: 24px;
          font-weight: bold;
          color: #333;
          text-decoration: none;
          display: block;
        }

        .hotelfooter-phone-number:hover {
          color: #d4a574;
        }

        .hotelfooter-email-address {
          font-size: 18px;
          color: #d4a574;
          text-decoration: none;
          display: block;
        }

        .hotelfooter-email-address:hover {
          opacity: 0.8;
        }

        .hotelfooter-brand-section {
          margin-top: 20px;
        }

        .hotelfooter-logo-container {
          display: flex;
          justify-content: flex-start;
          margin-bottom: 20px;
        }

        .hotelfooter-logo-image {
          max-width: 200px;
          height: auto;
          max-height: 80px;
        }

        .hotelfooter-brand-description {
          font-size: 14px;
          color: #999;
          margin: 0;
          font-style: italic;
        }

        /* Center Section */
        .hotelfooter-center .hotelfooter-section-title {
          font-size: 22px;
          color: #333;
          margin: 0 0 25px 0;
          font-weight: bold;
        }

        .hotelfooter-nav-menu {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .hotelfooter-nav-link {
          color: #999;
          text-decoration: none;
          font-size: 16px;
          transition: color 0.3s ease;
        }

        .hotelfooter-nav-link:hover {
          color: #d4a574;
        }

        /* Right Section */
        .hotelfooter-right .hotelfooter-section-title {
          font-size: 22px;
          color: #333;
          margin: 0 0 15px 0;
          font-weight: bold;
        }

        .hotelfooter-newsletter-description {
          font-size: 14px;
          color: #999;
          margin: 0 0 25px 0;
          line-height: 1.5;
        }

        .hotelfooter-newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 30px;
        }

        .hotelfooter-email-input {
          padding: 12px 15px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
          outline: none;
        }

        .hotelfooter-email-input:focus {
          border-color: #d4a574;
        }

        .hotelfooter-email-input::placeholder {
          color: #999;
        }

        .hotelfooter-subscribe-btn {
          padding: 12px 25px;
          background-color: #d4a574;
          color: white;
          border: none;
          border-radius: 25px;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          letter-spacing: 0.5px;
          transition: background-color 0.3s ease;
        }

        .hotelfooter-subscribe-btn:hover {
          background-color: #c19660;
        }

        .hotelfooter-social-icons {
          display: flex;
          gap: 10px;
        }

        .hotelfooter-social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background-color: #f0f0f0;
          color: #999;
          text-decoration: none;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .hotelfooter-social-icon:hover {
          background-color: #d4a574;
          color: white;
        }

        /* Bottom Section */
        .hotelfooter-bottom {
          border-top: 1px solid #eee;
          padding: 25px 0;
        }

        .hotelfooter-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .hotelfooter-copyright {
          font-size: 14px;
          color: #999;
          margin: 0;
        }

        .hotelfooter-bottom-right {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .hotelfooter-crafted-by {
          font-size: 14px;
          color: #999;
          margin: 0;
        }

        .hotelfooter-crafted-by strong {
          color: #333;
        }

        .hotelfooter-back-to-top {
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          color: #999;
          cursor: pointer;
          font-size: 12px;
          letter-spacing: 0.5px;
          transition: color 0.3s ease;
        }

        .hotelfooter-back-to-top:hover {
          color: #d4a574;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hotelfooter {
            padding: 40px 0 0;
          }

          .hotelfooter-container {
            padding: 0 15px;
          }

          .hotelfooter-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .hotelfooter-left {
            gap: 30px;
          }

          .hotelfooter-contact-section,
          .hotelfooter-email-section {
            text-align: center;
          }

          .hotelfooter-phone-number {
            font-size: 20px;
          }

          .hotelfooter-email-address {
            font-size: 16px;
          }

          .hotelfooter-logo-container {
            justify-content: center;
          }

          .hotelfooter-brand-description {
            text-align: center;
          }

          .hotelfooter-center,
          .hotelfooter-right {
            text-align: center;
          }

          .hotelfooter-nav-menu {
            align-items: center;
          }

          .hotelfooter-social-icons {
            justify-content: center;
          }

          .hotelfooter-bottom-content {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }

          .hotelfooter-bottom-right {
            flex-direction: column;
            gap: 15px;
          }
        }

        @media (max-width: 480px) {
          .hotelfooter-content {
            gap: 30px;
          }

          .hotelfooter-section-title {
            font-size: 18px !important;
          }
            

          .hotelfooter-newsletter-form {
            max-width: 280px;
            margin: 0 auto 30px;
          }

          .hotelfooter-phone-number {
            font-size: 18px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;