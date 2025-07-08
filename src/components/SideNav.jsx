import "./SideNav.css";

const SideNav = () => {
  return (
    <div className={"c-homepage-slider__pagination"}>
      <i className={"c-homepage-slider__pagination-progress"}>
        <span className={"c-homepage-slider__pagination-progress-line"}></span>
      </i>

      <div className="c-homepage-slider__pagination-current u-b3 u-fw-semi-bold u-uppercase">
        <div className="c-homepage-slider__pagination-list">
          <ul>
            <li className="js-pagination-list-item is-active">
              <span className="js-onboarding-menu-item">
                01 Nevera and Nevera R
              </span>
            </li>
            <li className="js-pagination-list-item">
              <span className="js-onboarding-menu-item">02 Technology </span>
            </li>
            <li className="js-pagination-list-item">
              <span className="js-onboarding-menu-item">03 Development </span>
            </li>
            <li className="js-pagination-list-item">
              <span className="js-onboarding-menu-item">04 About Us </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
