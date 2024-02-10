import React, { useContext } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Button from "../../ui/Button";
import DataContext from "../../../context/DataCotext";

const Product = ({ product }) => {
  const { updateSharedData } = useContext(DataContext);
  const router = useRouter();

  const navigationHandler = () => {
    updateSharedData(product.id);
    router.push("/contact-us");
  };

  return (
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
              <img src={image} alt={product.name} className="h-full w-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <img
          className="w-[56em] h-[30em] md:h-[36em] object-cover object-center"
          src={product ? product.coverImage : null}
          alt={product ? product.name : null}
        />
      )}

      <div>
        <h1 className="text-3xl">{product ? product.name : null}</h1>
        {product ? (
          <span className="text-xl font-light">
            {product.price === new RegExp("^[1-9]", "g")
              ? `${product.price}лв.`
              : product.price}
          </span>
        ) : null}
        <p className="text-base font-light text-gray-250">
          {product ? product.description : null}
        </p>
        <Button onClick={navigationHandler}>Поръчай</Button>
      </div>
    </div>
  );
};

export default Product;
