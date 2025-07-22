import "./BackgroundDynamicGradient.css";
import Gradient from "../../scripts/Gradient.js";
import { useEffect } from "react";

const gradient = new Gradient();

const BackgroundDynamicGradient = () => {
  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
    console.log(gradient);
  }, []);

  return (
    <div className="c-page-bg js-page-bg js-gradient-bg is-loaded c-gradient-bg">
      <i className="c-page-bg__bg js-page-bg-bg">
        <canvas
          id={"gradient-canvas"}
          className="is-loaded c-gradient-bg"
        ></canvas>
      </i>
    </div>
  );
};

export default BackgroundDynamicGradient;
