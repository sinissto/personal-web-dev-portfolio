import "./App.css";
import Slider from "./components/Slider.jsx";
import ScrollIndicator from "./components/ScrollIndicator.jsx";
import NavBar from "./components/navigation/NavBar.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import { useState } from "react";
import BackgroundDynamicGradient from "./components/background/BackgroundDynamicGradient.jsx";

function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <BackgroundDynamicGradient />
      <NavBar isOpened={isOpened} setIsOpened={setIsOpened} />
      <Navigation isOpened={isOpened} />
      <div data-barba={"wrapper"}>
        <div
          id={"home"}
          className={"o-page o-page--home"}
          data-barba={"container"}
          data-barba-namespace={"homepage"}
        >
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

              <ScrollIndicator />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
