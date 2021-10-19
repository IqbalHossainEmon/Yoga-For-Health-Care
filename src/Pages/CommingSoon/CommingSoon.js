import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CommingSoon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CommingSoon = () => {
  return (
    <div className="comming-soon">
      <div className="text-center">
        <h1 className="dance-font">Oops. Comming Soon...</h1>
        <Button variant="outline-primary">
          <Link className="text-white text-decoration-none" to="/home">
            <FontAwesomeIcon icon={faArrowLeft} />
            Go Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CommingSoon;
