import React from "react";
import { Helmet } from 'react-helmet-async';
import Services from "../../components/Services";
import About from "../../components/About";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Hello World</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <About/>
      <Services/>
    </>
  );
};

export default Home;
