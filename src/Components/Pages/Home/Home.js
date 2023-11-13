import React from "react";
import Banner from "./Carusel/Banner";
import Farmings from "./Farming/Farmings";
import HappyClient from './HappyClient/HappyClient';

const Home = () => {
  return (
    <div>
      <Banner />
      {/* <Weather/> */}
      <Farmings />
      <HappyClient />
    </div>
  );
};

export default Home;
