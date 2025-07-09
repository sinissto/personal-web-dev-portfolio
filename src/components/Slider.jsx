import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

// Optional: import additional modules and styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";

const Slider = () => {
  return (
    <Swiper
      direction={"vertical"}
      loop={true}
      freeMode={true}
      modules={[Mousewheel]}
      mousewheel={true}
      // spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide className={"c-home-slider-item"}>
        <div className={"c-home-slider-item__inner"}>
          <div className={"c-home-slider-item__title u-a4 u-uppercase"}>
            <div className="u-split-title-line">Nevera and Nevera R</div>
          </div>

          <div className={"c-home-slider-item__content u-b2"}>
            <div className="u-split-text-line">
              Capable of exceptional speeds, swift and powerful beyond
              comprehension, Nevera is a force like no other. Designed,
              engineered and handcrafted in Croatia, defined by function and
              forged from a love for automotive.
            </div>
          </div>

          <a
            className="c-home-slider-item__link c-button c-button--light"
            href="https://www.rimac-automobili.com/nevera/"
            target=""
          >
            <span className="c-button__inner">
              <span className="c-button__label">
                <i className="c-button__label-inner" title="Discover">
                  Discover
                </i>
              </span>
            </span>
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide className={"c-home-slider-item"}>
        <div>Slide 2</div>
      </SwiperSlide>
      <SwiperSlide className={"c-home-slider-item"}>
        <div>Slide 3</div>
      </SwiperSlide>
      <SwiperSlide className={"c-home-slider-item"}>
        <div>Slide 4</div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
