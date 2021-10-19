import React from "react";
import "./details.css";
import { useParams } from "react-router";
import useData from "../../../hooks/useData";

const Details = () => {
  const { id } = useParams();
  let service = {};
  const data = useData();
  if (data[3]) {
    data.map((x) => {
      if (x.id === parseInt(id)) {
        service = x;
      }
    });
  }
  console.log(service.img);
  const { img, name, description } = service;

  return (
    <div
      className="details d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${img})`,
      }}
    >
      <div className="text-center">
        <img src={img} alt="" />
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Details;
