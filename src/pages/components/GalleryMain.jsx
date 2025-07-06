import { useState } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "./Styles/GalleryMain.css";

// Masonry breakpoints
const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  768: 2,
  500: 1,
};

// Array of image objects
const images = Array.from({ length: 20 }, (_, i) => ({
  src: `/images/${i + 1}.jpg`,
}));

const GalleryMain = () => {
  const [index, setIndex] = useState(-1);

  return (
    <section className="gallery-main">
      <h2 className="gallery-heading">Browse our library of event designs</h2>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, i) => (
          <img
            key={i}
            src={image.src}
            alt={`Event ${i + 1}`}
            onClick={() => setIndex(i)}
            className="gallery-img"
          />
        ))}
      </Masonry>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images}
        plugins={[Zoom, Fullscreen]}
      />
    </section>
  );
};

export default GalleryMain;
