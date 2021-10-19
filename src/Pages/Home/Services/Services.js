import React from "react";
import { Container, Row } from "react-bootstrap";
import useData from "../../../hooks/useData";
import Service from "../Service/Service";

const Services = () => {
  const data = useData();
  return (
    <Container className="my-5">
      <Row xs={1} md={2} lg={3} className="g-5">
        {data[3] &&
          data.map((service) => <Service key={service.id} service={service} />)}
      </Row>
    </Container>
  );
};

export default Services;
