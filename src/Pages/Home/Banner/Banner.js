import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel fade className="banner">
      <Carousel.Item>
        <img
          className=" d-block w-100"
          src="https://i.ibb.co/SByChJz/yoga-1.png"
          alt="First slide"
        />
        <Carousel.Caption className="carousel-bg">
          <h3 className="mb-3 pb-2 border-purple mx-5">Yoga practice </h3>
          <p>
            When the breath wanders the mind also is unsteady. But when the
            breath is calmed the mind too will be still, and the yogi achieves.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" d-block w-100"
          src="https://i.ibb.co/NYfVzLX/yoga-2.png"
          alt="Second slide"
        />

        <Carousel.Caption className="carousel-bg">
          <h3 className="mb-3 pb-2 border-purple mx-5">Yoga Retreat</h3>

          <p>
            Enjoy 7 days in the beautifull island of Karpathos, full of Yoga,
            hiking and swimming in the best beaches!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" d-block w-100"
          src="https://i.ibb.co/pLRtvwz/yoga-3.png"
          alt="Third slide"
        />

        <Carousel.Caption className="carousel-bg">
          <h3 className="mb-3 pb-2 border-purple mx-5">Hatha Yoga</h3>
          <p>
            To lead you towards the experience of yoga – of union and
            boundlessness – we manipulate the energy and move the system in a
            certain way.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" d-block w-100"
          src="https://i.ibb.co/gTx2RDg/yoga-4.png"
          alt="Third slide"
        />

        <Carousel.Caption className="carousel-bg">
          <h3 className="mb-3 pb-2 border-purple mx-5">Ashtanga Yoga</h3>
          <p>
            Understanding the mechanics of the body, creating a certain
            atmosphere, and then using the body or body postures to drive your
            energy in specific directions is what Hatha Yoga or yogasanas are
            about.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
