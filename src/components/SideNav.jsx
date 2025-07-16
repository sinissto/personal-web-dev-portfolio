import "./SideNav.css";

const SideNav = ({ activeIndex, goToSlide }) => {
  // console.log("SideNav activeIndex:", activeIndex);
  return (
    <div className={"c-homepage-slider__pagination"}>
      <i className={"c-homepage-slider__pagination-progress"}>
        <span className={"c-homepage-slider__pagination-progress-line"}></span>
      </i>

      <div className="u-b3 u-fw-semi-bold u-uppercase">
        <div className="c-homepage-slider__pagination-list">
          <ul>
            <li
              className=""
              style={
                activeIndex === 0 ? { color: "#fff", fontStyle: "bold" } : null
              }
              onClick={() => goToSlide(0)}
            >
              <span className="">01 Nevera and Nevera R</span>
            </li>
            <li
              className=""
              style={
                activeIndex === 1 ? { color: "#fff", fontStyle: "bold" } : null
              }
              onClick={() => goToSlide(1)}
            >
              <span className="js-onboarding-menu-item">02 Technology </span>
            </li>
            <li
              className=""
              style={
                activeIndex === 2 ? { color: "#fff", fontStyle: "bold" } : null
              }
              onClick={() => goToSlide(2)}
            >
              <span className="js-onboarding-menu-item">03 Development </span>
            </li>
            <li
              className=""
              style={
                activeIndex === 3 ? { color: "#fff", fontStyle: "bold" } : null
              }
              onClick={() => goToSlide(3)}
            >
              <span className="js-onboarding-menu-item">04 About Us </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
