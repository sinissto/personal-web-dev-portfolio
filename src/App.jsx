import "./App.css";

function App() {
  return (
    <div className={"o-page__inner o-page__inner--home"}>
      <section className={"o-section c-homepage-slider"}>
        <div className={"c-homepage-slider__inner"}>
          <div className="o-container"> SWIPER CONTAINER </div>
        </div>

        <div className="c-homepage-slider__canvas">
          CANVAS WITH VIDEO ELEMENT THAT ROTATE LIKE CAROUSEL
        </div>

        <div className="c-homepage-slider__pagination">SIDE NAV</div>

        <i className={"c-scroll-indicator"}>SCROLL INDICATOR</i>
      </section>
    </div>
  );
}

export default App;
