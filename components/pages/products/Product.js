import React, { useContext, useState, Fragment } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import dynamic from "next/dynamic";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Button from "../../ui/Button";
import DataContext from "../../../context/DataCotext";
import ProductDescription from "./ProductDescription";

const ProductModal = dynamic(() => import("../../layout/ProductModal"));

const Product = ({ product }) => {
  const [isPopup, setIsPopup] = useState(false);
  const [selectedImages, setSelectedImages] = useState(
    product ? product.coverImage : null
  );
  const [selectedImage, setSelectedImage] = useState();
  const { updateSharedData } = useContext(DataContext);
  const router = useRouter();

  const navigationHandler = () => {
    updateSharedData(product.id);
    router.push("/contact-us");
  };

  const openPopupHandler = (image) => {
    setSelectedImage(image);
    setIsPopup(true);
  };

  const closePopupHandler = () => {
    setIsPopup(false);
  };

  return (
    <Fragment>
      <div className="flex flex-col md:flex-row gap-14 overflow-y-hidden">
        {product && product.coverImage.length < 100 ? (
          <Swiper
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="w-full h-[20em] xsm:h-[30em] md:h-[36em] object-cover object-center"
          >
            {product.coverImage.map((image) => (
              <SwiperSlide>
                <button onClick={() => openPopupHandler(image)}>
                  <img
                    src={image}
                    alt={product.name}
                    className="h-full w-full object-contain object-center"
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <button
            onClick={() =>
              openPopupHandler(product ? product.coverImage : null)
            }
          >
            <img
              className="w-[56em] h-[30em] md:h-[36em] object-cover object-center"
              src={product ? product.coverImage : null}
              alt={product ? product.name : null}
            />
          </button>
        )}

        <ProductDescription
          product={product}
          navigationHandler={navigationHandler}
          Button={Button}
        />
      </div>
      {isPopup && (
        <ProductModal
          images={selectedImages}
          selectedImage={selectedImage}
          onClose={closePopupHandler}
        />
      )}
    </Fragment>
  );
};

export default Product;
