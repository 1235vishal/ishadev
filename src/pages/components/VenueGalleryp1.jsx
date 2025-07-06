
// import { useRef } from 'react';
// import './Styles/VenueGalleryp1.css';

// const VenueGalleryp1 = () => {
//   const galleryRef = useRef(null);

//   return (
//     <div className="venuep1-container">
//       <div className="venuep1-hero-section">
//         <div className="venuep1-header-content">
//           <h1 className="venuep1-main-title">Magnoliya Grand Manor Conference & Event Center Experience</h1>
//           <p className="venuep1-subtitle">Take a virtual tour of our exquisite hotel</p>
//         </div>

//         <div className="venuep1-rotating-gallery" ref={galleryRef}>
//           <div className="venuep1-image-container">
//             <iframe 
//               src="https://www.gotyoulooking.com/1hiltongardenmanassasva/mht.html" 
//               className="venuep1-virtual-tour"
//               title="Hotel Virtual Tour"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VenueGalleryp1;
import { useRef, useState } from 'react';
import './Styles/VenueGalleryp1.css';

const VenueGalleryp1 = () => {
  const galleryRef = useRef(null);
  const iframeRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen();
      } else if (iframeRef.current.webkitRequestFullscreen) {
        iframeRef.current.webkitRequestFullscreen();
      } else if (iframeRef.current.msRequestFullscreen) {
        iframeRef.current.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  return (
    <div className="venuep1-container">
      <div className="venuep1-hero-section">
        <div className="venuep1-header-content">
          <h1 className="venuep1-main-title">Magnoliya Grand Manor Conference & Event Center Experience</h1>
          <p className="venuep1-subtitle">Take a virtual tour of our exquisite hotel</p>
        </div>

        <div className="venuep1-rotating-gallery" ref={galleryRef}>
          <div className="venuep1-image-container">
            <iframe 
              ref={iframeRef}
              src="https://www.gotyoulooking.com/1hiltongardenmanassasva/mht.html" 
              className="venuep1-virtual-tour"
              title="Hotel Virtual Tour"
              allowFullScreen
              allow="fullscreen"
            ></iframe>
            <button 
              className="venuep1-fullscreen-btn"
              onClick={toggleFullscreen}
              aria-label="Toggle fullscreen"
            >
              {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueGalleryp1;