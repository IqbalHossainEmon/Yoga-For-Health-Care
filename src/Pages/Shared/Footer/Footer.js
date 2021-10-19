import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div
      target="_blank"
      className="footer d-flex align-items-center justify-content-center"
    >
      <div className="text-center">
        <a target="_blank" href="https://www.facebook.com" rel="noreferrer">
          <FontAwesomeIcon
            className="mx-3 my-3 text-white f-size"
            icon={faFacebook}
          />
        </a>
        <a target="_blank" href="https://www.youtube.com" rel="noreferrer">
          <FontAwesomeIcon
            className="mx-3 my-3 text-white f-size"
            icon={faYoutube}
          />
        </a>
        <a target="_blank" href="https://www.github.com" rel="noreferrer">
          <FontAwesomeIcon
            className="mx-3 my-3 text-white f-size"
            icon={faGithub}
          />
        </a>

        <p>
          <small>Copyright ©2077 all rights reserved</small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
