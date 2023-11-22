import React from "react";
import Footer from '../../Share/Footer';
import Banner from './Carusel/Banner';
import Contact from './Contact/Contact';
import Farmings from './Farming/Farmings';
import HappyClient from './HappyClient/HappyClient';

const Home = () => {
  return (
    <div>
      <Banner />
      {/* <Weather/> */}
      <Farmings />
      <HappyClient />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
