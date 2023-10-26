import React, { useEffect } from "react";
import ClubLoader from "./Clubs-Loader/ClubLoader";
import HeroSection from "./HeroSection/HeroSection";
import Events from "./Events/Events";
import gsap from "gsap";
const App = () => {
  useEffect(function () {
    async function runloco() {
      const locoScroll = (await import("locomotive-scroll")).default;
      const scroll = new locoScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        multiplier: 1,
        smartphone: {
          smooth: true,
        },
        mobile: {
          breakpoint: 0,
          smooth: true,
          multiplier: 0.5,
          class: "is-reveal",
        },
        lenisOptions: {
          wrapper: window,
          content: document.documentElement,
          lerp: 0.1,
          duration: 1.2,
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          smoothTouch: false,
          wheelMultiplier: 0.8,
          touchMultiplier: 0.8,
          normalizeWheel: true,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        },
      });
    }
    runloco();
    var cursor = document.getElementById("customCursor");
    console.log("locoscroll running");
    window.addEventListener("mousemove", function (e) {
      gsap.to(".customCursor", {
        x: e.clientX + cursor.clientWidth / 2,
        y: e.clientY + cursor.clientHeight / 2,
      });
    });
    document.querySelectorAll("button").forEach(function (button) {
      button.addEventListener("mouseover", function () {
        gsap.to(cursor, {
          background: "transparent",
          height: "50px",
          width: "50px",
          border: "3px solid tomato",
          left: "-50px",
          top: "-50px",
        });
      });
      button.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
          background: "tomato",
          height: "20px",
          width: "20px",
          border: "0px solid tomato",
          left: "-20px",
          top: "-20px",
        });
      });
    });
  });
  return (
    <div>
      <div id="customCursor" className="customCursor"></div>
      {/* <ClubLoader /> */}
      <HeroSection />
      <Events />
    </div>
  );
};

export default App;
