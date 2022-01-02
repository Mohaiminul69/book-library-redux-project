import React from "react";
import { Carousel } from "react-bootstrap";
import "./banner.css";

const Banner = () => {
  return (
    <div className="sliderContainer">
      <Carousel className="customSlider">
        <Carousel.Item className="sliderItem">
          <img
            className="d-block w-100"
            src="https://i.ibb.co/wrXr2Lt/pexels-min-an-694740.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="sliderItem">
          <img
            className="d-block w-100"
            src="https://i.ibb.co/PQL7nss/pexels-janko-ferlic-590493.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="bannerSlogan">
        <img src="https://i.ibb.co/kJRg6D0/3.png" alt="" />
        <h1 className="mt-3 text-center text-white text-capitalize display-6">
          For those who love to read.
        </h1>
      </div>
    </div>
  );
};

export default Banner;
