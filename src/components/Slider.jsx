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
        <div>Slide 1</div>
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
