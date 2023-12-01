import React, { Suspense } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Header from "../Header/Header";
import "./Gallery.css";
const Gallery = () => {
  useEffect(function () {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    gsap.to("#imgCont3", {
      opacity: 1,
      duration: 1,
      delay: 0,
    });
    gsap.to("#imgCont2", {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 0.5,
    });
    gsap.to("#imgCont1", {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 1,
    });
    gsap.to("#imgCont4", {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 0.5,
    });
    gsap.to("#imgCont5", {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 1,
    });
  }, []);
  return (
    <>
      <Header />
      <div className="fullcontainer">
        <div id="imgCont1">
          <img src="./GalleryPhotos/fest1.jpg" />
          <img src="./GalleryPhotos/fest2.jpg" />
          <img src="./GalleryPhotos/fest1.jpg" />
          <img src="./GalleryPhotos/cookie.jpg" />
        </div>
        <div id="imgCont2">
          <img src="./GalleryPhotos/fest1.jpg" />
          <img src="./GalleryPhotos/fest2.jpg" />
          <img src="./GalleryPhotos/fest1.jpg" />
          <img src="./GalleryPhotos/fest2.jpg" />
        </div>
        <div id="imgCont3">
          <img src="./GalleryPhotos/fest2.jpg" />
          <img src="./GalleryPhotos/fest1.jpg" />
          <img src="./GalleryPhotos/fest2.jpg" />
          <img src="./GalleryPhotos/fest1.jpg" />
        </div>
        <div id="imgCont4">
          <img src="./GalleryPhotos/fest1.jpg" />
          <img src="./GalleryPhotos/fest2.jpg" />
          <img src="./GalleryPhotos/fest1.jpg" />
          <img src="./GalleryPhotos/fest2.jpg" />
        </div>
        <div id="imgCont5">
          <img src="./GalleryPhotos/fest2.jpg" />
          <img src="./GalleryPhotos/fest1.jpg" />
          <img src="./GalleryPhotos/fest2.jpg" />
          <img src="./GalleryPhotos/fest1.jpg" />
        </div>
      </div>
    </>
  );
};

export default Gallery;
