import React from 'react'
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { images} from "./images";

 const slides = images.map(({ original, width, height }) => ({
    src: original,
    width,
    height,
  }));

const ImageGallery = () => {
    const [index, setIndex] = useState(-1);

    const handleClick = (index: number) => setIndex(index);
  
    return (
      <div>
        <Gallery
          images={images}
          onClick={handleClick}
          enableImageSelection={false}
        />
        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </div>
    );
}

export default ImageGallery