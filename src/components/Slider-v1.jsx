import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, FreeMode, Mousewheel } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

// Optional: import additional modules and styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";
import SideNav from "./SideNav.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const slidesData = [
  {
    title: "Nevera and Nevera R",
    content:
      "Capable of exceptional speeds, swift and powerful beyond comprehension, Nevera is a force like no other. Designed, engineered and handcrafted in Croatia, defined by function and forged from a love for automotive.",
    link: "https://www.rimac-automobili.com/nevera/",
    videoSrc:
      "https://web-cdn.rimac-automobili.com/wp-content/uploads/2020/10/30151451/Tech_Loop_2_optimized.mp4",
    videoPoster:
      "https://web-cdn.rimac-automobili.com/wp-content/uploads/2020/10/30151448/Tech_Loop_2_optimized.jpg",
  },
  {
    title: "Technology",
    content:
      "From bespoke component design and engineering to full series production. We are the leader in high-performance EV technology.",
    link: "https://www.rimac-technology.com/",
    videoSrc:
      "https://web-cdn.rimac-automobili.com/wp-content/uploads/2020/10/27140751/Development_cc.mp4",
    videoPoster:
      "https://web-cdn.rimac-automobili.com/wp-content/uploads/2020/10/27140649/poster_03_optimized.jpg",
  },
  {
    title: "Development",
    content:
      "We are taking you behind the scenes of globally homologated electric hypercar design, engineering and testing.",
    link: "https://www.rimac-automobili.com/development/",
    videoSrc:
      "https://web-cdn.rimac-automobili.com/wp-content/uploads/2020/10/30151443/About_Us_optimized.mp4",
    videoPoster:
      "https://web-cdn.rimac-automobili.com/wp-content/uploads/2020/10/30151445/About_Us_poster.jpg",
  },
  {
    title: "About Us",
    content:
      "We challenge convention and push technology to the edge of possibility. Welcome to Rimac. This is our story.",
    link: "https://www.rimac-automobili.com/about-us/",
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidesRef = useRef([]);

  // console.log("Slider activeIndex:", activeIndex);

  const swiperRef = useRef(null);
  const prevRealIndex = useRef(0);
  // const [rotationCount, setRotationCount] = useState(0);

  useGSAP(
    () => {
      const swiperEl = swiperRef.current.swiper; // Get Swiper instance
      const slides = swiperEl.slides;

      slides.forEach((slide, i) => {
        console.log("Slide index:", i, "Slide element:", slide);
        gsap.to(slide, {
          opacity: 0,
          x: 100,

          scrollTrigger: {
            trigger: slide,
            start: "15% 85%",
            end: "85% 15%",
            scrub: true,
            markers: true,
          },
        });
      });
    },
    { scope: swiperRef } // Dependencies array
  );

  useEffect(() => {
    // Initial fade in for the first slide
    if (slidesRef.current[0]) {
      gsap.fromTo(
        slidesRef.current[0],
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.8 }
      );
    }
  }, []);

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

    slidesRef.current.forEach((slide, idx) => {
      if (idx === swiper.activeIndex) {
        gsap.to(slide, {
          autoAlpha: 1,
          duration: 0.8,
          ease: "power2.out",
          onStart: () => {
            // Optionally, you can add ScrollTrigger here if you want scroll-based triggers
            ScrollTrigger.refresh();
          },
        });
      } else {
        gsap.to(slide, {
          autoAlpha: 0,
          duration: 0.8,
          ease: "power2.in",
        });
      }
    });

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
        onInit={(swiper) => handleSlideChange(swiper)}
        onSwiper={(swiper) => {
          swiperRef.current.swiper = swiper;
          // Set initial active index
          if (activeIndex !== undefined) {
            swiper.slideTo(activeIndex);
          }
        }}
      >
        {slidesData.map((slide, idx) => (
          <SwiperSlide
            key={slide.id || idx}
            ref={(el) => (slidesRef.current[idx] = el)}
            style={{ opacity: idx === 0 ? 1 : 0, transition: "opacity 0.8s" }}
            className={"c-home-slider-item"}
          >
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
                  {slide.title}
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
                  {slide.content}
                </div>
              </div>
              <a
                className="c-home-slider-item__link c-button c-button--light"
                href={slide.link}
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
                data-index={idx + 1}
                crossOrigin="anonymous"
                loop={true}
                playsInline={true}
                preload="metadata"
                poster={slide.videoPoster}
                className="c-homepage-slider__video"
              >
                <source type="video/mp4" src={slide.videoSrc} />
              </video>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <SideNav activeIndex={activeIndex} goToSlide={goToSlide} />
    </>
  );
};

export default Slider;
