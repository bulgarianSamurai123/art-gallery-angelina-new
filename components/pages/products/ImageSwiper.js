import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ImageSwiper = ({ product }) => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="w-full h-full"
    >
      <SwiperSlide>
        <Image
          className="w-[56em] h-[30em] md:h-[36em] object-none object-center"
          src={`/product-images/${product.id}/${product.images.image01}.jpg`}
          width={500}
          height={500}
          alt={product.name}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="w-[56em] h-[30em] md:h-[36em] object-none object-center"
          src={`/product-images/${product.id}/${product.images.image02}.jpg`}
          width={500}
          height={500}
          alt={product.name}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="w-[56em] h-[30em] md:h-[36em] object-none object-center"
          src={`/product-images/${product.id}/${product.images.image03}.jpg`}
          width={500}
          height={500}
          alt={product.name}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSwiper;
