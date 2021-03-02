import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PlaceDetail from "../components/PlaceDetail";
import Footer from "../components/Footer";

const DetailPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <PlaceDetail />
      <Footer />
    </>
  );
};

export default DetailPage;
