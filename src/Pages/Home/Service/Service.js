import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Service = (props) => {
  const { img, description, name, id } = props.service;

  return (
    <div>
      <Col>
        <Card className="card text-center">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description.slice(0, 160)}...</Card.Text>
          </Card.Body>
          <Link to={`/details/${id}`}>
            <Button variant="outline-warning">
              Details <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </Link>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
