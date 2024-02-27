import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Modal = ({ image, alt, onClose }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center rounded-r-md bg-gray-800 bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div className="bg-white p-2 rounded-sm shadow-lg">
        <img src={image} alt={alt} className="w-[300px]" />
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-white hover:text-gray-400"
        >
          X
        </button>
      </div>
    </div>
  );
};

const ImagePopup = ({ galleryImg }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const detailImg = galleryImg.map((item) => item.namaImg);
  console.log(detailImg);

  return (
    <div>
      <div className="grid lg:grid-cols-5 grid-cols-2">
        {galleryImg.map((item, index) => (
          <div
            key={index}
            className="content-img cursor-pointer relative overflow-hidden transform transition duration-300 ease-in-out hover:scale-110 hover:z-10"
          >
            <img
              src={item.namaImg}
              alt={item.nama}
              onClick={() => openModal(index)}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      {showModal && (
        <Lightbox
          mainSrc={detailImg[selectedImage]}
          nextSrc={detailImg[(selectedImage + 1) % detailImg.length]}
          prevSrc={
            detailImg[
              (selectedImage + detailImg.length - 1) % detailImg.length
            ]
          }
          onCloseRequest={() => setShowModal(false)}
          onMovePrevRequest={() =>
            setSelectedImage(
              (selectedImage + detailImg.length - 1) % detailImg.length
            )
          }
          onMoveNextRequest={() =>
            setSelectedImage((selectedImage + 1) % detailImg.length)
          }
        />
      )}
    </div>
  );
};

export default ImagePopup;
