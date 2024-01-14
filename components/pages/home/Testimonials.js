import React, { Fragment } from "react";

import "swiper/css";
import "swiper/css/pagination";

import Testimonial from "../../ui/Testimonial";
import MobileTestimonials from "../../testimonials/MobileTestimonials";

const Testimonials = () => {
  return (
    <Fragment>
      <div className="mt-32 hidden sm:flex gap-10 items-center justify-center mb-20">
        <Testimonial name="- Мария, София">
          Просто невероятни произведения на изкуството! Картините, които закупих
          от вашия сайт, преобразиха напълно стаята ми. Благодаря ви за това
          уникално изживяване и за професионализма ви!
        </Testimonial>
        <Testimonial name="- Петър, Варна">
          Истинско удоволствие да пазарувам от вас! Изборът от картини е
          изключителен, а качеството на изпълнение - безупречно. Ще се върна
          отново за още!
        </Testimonial>
        <Testimonial name="- Елена, Пловдив">
          Благодаря ви за вдъхновяващата колекция от картини! Те не само
          украсяват дома ми, но и ми доставят радост всеки ден. Вашите творби са
          истинско чудо!
        </Testimonial>
      </div>

      <MobileTestimonials />
    </Fragment>
  );
};

export default Testimonials;