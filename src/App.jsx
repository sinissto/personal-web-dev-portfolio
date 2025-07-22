import "./App.css";
import Slider from "./components/Slider.jsx";
import ScrollIndicator from "./components/ScrollIndicator.jsx";
import NavBar from "./components/navigation/NavBar.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import { useState, useEffect } from "react";
import BackgroundDynamicGradient from "./components/background/BackgroundDynamicGradient.jsx";
// import gradient from "./scripts/Gradient.js";

function App() {
  const [isOpened, setIsOpened] = useState(false);

  // useEffect(() => {
  //   gradient.initGradient("#gradient-canvas");
  //   gradient.pozicija = "App";
  //   console.log(gradient);
  // }, []);

  return (
    <>
      <BackgroundDynamicGradient />
      <NavBar isOpened={isOpened} setIsOpened={setIsOpened} />
      <Navigation isOpened={isOpened} />
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
    </>
  );
}

export default App;
