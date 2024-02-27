import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // Import CSS

function GalleryLightBox() {
  const images = [
    { namaimg: "/images/gallery/farm/farm-img-1.png" },
    { namaimg: "/images/gallery/farm/farm-img-2.png" },
    { namaimg: "/images/gallery/farm/farm-img-3.png" },
    // List of images you want to display in the lightbox
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const detailImg = images.map((item) => item.namaimg);

  console.log(detailImg);

  return (
    <div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.namaimg}
          alt={`Image ${index}`}
          onClick={() => openLightbox(index)}
          style={{ width: "200px", height: "200px", margin: "5px" }}
        />
      ))}
      {isOpen && (
        <Lightbox
          mainSrc={detailImg[photoIndex]}
          nextSrc={detailImg[(photoIndex + 1) % detailImg.length]}
          prevSrc={
            detailImg[(photoIndex + detailImg.length - 1) % detailImg.length]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + detailImg.length - 1) % detailImg.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % detailImg.length)
          }
        />
      )}
    </div>
  );
}

export default GalleryLightBox;
