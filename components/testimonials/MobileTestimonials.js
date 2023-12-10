import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Testimonial from "../ui/Testimonial";

const MobileTestimonials = () => {
  return (
    <div className="block sm:hidden mt-32">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full h-full"
      >
        <SwiperSlide className="flex items-center justify-center mb-12">
          <Testimonial name="- Мария, София">
            Просто невероятни произведения на изкуството! Картините, които
            закупих от вашия сайт, преобразиха напълно стаята ми. Благодаря ви
            за това уникално изживяване и за професионализма ви!
          </Testimonial>
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial name="- Петър, Варна">
            Истинско удоволствие да пазарувам от вас! Изборът от картини е
            изключителен, а качеството на изпълнение - безупречно. Ще се върна
            отново за още!
          </Testimonial>
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial name="- Елена, Пловдив">
            Благодаря ви за вдъхновяващата колекция от картини! Те не само
            украсяват дома ми, но и ми доставят радост всеки ден. Вашите творби
            са истинско изкуство!
          </Testimonial>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MobileTestimonials;
