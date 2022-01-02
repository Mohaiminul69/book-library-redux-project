import React from "react";
import Navigation from "../Shared/Navigation/Navigation";
import Banner from "./Banner/Banner";
import Footer from "./../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navigation render={true} />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
