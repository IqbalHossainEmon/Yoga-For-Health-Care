import React from "react";
import "./details.css";
import { useParams } from "react-router";
import useData from "../../../hooks/useData";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Details = () => {
  const { id } = useParams();
  const data = useData();
  let service = {};
  if (data[3]) {
    for (const x of data) {
      if (x.id === parseInt(id)) {
        service = x;
      }
    }
  }
  const { img, name, description } = service;

  return (
    <div
      className="details d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${img})`,
      }}
    >
      <div className=" text-center">
        <div>
          <div className="text-center">
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
        </div>
        <Link to="/home">
          <Button variant="outline-primary">
            <FontAwesomeIcon icon={faArrowLeft} /> Go to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Details;
