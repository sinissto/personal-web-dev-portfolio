import "./Navigation.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navigation = ({ isOpened }) => {
  useGSAP(
    () => {
      if (isOpened) {
        gsap.fromTo(
          ".c-big-menu__item, .c-menu__item",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.out",
          }
        );
      } else {
        gsap.set(".c-big-menu__item", { y: 40, opacity: 0 });
        gsap.set(".c-menu__item", { y: 40, opacity: 0 });
      }
    },
    { dependencies: [isOpened] }
  );

  return (
    <nav
      id="navigation"
      className={`c-navigation-menu-wrapper ${isOpened ? "navOpened" : ""}`}
    >
      <div
        className={`c-navigation-menu js-navigation-menu `}
        // style={{ opacity: 1, visibility: "inherit" }}
      >
        <i className="c-navigation-menu__bg js-navigation-bg-gradient is-loaded c-navigation-bg-gradient">
          <canvas
            className="is-loaded c-navigation-bg-gradient"
            width="1680"
            height="600"
          ></canvas>
        </i>
        <div className="c-navigation-menu__images">
          <ul className="c-menu-images js-menu-images">
            <li
              className="c-menu-images__item"
              style={{
                backgroundImage:
                  "url(https://web-cdn.rimac-automobili.com/wp-content/uploads/2021/06/08192727/menu-nevera_opt.jpg)",
              }}
            ></li>
            <li
              className="c-menu-images__item"
              style={{
                backgroundImage:
                  "url(https://web-cdn.rimac-automobili.com/wp-content/uploads/2021/06/08192723/menu-development_opt.jpg)",
              }}
            ></li>
            <li
              className="c-menu-images__item"
              style={{
                backgroundImage:
                  "url(https://web-cdn.rimac-automobili.com/wp-content/uploads/2020/08/01075847/Technology-min.jpg)",
              }}
            ></li>
            <li
              className="c-menu-images__item"
              style={{
                backgroundImage:
                  "url(https://web-cdn.rimac-automobili.com/wp-content/uploads/2021/06/08192720/menu-about-us_opt.jpg)",
              }}
            ></li>
          </ul>
        </div>
        <div className="o-container o-container--wide">
          <div className="c-navigation-menu__menu js-context-shifting-menu">
            <ul className="c-big-menu js-menu-primary">
              <li className="c-big-menu__item" style={{}}>
                <a
                  href="https://www.rimac-automobili.com/nevera/"
                  target=""
                  className="c-big-link u-uppercase js-context-shifting-menu-link"
                >
                  <span className="c-big-link__prepend u-b3">01</span>
                  <span
                    className="c-big-link__label u-a3 u-uppercase"
                    title="Nevera &amp; Nevera R"
                  >
                    Nevera &amp; Nevera R{" "}
                  </span>
                </a>
              </li>
              <li className="c-big-menu__item" style={{}}>
                <a
                  href="/development"
                  target=""
                  className="c-big-link u-uppercase js-context-shifting-menu-link"
                >
                  <span className="c-big-link__prepend u-b3">02</span>
                  <span
                    className="c-big-link__label u-a3 u-uppercase"
                    title="Development"
                  >
                    Development{" "}
                  </span>
                </a>
              </li>
              <li className="c-big-menu__item" style={{}}>
                <a
                  href="https://www.rimac-technology.com/"
                  target="_blank"
                  className="c-big-link u-uppercase js-context-shifting-menu-link"
                >
                  <span className="c-big-link__prepend u-b3">03</span>
                  <span
                    className="c-big-link__label u-a3 u-uppercase"
                    title="Technology"
                  >
                    Technology{" "}
                  </span>
                </a>
              </li>
              <li className="c-big-menu__item" style={{}}>
                <a
                  href="https://www.rimac-automobili.com/about-us/"
                  target=""
                  className="c-big-link u-uppercase js-context-shifting-menu-link"
                >
                  <span className="c-big-link__prepend u-b3">04</span>
                  <span
                    className="c-big-link__label u-a3 u-uppercase"
                    title="About us"
                  >
                    About us{" "}
                  </span>
                </a>
              </li>
            </ul>

            <ul className="c-menu js-menu-secondary">
              <li
                className="c-menu__item"
                style={{
                  transform: "translate(0px, 0px)",
                  opacity: 1,
                  visibility: "inherit",
                }}
              >
                <a
                  href="https://www.rimac-group.com/careers"
                  target="_blank"
                  className="c-link u-uppercase js-context-shifting-menu-link"
                >
                  <span className="c-link__label">Careers </span>
                  <span className="c-link__append">
                    <svg
                      className="u-icon u-icon--external-link"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        className="external-link"
                        d="M8.6,3l1.8,1.8L6.5,8.7l0.8,0.8l3.9-3.9L13,7.4V3H8.6z M11.9,11.9H4.1V4.1H8L6.9,3H4.1C3.8,3,3.5,3.1,3.3,3.3
	C3.1,3.5,3,3.8,3,4.1v7.8c0,0.3,0.1,0.6,0.3,0.8C3.5,12.9,3.8,13,4.1,13h7.8c0.3,0,0.6-0.1,0.8-0.3c0.2-0.2,0.3-0.5,0.3-0.8V9.1
	L11.9,8V11.9z"
                      ></path>
                    </svg>
                  </span>
                </a>
              </li>

              <li
                className="c-menu__item"
                style={{
                  transform: "translate(0px, 0px)",
                  opacity: 1,
                  visibility: "inherit",
                }}
              >
                <a
                  href="https://www.rimac-automobili.com/factory-tours/"
                  target=""
                  className="c-link u-uppercase js-context-shifting-menu-link"
                >
                  <span className="c-link__label">Factory tours </span>
                </a>
              </li>
              <li
                className="c-menu__item"
                style={{
                  transform: "translate(0px, 0px)",
                  opacity: 1,
                  visibility: "inherit",
                }}
              >
                <a
                  href="https://campus.rimac-automobili.com"
                  target="_blank"
                  className="c-link u-uppercase js-context-shifting-menu-link"
                >
                  <span className="c-link__label">Campus </span>
                  <span className="c-link__append">
                    <svg
                      className="u-icon u-icon--external-link"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        className="external-link"
                        d="M8.6,3l1.8,1.8L6.5,8.7l0.8,0.8l3.9-3.9L13,7.4V3H8.6z M11.9,11.9H4.1V4.1H8L6.9,3H4.1C3.8,3,3.5,3.1,3.3,3.3
	C3.1,3.5,3,3.8,3,4.1v7.8c0,0.3,0.1,0.6,0.3,0.8C3.5,12.9,3.8,13,4.1,13h7.8c0.3,0,0.6-0.1,0.8-0.3c0.2-0.2,0.3-0.5,0.3-0.8V9.1
	L11.9,8V11.9z"
                      ></path>
                    </svg>
                  </span>
                </a>
              </li>

              <li
                className="c-menu__item"
                style={{
                  transform: "translate(0px, 0px)",
                  opacity: 1,
                  visibility: "inherit",
                }}
              >
                <a
                  href="https://estore.rimac-automobili.com/"
                  target="_blank"
                  className="c-link u-uppercase js-context-shifting-menu-link"
                >
                  <span className="c-link__label">e_Store </span>
                  <span className="c-link__append">
                    <svg
                      className="u-icon u-icon--external-link"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        className="external-link"
                        d="M8.6,3l1.8,1.8L6.5,8.7l0.8,0.8l3.9-3.9L13,7.4V3H8.6z M11.9,11.9H4.1V4.1H8L6.9,3H4.1C3.8,3,3.5,3.1,3.3,3.3
	C3.1,3.5,3,3.8,3,4.1v7.8c0,0.3,0.1,0.6,0.3,0.8C3.5,12.9,3.8,13,4.1,13h7.8c0.3,0,0.6-0.1,0.8-0.3c0.2-0.2,0.3-0.5,0.3-0.8V9.1
	L11.9,8V11.9z"
                      ></path>
                    </svg>
                  </span>
                </a>
              </li>

              <li
                className="c-menu__item"
                style={{
                  transform: "translate(0px, 0px)",
                  opacity: 1,
                  visibility: "inherit",
                }}
              >
                <a
                  href="https://www.rimac-newsroom.com/"
                  target="_blank"
                  className="c-link u-uppercase js-context-shifting-menu-link"
                >
                  <span className="c-link__label">Media center </span>
                  <span className="c-link__append">
                    <svg
                      className="u-icon u-icon--external-link"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        className="external-link"
                        d="M8.6,3l1.8,1.8L6.5,8.7l0.8,0.8l3.9-3.9L13,7.4V3H8.6z M11.9,11.9H4.1V4.1H8L6.9,3H4.1C3.8,3,3.5,3.1,3.3,3.3
	C3.1,3.5,3,3.8,3,4.1v7.8c0,0.3,0.1,0.6,0.3,0.8C3.5,12.9,3.8,13,4.1,13h7.8c0.3,0,0.6-0.1,0.8-0.3c0.2-0.2,0.3-0.5,0.3-0.8V9.1
	L11.9,8V11.9z"
                      ></path>
                    </svg>
                  </span>
                </a>
              </li>

              <li
                className="c-menu__item"
                style={{
                  transform: "translate(0px, 0px)",
                  opacity: 1,
                  visibility: "inherit",
                }}
              >
                <a
                  href="https://www.rimac-automobili.com/retailer-map/"
                  target=""
                  className="c-link u-uppercase js-context-shifting-menu-link"
                >
                  <span className="c-link__label">Partners map </span>
                </a>
              </li>
              <li
                className="c-menu__item"
                style={{
                  transform: "translate(0px, 0px)",
                  opacity: 1,
                  visibility: "inherit",
                }}
              >
                <a
                  href="https://www.rimac-automobili.com/contact-us/"
                  target=""
                  className="c-link u-uppercase js-context-shifting-menu-link"
                >
                  <span className="c-link__label">Contact </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
