import "./App.css";
import Slider from "./components/Slider.jsx";
import SideNav from "./components/SideNav.jsx";
import ScrollIndicator from "./components/ScrollIndicator.jsx";

function App() {
  return (
    <div className={"o-page__inner o-page__inner--home"}>
      <section className={"o-section c-homepage-slider"}>
        <div className={"c-homepage-slider__inner"}>
          <div className="o-container">
            <Slider />
          </div>
        </div>

        {/*<div className="c-homepage-slider__canvas">*/}
        {/*  CANVAS WITH VIDEO ELEMENT THAT ROTATE LIKE CAROUSEL*/}
        {/*</div>*/}

        <SideNav />

        <ScrollIndicator />
      </section>
    </div>
  );
}

export default App;
