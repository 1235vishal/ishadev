// pages/Aboutus.jsx
import Footer from '../pages/components/Footer';
import FooterHero from './components/FooterHero';
import GalleryMain from './components/GalleryMain';
import TourHero from './components/TourHero';
import Gallery from './Heropage/Gallery';


const Gallerypage = () => {
  return (
    <>
          <Gallery />
          <TourHero />
          <GalleryMain />
          <FooterHero />
      <Footer />
    </>
  );
};

export default Gallerypage;
