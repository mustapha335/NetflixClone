import React from "react";
import Navbar from "../Components/Navbar/navbar";
import Featured from "../Components/Featured/featured";
import List from "../Components/List/list";
import "./Home.scss";
const home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="series" />
      <List />
      <List />
      <List />
    </div>
  );
};

export default home;
