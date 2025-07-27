import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, FreeMode, Mousewheel } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

// Optional: import additional modules and styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";
import { useRef, useState } from "react";
import SideNav from "./SideNav.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // console.log("Slider activeIndex:", activeIndex);

  const swiperRef = useRef(null);
  const prevRealIndex = useRef(0);
  // const [rotationCount, setRotationCount] = useState(0);

  useGSAP(
    () => {
      const swiperEl = swiperRef.current.swiper; // Get Swiper instance
      const slides = swiperEl.slides;

      slides.forEach((slide, i) => {
        // console.log("Slide index:", i, "Slide element:", slide);
        gsap.fromTo(
          ".c-home-slider-item__inner",
          {
            opacity: 1,
            y: -10,
          },
          {
            opacity: 0.5,
            y: -10,
            scrollTrigger: {
              trigger: ".c-home-slider-item__inner",
              start: "center center",
              end: "bottom top",
              scrub: true,
              markers: true,
              toggleActions: "play none none reverse",
              scroller: ".swiper-wrapper",
            },
          }
        );
      });
    },
    { scope: swiperRef } // Dependencies array
  );

  const goToSlide = (index) => {
    // console.log("Going to slide:", index);
    // console.log("Swiper realIndex:", swiperRef.current.swiper.activeIndex);
    // swiperRef.current.swiper.realIndex = index;
    // swiperRef.current.swiper.activeIndex = swiperRef.current.swiper.realIndex;

    // console.log(
    //   "Swiper realIndex after setting:",
    //   swiperRef.current.swiper.activeIndex
    // );

    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideToLoop(index);
      setActiveIndex(index);
    }
  };

  const handleSlideChange = (swiper) => {
    const current = swiper.realIndex;
    // const previous = prevRealIndex.current;

    // console.log("Slide changed from", previous, "to", current);
    // console.log("Swiper in handleSlideChange:", swiper);

    // Detect loop from last slide to first slide
    // if (previous === 2 && current === 0) {
    //   console.log("Completed a full rotation, resetting...");
    //   setRotationCount((count) => count + 1);
    //
    //   // Optionally: do something, like resetting a timer or animation
    // }

    prevRealIndex.current = current;
    setActiveIndex(current);
  };

  return (
    <>
      <Swiper
        ref={swiperRef}
        modules={[Mousewheel, EffectFade, FreeMode]}
        direction={"vertical"}
        loop={true}
        freeMode={false}
        mousewheel={{ sensitivity: 1 }}
        speed={1200}
        // spaceBetween={30}
        slidesPerView={1}
        // navigation={true}
        // pagination={{ clickable: true }}
        onSlideChange={(swiper) => {
          handleSlideChange(swiper);
        }}
        onSwiper={(swiper) => {
          swiperRef.current.swiper = swiper;
          // Set initial active index
          if (activeIndex !== undefined) {
            swiper.slideTo(activeIndex);
          }
        }}
      >
        {/* Slide 1 */}
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
          <div
            className="c-homepage-slider__video-wrapper-overlay"
            // data-swiper-parallax-opacity="-1"
            style={{
              transitionDuration: "0ms",
              opacity: 1,
              transform: "translate3d(0px, 0px, 0px)",
            }}
          ></div>
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

          <div
            className="c-homepage-slider__video-wrapper-overlay"
            data-swiper-parallax-opacity="-1"
            style={{
              transitionDuration: "0ms",
              opacity: 1,
              transform: "translate3d(0px, 0px, 0px)",
            }}
          ></div>

          <div className="c-homepage-slider__video-wrapper">
            <video
              data-index="2"
              crossOrigin="anonymous"
              loop=""
              playsInline={true}
              preload="metadata"
              poster="https://web-cdn.rimac-automobili.com/wp-content/uploads/2020/10/27140649/poster_03_optimized.jpg"
              className="js-home-slider-video c-homepage-slider__video"
            >
              <source
                type="video/mp4"
                src="https://web-cdn.rimac-automobili.com/wp-content/uploads/2020/10/27140751/Development_cc.mp4"
              />
            </video>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
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
                Development
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
                We are taking you behind the scenes of globally homologated
                electric hypercar design, engineering and testing.
              </div>
            </div>
            <a
              className="c-home-slider-item__link c-button c-button--light"
              href="https://www.rimac-automobili.com/development/"
              target=""
              style={{
                transform: "translate(0px, 0px)",
                opacity: 1,
                visibility: "inherit",
              }}
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

          <div
            className="c-homepage-slider__video-wrapper-overlay"
            data-swiper-parallax-opacity="-1"
            style={{
              transitionDuration: "0ms",
              opacity: 1,
              transform: "translate3d(0px, 0px, 0px)",
            }}
          ></div>

          <div className="c-homepage-slider__video-wrapper">
            <video
              data-index="3"
              crossOrigin="anonymous"
              loop=""
              playsInline={true}
              preload="metadata"
              poster="https://web-cdn.rimac-automobili.com/wp-content/uploads/2020/10/30151445/About_Us_poster.jpg"
              className="js-home-slider-video c-homepage-slider__video"
            >
              <source
                type="video/mp4"
                src="https://web-cdn.rimac-automobili.com/wp-content/uploads/2020/10/30151443/About_Us_optimized.mp4"
              />
            </video>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
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
                About Us
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
                We challenge convention and push technology to the edge of
                possibility. Welcome to Rimac. This is our story.
              </div>
            </div>
            <a
              className="c-home-slider-item__link c-button c-button--light"
              href="https://www.rimac-automobili.com/about-us/"
              target=""
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
      </Swiper>

      <SideNav activeIndex={activeIndex} goToSlide={goToSlide} />
    </>
  );
};

export default Slider;
