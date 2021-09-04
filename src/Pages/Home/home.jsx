import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/navbar";
import Featured from "../../Components/Featured/featured";
import List from "../../Components/List/list";
import axios from "axios";
import "./Home.scss";
const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists$(type ? "?type=" + type : "")${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMzIwN2M3ODVmMzQ0YTliMjZiYjMxZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMDY5MDc5MCwiZXhwIjoxNjMxMTIyNzkwfQ.7kVu-R_pOctnn4LKR3NxrulabrZJunktZzWtWSS49G4 ",
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
  });

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;
