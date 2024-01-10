import React, { Fragment, useState } from "react";
import { motion } from "framer-motion";
import Modal from "../../layout/Modal";

const GalleryList = ({ galleryImages }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopupHandler = (image) => {
    setSelectedImage(image);
    setIsPopupOpen(true);
  };

  const closePopupHandler = () => {
    setIsPopupOpen(false);
    setSelectedImage(null);
  };

  return (
    <Fragment>
      <motion.ul
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 items-top justify-center overflow-hidden"
        variants={{
          hidden: { opacity: 1, scale: 0 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {galleryImages.map((image) => (
          <motion.li
            key={image.image}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
          >
            <button onClick={() => openPopupHandler(image)}>
              <img
                className="w-[16.25em] h-[18.125em] object-cover object-center"
                src={image.image}
                alt={image.name}
              />
            </button>
          </motion.li>
        ))}
      </motion.ul>
      {isPopupOpen && (
        <Modal
          onClose={closePopupHandler}
          image={selectedImage.image}
          text={selectedImage.name}
        />
      )}
    </Fragment>
  );
};

export default GalleryList;
