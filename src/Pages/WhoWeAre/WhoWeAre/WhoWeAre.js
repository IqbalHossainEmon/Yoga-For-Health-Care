import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <div className="who-we-are">
      <Helmet>
        <title>Who we are</title>
      </Helmet>
      <div className="header-1">
        <h1 className="text-white">Who we are</h1>
        <h4 className="text-white">A small Yoga studio with 3 trainers</h4>
      </div>
      <div className="header-2 my-3 mx-5">
        <div>
          <p>
            We are a small studio located in the heart of the city, where we
            practice and enjoy yoga classes. Whether you are an experienced yoga
            student or you have never practiced before, we offer the appropriate
            class for you. Tori, Faith and Lena are here to guide you and help
            you advance in this wonderful practice.
          </p>
          <p>
            Feel free to contact us for anything you want, learn more about us,
            check our weekly schedule, our membership plans and our classes. We
            have also put together a complete asanas library that can serve as a
            reference for your yoga lessons.
          </p>
        </div>
        <div className="mx-5 border-start p-5 border-4 border-dark bg-primary text-white ">
          <p>
            Yoga teaches us to cure what need not be endured and endure what
            cannot be cured…
          </p>
        </div>
      </div>
      <div>
        <Row xs={1} lg={3} className="g-5 mx-auto my-5">
          <Col className="text-center">
            <Card>
              <Card.Img
                variant="top"
                src="https://healthflex.plethorathemes.com/yoga-studio/wp-content/uploads/sites/7/2017/03/Yoga_Teacher_Profile_1-1.jpg"
              />
              <Card.Body>
                <Card.Title> Aisah Ginsbourg</Card.Title>
                <Card.Text>Hatha Yoga Trainer longer.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="text-center">
            <Card>
              <Card.Img
                variant="top"
                src="https://healthflex.plethorathemes.com/yoga-studio/wp-content/uploads/sites/7/2017/03/faith.jpg"
              />
              <Card.Body>
                <Card.Title>Faith Paterson</Card.Title>
                <Card.Text>Aerial Yoga Trainer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="text-center">
            <Card>
              <Card.Img
                variant="top"
                src="https://healthflex.plethorathemes.com/yoga-studio/wp-content/uploads/sites/7/2017/03/tori.jpg"
              />
              <Card.Body>
                <Card.Title>Tori Favorite</Card.Title>
                <Card.Text>Ashtanga Yoga Trainer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default WhoWeAre;
