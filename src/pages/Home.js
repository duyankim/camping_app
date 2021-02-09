import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Info from "../components/Info";
import Footer from "../components/Footer";
import { homeObjOne, homeObjTwo } from "../components/Info/InfoData";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Header />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Footer />
    </>
  );
};

export default Home;
