import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <Services />
    </div>
  );
};

export default Home;
