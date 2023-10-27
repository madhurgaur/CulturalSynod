import React, { useEffect } from "react";
import ClubLoader from "./Clubs-Loader/ClubLoader";
import HeroSection from "./HeroSection/HeroSection";
import Events from "./Events/Events";
import {  createHashRouter, RouterProvider } from 'react-router-dom';
import gsap from "gsap";
import About from "./About/About";
import Header from "./Header/Header";
import Home from "./Home/Home";
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
  const router = createHashRouter([

    {
      path: '/CulturalSynod',
      element:<Home/>,

    }, {
      path: '/CulturalSynod/about',
      element: <About />,
    }, {
      path: '/CulturalSynod/events',
      element: <Events />,
    }
  ])
  return (
    <>
      <div id="customCursor" className="customCursor"></div>
      <RouterProvider router={router} />

    </>
  );
};

export default App;
