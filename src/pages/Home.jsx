import React from "react";
import Hookes from "./Hookes";
import Rest from "./Rest";
import Map from "./Map";
import { Link } from "react-router-dom";

const Home = () => {
  const links = [
    { id: 1, pages: <Hookes />, path: "/hookes" },
    { id: 2, pages: <Rest />, path: "/rest" },
    { id: 3, pages: <Map />, path: "/map" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link key={link.id} to={link.path}>
          <button>Click to {link.pages}</button>
        </Link>
      ))}
    </>
  );
};

export default Home;
