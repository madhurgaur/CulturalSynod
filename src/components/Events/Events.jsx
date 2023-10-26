import React, { useEffect } from "react";
import "./Events.css";
const Events = () => {
  return (
    <div className="eventWrapper">
      <div data-scroll data-scroll-speed="-0.1" className="decImage1">
        <img src="bunting.png" alt="bunting" />
      </div>
      <div data-scroll data-scroll-speed="0.1" className="decImage2">
        <img
          src="https://webstockreview.net/images/streamers-clipart-3.png"
          alt="bunting"
        />
      </div>
      <div className="decImage3">
        <img src="https://media.tenor.com/images/9f87cb0ae4929104b4050a05e1badd61/tenor.gif" alt="bunting" />
      </div>
      <div className="eventHeading">
        <h2>Our Events</h2>
      </div>
      <div data-scroll data-scroll-speed="0.05" className="eventContainer">
        <div className="box one">
          <img className="bannerImg" src="banner.png" alt="banner" />
          <button className="eventButton">Book</button>
          <div className="info">
            <h2>Heats</h2>
            <span>30|10|2023</span>
          </div>
          <img
            
            className="eventImg"
            src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&q=80&w=1975&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img1"
          />
        </div>
        <div className="box two">
          <button className="eventButton">Book</button>
          <div className="info">
            <h2>Abhyodaya</h2>
            <span>30|10|2023</span>
          </div>
          <img
            className="eventImg"
            src="https://images.unsplash.com/photo-1697519755368-84be46c440e9?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img2"
          />
        </div>
        <div className="box three">
          <button className="eventButton">Upcoming</button>
          <div className="info">
            <h2>Event 3</h2>
            <span>Upcoming</span>
          </div>
          <img
            className="eventImg"
            src="https://images.unsplash.com/photo-1682695795931-a546abdb6733?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img3"
          />
        </div>
        <div className="box four">
          <button className="eventButton">Upcoming</button>
          <div className="info">
            <h2>Event 4</h2>
            <span>Upcoming</span>
          </div>
          <img
            className="eventImg"
            src="https://images.unsplash.com/photo-1697806959316-4864f26a09cf?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img4"
          />
        </div>
        <div className="box five">
          <button className="eventButton">Upcoming</button>
          <div className="info">
            <h2>Event 5</h2>
            <span>Upcoming</span>
          </div>
          <img
            className="eventImg"
            src="https://images.unsplash.com/photo-1697660256381-48717eec6dbb?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img5"
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
