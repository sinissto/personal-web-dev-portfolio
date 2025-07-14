import "./BackgroundDynamicGradient.css";
import gradient from "../../scripts/Gradient.js";
import { useEffect } from "react";

const BackgroundDynamicGradient = () => {
  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <div className="c-page-bg js-page-bg js-gradient-bg is-loaded c-gradient-bg">
      {/*<i className="c-page-bg__bg js-page-bg-bg"></i>*/}
      <canvas
        id={"gradient-canvas"}
        className="is-loaded c-gradient-bg"
      ></canvas>
    </div>
  );
};

export default BackgroundDynamicGradient;
