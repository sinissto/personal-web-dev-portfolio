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
        {/*<div*/}
        {/*  className="c-homepage-slider__video-wrapper-overlay"*/}
        {/*  data-swiper-parallax-opacity="-1"*/}
        {/*  style="transition-duration: 0ms; opacity: 1; transform: translate3d(0px, 0px, 0px);"*/}
        {/*></div>*/}
        <div className="c-homepage-slider__video-wrapper">
          <video
            data-index="1"
            crossOrigin="anonymous"
            loop={true}
            playsInline={true}
            preload="metadata"
            poster="https://web-cdn.rimac-automobili.com/wp-content/uploads/2020/10/30151448/Tech_Loop_2_optimized.jpg"
            className="c-homepage-slider__video"
          >
            <source
              type="video/mp4"
              src="https://web-cdn.rimac-automobili.com/wp-content/uploads/2020/10/30151451/Tech_Loop_2_optimized.mp4"
            />
          </video>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}

      <SwiperSlide className={"c-home-slider-item"}>
        <div
          className="c-home-slider-item__inner"
          data-swiper-parallax-opacity="-1"
          style={{
            transitionDuration: "0ms",
            opacity: 1,
            transform: "translate3d(0px, 0px, 0px)",
          }}
        >
          <div
            className="c-home-slider-item__title u-a4 u-uppercase js-onboarding-title"
            style={{}}
          >
            <div
              className="u-split-title-line"
              style={{
                display: "block",
                position: "relative",
                transform: "translate(0px, 0px)",
                opacity: 1,
                visibility: "inherit",
              }}
            >
              Technology
            </div>
          </div>
          <div
            className="c-home-slider-item__content u-b2 js-onboarding-text"
            style={{}}
          >
            <div
              className="u-split-text-line"
              style={{
                display: "block",
                position: "relative",
                transform: "translate(0px, 0px)",
                opacity: 1,
                visibility: "inherit",
              }}
            >
              From bespoke component design and engineering to full series
              production. We are the leader in high-performance EV technology.
            </div>
          </div>
          <a
            className="c-home-slider-item__link c-button c-button--light"
            href="https://www.rimac-technology.com/"
            target="_blank"
            style={{
              transform: "translate(0px, 0px)",
              opacity: 1,
              visibility: "inherit",
            }}
          >
            <span className="c-button__inner">
              <span className="c-button__label">
                <i className="c-button__label-inner" title="Explore">
                  Explore
                </i>
              </span>
            </span>
          </a>
        </div>
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
