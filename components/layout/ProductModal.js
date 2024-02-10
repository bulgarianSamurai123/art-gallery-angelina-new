import React, { useEffect, useState } from "react";
import ZoomImage from "./ZoomImage";

const ProductModal = ({ images, onClose, selectedImage }) => {
  const [currentlySelectedImage, setCurrentlySelectedImage] =
    useState(selectedImage);

  const changeCurrentImageHandler = (image) => {
    setCurrentlySelectedImage(image);
  };

  useEffect(() => {
    console.log(currentlySelectedImage);
  }, [currentlySelectedImage]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 flex flex-col items-center rounded-xl gap-5">
        <div className="h-auto ml-auto">
          <button onClick={onClose}>
            <img src="/assets/close.svg" alt="Close Btn" />
          </button>
        </div>
        <div className="flex flex-col-reverse sm:flex-row gap-10 sm:gap-20 items-center ">
          <ul className="flex flex-row sm:grid sm:grid-cols-2 gap-2">
            {images.map((image) => (
              <li key={image}>
                <button onClick={() => changeCurrentImageHandler(image)}>
                  <img
                    className={`w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-40 rounded-sm ${
                      image === currentlySelectedImage
                        ? "border-4 border-gray-250"
                        : "border-2 border-gray-380"
                    }`}
                    src={image}
                    alt="Product images"
                  />
                </button>
              </li>
            ))}
          </ul>
          <div>
            <ZoomImage imageSrc={currentlySelectedImage} alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
