import React from "react";
import Hookes from "./Hookes";
import Rest from "./Rest";
import Map from "./Map";
import { Link } from "react-router-dom";
import Parent from "./Parent";

const Home = () => {
  const links = [
    { id: 1, pages: "Hookes", path: "/hookes" },
    { id: 2, pages: "Rest", path: "/rest" },
    { id: 3, pages: "Map", path: "/map" },
    { id: 3, pages: "Parent", path: "/parent" },
  ];

  return (
    <>
      <div className="home-box">
        {links.map((link) => (
          <Link key={link.id} to={link.path}>
            <button>Click to {link.pages}</button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
