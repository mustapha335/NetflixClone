import React from "react";
import Navbar from "../Components/Navbar/navbar";
import Featured from "../Components/Featured/featured";
import "./Home.scss";
const home = () => {
  return (
    <div className="home">
      <Navbar />

      <Featured type="series" />
    </div>
  );
};

export default home;
